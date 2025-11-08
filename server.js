import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"; // <-- MỚI: Import mô-đun File System

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Định dạng bytes sang đơn vị dễ đọc (KB, MB, GB...)
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Lấy thông tin file package một cách đồng bộ khi server khởi động
 */
function getPackageInfo(fileName) {
  try {
    const filePath = path.join(__dirname, "packages", fileName);
    const stats = fs.statSync(filePath);
    return {
      size: formatBytes(stats.size), 
    };
  } catch (error) {
    console.error(`Lỗi: Không tìm thấy file package "${fileName}".`);
    return { size: "N/A" }; 
  }
}

const winInfo = getPackageInfo("vpn-windows.zip");
const macInfo = getPackageInfo("vpn-macos.zip");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/packages", express.static(path.join(__dirname, "packages")));

app.use(express.static(path.join(__dirname, "public")));

const vpnPackages = [
  {
    id: "win",
    name: "VPN for Windows",
    version: "1.0.0", 
    osVersion: "Windows 10 or later", 
    size: winInfo.size, 
    memory: "12 MB", 
    networkType: "Wi-Fi or LAN",
    description: "Secure VPN client for Windows platform.",
    file: "/packages/vpn-windows.zip",
  },
  {
    id: "mac",
    name: "VPN for macOS",
    version: "1.0.0", 
    osVersion: "macOS Sequoia 15.1 or later", 
    size: macInfo.size,
    memory: "35 MB",
    networkType: "Wi-Fi or LAN",
    description: "Secure VPN client for macOS platform.",
    file: "/packages/vpn-macos.zip",
  },
];

app.get("/api/packages", (req, res) => {
  res.json(vpnPackages);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/download.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "download.html"));
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  //console.log("Package Info:", vpnPackages);
});
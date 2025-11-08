import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files từ thư mục packages
app.use("/packages", express.static(path.join(__dirname, "packages")));

// Serve static files từ thư mục public
app.use(express.static(path.join(__dirname, "public")));

// Dữ liệu các gói VPN
const vpnPackages = [
  {
    id: "win",
    name: "VPN for Windows",
    version: "1.0.0",
    osVersion: "Windows 10 or later",
    size: "75 MB",
    memory: "3 MB",
    networkType: "Wi-Fi or LAN",
    description: "Secure VPN client for Windows platform.",
    file: "/packages/vpn-windows.zip",
  },
  {
    id: "mac",
    name: "VPN for macOS",
    version: "1.0.0",
    osVersion: "macOS Sequoia 15.1 or later",
    size: "80 MB",
    memory: "35 MB",
    networkType: "Wi-Fi or LAN",
    description: "Secure VPN client for macOS platform.",
    file: "/packages/vpn-macos.zip",
  },
];

// API endpoint trả về danh sách gói VPN
app.get("/api/packages", (req, res) => {
  res.json(vpnPackages);
});

// Route cho trang chủ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route cho trang download
app.get("/download.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "download.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
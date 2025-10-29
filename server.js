// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Dữ liệu gói VPN (có thể sau này lấy từ DB)
const vpnPackages = [
  {
    id: "win",
    name: "VPN for Windows",
    version: "1.0.0",
    osVersion: "Windows 10 or later",
    size: "75 MB",
    memory: "3 MB",
    networkType: "Wifi or LAN",
    description: "Secure VPN client for Windows platform.",
    // file: "/packages/vpn-windows.zip",
    file: "/packages/note.txt",
  },
  {
    id: "mac",
    name: "VPN for macOS",
    version: "1.0.0",
    osVersion: "macOS Sequoia 15.1 or later",
    size: "80 MB",
    memory: "35 MB",
    networkType: "Wifi or LAN",
    description: "Secure VPN client for macOS platform.",
    // file: "/packages/vpn-macos.zip",
    file: "/packages/instruction.txt",
  },
];

// Public folder (ảnh, CSS, JS frontend)
app.use(express.static(path.join(__dirname, "public")));

// API trả danh sách gói
app.get("/api/packages", (req, res) => {
  res.json(vpnPackages);
});

// Serve trang chính
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

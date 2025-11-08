// data.js - Centralized data configuration

export const siteConfig = {
  name: "HermesVPN",
  description: "Free, Fast & Secure VPN Service",
  tagline: "100% Miễn phí"
};

export const features = [
  {
    icon: "Shield",
    title: "Secure Encryption",
    description: "Military-grade encryption to protect your data and online activities"
  },
  {
    icon: "Zap",
    title: "High Speed",
    description: "Optimized servers for fast and stable connection without compromising security"
  },
  {
    icon: "Globe",
    title: "Global Servers",
    description: "Access content from anywhere with servers located around the world"
  },
  {
    icon: "Eye",
    title: "No Logs Policy",
    description: "We don't track, collect, or share your private data"
  },
  {
    icon: "Lock",
    title: "Automatic Kill Switch",
    description: "Blocks all internet traffic if the VPN connection drops, preventing your data from leaking."
  },
  {
    icon: "Server",
    title: "One-Click Connect",
    description: "Simple and intuitive interface for easy connection"
  }
];

export const faqs = [
  {
    q: "What is a VPN and why do I need one?",
    a: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It protects your privacy by hiding your IP address and encrypting your data to prevent tracking or eavesdropping."
  },
  {
    q: "Is HermesVPN fast?",
    a: "Yes! HermesVPN is optimized for speed using the next-generation WireGuard protocol. Most users experience less than 10% speed loss, and in some cases, it can even improve speed by bypassing ISP limits."
  },
  {
    q: "Can I use HermesVPN on multiple devices?",
    a: "Absolutely! You can protect several devices at the same time — including computers, smartphones, and tablets."
  },
  {
    q: "Is using HermesVPN legal?",
    a: "Yes, using a VPN is legal in most countries. HermesVPN is a legitimate security tool used by people all around the world."
  },
  {
    q: "Is HermesVPN free?",
    a: "Yes! HermesVPN is a non-commercial learning project and completely free to use. We do not charge any fees from users."
  },
  {
    q: "Can I use HermesVPN to watch movies online?",
    a: "Of course! HermesVPN is optimized for streaming and works well with popular online platforms."
  }
];

export const stats = [
  { icon: "Users", value: "Free", label: "100% Free" },
  { icon: "Server", value: "Global", label: "Global Servers" },
  { icon: "Award", value: "99.9%", label: "Uptime" },
  { icon: "Star", value: "4.8/5", label: "User Rating" }
];

export const platformsData = {
  windows: {
    id: 'windows',
    name: 'Windows',
    icon: 'Monitor',
    emoji: '🪟',
    features: [
      'One-click connection',
      'Automatic optimal server selection',
      'Automatic kill switch',
      'DNS leak protection',
      'Split tunneling',
      'System tray integration',
      'Auto-start with Windows',
      'Real-time connection statistics'
    ],
    installation: [
      'Download the installer using the button below',
      'Run the .zip file and extract it',
      'Run the installer with Administrator privileges',
      'Follow the installation instructions',
      'Launch HermesVPN and enter your login credentials',
      'Click Connect to establish a secure VPN connection'
    ],
    faqs: [
      {
        q: 'Do I need administrator rights to install?',
        a: 'Yes, administrator privileges are required to install VPN software on Windows because it needs to configure network adapters and system settings.'
      },
      {
        q: 'Is it compatible with Windows 11?',
        a: 'Yes, HermesVPN is fully compatible with Windows 11 and optimized for the latest Windows features.'
      },
      {
        q: 'Why does Windows Defender show a warning for the installer file?',
        a: 'New software versions can sometimes trigger Windows Defender alerts. HermesVPN is completely safe, and you can proceed with the installation confidently.'
      }
    ]
  },
  macos: {
    id: 'macos',
    name: 'macOS',
    icon: 'Apple',
    emoji: '🍎',
    features: [
      'Quick access from the menu bar',
      'Native macOS design',
      'Optimized for Apple Silicon',
      'Automatic network protection',
      'Auto-reconnect',
      'Low power consumption',
      'Keychain integration',
      'Dark mode support',
      'Touch Bar support',
      'Notification Center integration'
    ],
    installation: [
      'Download the .zip file using the button below',
      'Extract the downloaded .zip file',
      'Open the .dmg file or run the installer',
      'Drag the HermesVPN app into the Applications folder',
      'Open Applications and launch HermesVPN',
      'Grant VPN configuration permission when prompted'
    ],
    faqs: [
      {
        q: 'Does it work on Apple Silicon (M1/M2/M3)?',
        a: 'Yes! HermesVPN is a Universal Binary optimized for both Intel and Apple Silicon processors, ensuring native performance across all Macs.'
      },
      {
        q: 'Is it compatible with macOS Sonoma?',
        a: 'Yes, HermesVPN supports all versions from macOS 11 Big Sur to the latest macOS Sonoma and future versions.'
      },
      {
        q: 'Why does macOS ask for VPN permissions?',
        a: 'macOS explicitly requires permission to add a VPN configuration for security reasons. This is a standard system prompt that all VPN apps must request.'
      }
    ]
  }
};
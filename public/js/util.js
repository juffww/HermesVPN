// utils.js - Utility functions

/**
 * Handle file download
 * @param {string} fileUrl - URL of the file to download
 */
export function handleDownload(fileUrl) {
  console.log('Downloading:', fileUrl);
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Fetch packages from API
 * @returns {Promise<Array>} Array of packages
 */
export async function fetchPackages() {
  try {
    const response = await fetch("/api/packages");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Packages loaded:', data);
    return data;
  } catch (error) {
    console.error('Error loading packages:', error);
    throw error; // Re-throw để component xử lý
  }
}

/**
 * Get icon component by name
 * @param {string} iconName - Name of the icon
 * @param {object} props - Props for the icon
 * @returns {React.Element} Icon element
 */
export function getIcon(iconName, props = {}) {
  const icons = window.LucideReact;
  if (!icons || !icons[iconName]) {
    console.warn(`Icon ${iconName} not found`);
    return null;
  }
  return window.React.createElement(icons[iconName], props);
}
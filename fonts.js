// fonts.js — only list font names here, weights 400 & 700 added automatically
const googleFonts = [
  "Roboto",
  "Archivo",
  "Open Sans",
  "Bungee"
];

// Build the Google Fonts URL with wght@400;700 for each font
const families = googleFonts.map(font => 
  `family=${encodeURIComponent(font)}:wght@400;700`
);

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?" + families.join("&") + "&display=swap";

document.head.appendChild(link);

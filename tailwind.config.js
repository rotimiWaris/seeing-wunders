export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"], // Futuristic tech font
        kanit: ["Kanit", "sans-serif"], // Clean modern font
        wunder: ['"Bebas Neue"', "sans-serif"], // Bold headline font
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        gradientMove: "gradientMove 15s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        floatMedium: "floatMedium 4s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(20%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

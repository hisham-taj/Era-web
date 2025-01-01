module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Match all source files
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom,  #d6eaf8 , #73c6b6 )",
      },
    },
  },
  plugins: [],
};

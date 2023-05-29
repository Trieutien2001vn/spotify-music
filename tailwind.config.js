const { calculateNewValue } = require("@testing-library/user-event/dist/utils");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "green-nav-player": "calc(100vh - 6rem - 6rem )",
      },
    },
  },
  plugins: [],
};

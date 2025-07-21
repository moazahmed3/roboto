/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8750f7",
        secondary: "#2a1454",
        body: "#0f0715",
        muted: "#dddddd",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        typing: {
         
        
          "0%": { content: `"I am Fr|"` },
          "12%": { content: `"I am Fro|"` },
          "14%": { content: `"I am Fron|"` },
          "16%": { content: `"I am Front|"` },
          "18%": { content: `"I am Front-|"` },
          "20%": { content: `"I am Front-E|"` },
          "22%": { content: `"I am Front-En|"` },
          "24%": { content: `"I am Front-End|"` },
          "26%": { content: `"I am Front-End D|"` },
          "28%": { content: `"I am Front-End De|"` },
          "30%": { content: `"I am Front-End Dev|"` },
          "32%": { content: `"I am Front-End Deve|"` },
          "34%": { content: `"I am Front-End Devel|"` },
          "36%": { content: `"I am Front-End Develo|"` },
          "38%": { content: `"I am Front-End Develop|"` },
          "40%": { content: `"I am Front-End Developer|"` },
          "42%": { content: `"I am Front-End Developer|"` },

          // حذف Front-End Developer
          "44%": { content: `"I am Front-End Develope|"` },
          "46%": { content: `"I am Front-End Develop|"` },
          "48%": { content: `"I am Front-End Develo|"` },
          "50%": { content: `"I am Front-End Devel|"` },
          "52%": { content: `"I am Front-End Deve|"` },
          "54%": { content: `"I am Front-End Dev|"` },
          "56%": { content: `"I am Front-End D|"` },
          "58%": { content: `"I am Front-End |"` },
          "60%": { content: `"I am Front-End|"` },
          "62%": { content: `"I am Front-|"` },
          "64%": { content: `"I am Fro|"` },
          "66%": { content: `"I am Fr|"` },
        

          // Freelancer
     
          "72%": { content: `"I am Fr|"` },
          "74%": { content: `"I am Fre|"` },
          "76%": { content: `"I am Free|"` },
          "78%": { content: `"I am Freel|"` },
          "80%": { content: `"I am Freela|"` },
          "82%": { content: `"I am Freelan|"` },
          "84%": { content: `"I am Freelanc|"` },
          "86%": { content: `"I am Freelance|"` },
          "88%": { content: `"I am Freelancer|"` },

          // حذف Freelancer
          "90%": { content: `"I am Freelance|"` },
          "92%": { content: `"I am Freelan|"` },
          "94%": { content: `"I am Freela|"` },
          "96%": { content: `"I am Freel|"` },
          "97%": { content: `"I am Free|"` },
          "99%": { content: `"I am Fr|"` },
        },
      },
      animation: {
        typing: "typing 7s  infinite",
      },
      fontFamily: {
        primary: ['Sora', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

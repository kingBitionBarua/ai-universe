/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#66cc37",
        
"secondary": "#f7d127",
        
"accent": "#a3dae2",
        
"neutral": "#181A25",
        
"base-100": "#ECEBEF",
        
"info": "#2F69E4",
        
"success": "#187C66",
        
"warning": "#A66703",
        
"error": "#E53124",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


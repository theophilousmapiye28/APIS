import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      red:'#D80027',
      blue:'#070320',
      green:'#D80027',
      white:'#fff',
      aqua:'#00AEAE',
     }
    },
  },
 



  plugins: [],
};
export default config;

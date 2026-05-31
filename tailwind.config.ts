import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Earthy, natural kitchen palette — terracotta, sage, warm cream, iron grey
        terracotta: { 50:"#FDF4F0", 100:"#FAE5DA", 200:"#F5C7B0", 300:"#EDA07E", 400:"#E27550", 500:"#C85A30", 600:"#A84420" },
        sage: { 50:"#F4F7F4", 100:"#E5EDE5", 200:"#C8D9C8", 300:"#A2BFA2", 400:"#7BA27B", 500:"#5A875A", 600:"#426842" },
        iron: { 50:"#F6F7F8", 100:"#EAECEF", 200:"#D0D5DA", 300:"#A8B2BB", 400:"#758292", 500:"#4E6070", 600:"#364554" },
        cream: { 50:"#FDFCF8", 100:"#FAF8F0", 200:"#F2EDD9", 300:"#E8E0C0" },
        gold: { 400:"#D4A942", 500:"#B8902E" },
      },
      fontFamily: { sans: ["var(--font-inter)","system-ui","sans-serif"], serif: ["var(--font-playfair)","Georgia","serif"] },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #FDF4F0 0%, #F4F7F4 50%, #FDFCF8 100%)",
        "terra-gradient": "linear-gradient(135deg, #FAE5DA 0%, #F5C7B0 100%)",
        "sage-gradient": "linear-gradient(135deg, #E5EDE5 0%, #C8D9C8 100%)",
      },
      boxShadow: { soft:"0 2px 20px rgba(0,0,0,0.05)", card:"0 4px 24px rgba(0,0,0,0.07)", "card-hover":"0 8px 40px rgba(0,0,0,0.11)" },
    },
  },
  plugins: [],
};
export default config;

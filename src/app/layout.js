
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";


export const metadata = {
  title: "Mounia Mikou - L'avocate de votre expatriation",
  description: "Legal expertise for your Portuguese journey. Mounia Mikou provides personalized legal support for relocation, real estate investment, and business creation in Portugal.",
  keywords: [
    "Mounia Mikou",
    "avocat Portugal",
    "relocation Portugal",
    "investissement immobilier Portugal",
    "création d'entreprise Portugal",
    "visa D7 Portugal",
    "avocat francophone Portugal",
    "expatriation Portugal",
    "juriste Portugal"
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>

        <body>{children}</body>

      </LanguageProvider>
    </html>
  );
}

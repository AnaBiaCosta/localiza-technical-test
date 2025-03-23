// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Bakbak_One, Nunito } from "next/font/google";
import "./globals.scss";

const bakbakOne = Bakbak_One({
  variable: "--font-bakbak-one",
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
  style: ['normal'],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
  style: ['normal'],
});

export const metadata = {
  title: "Space X",
  description: "Learn about Space X rockets and astronauts",
};

// const theme = createTheme({
//   typography: {
//     fontFamily: "local(--font-nunito)",
//   }
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${bakbakOne.variable} ${nunito.variable}`}>
        {/* <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}

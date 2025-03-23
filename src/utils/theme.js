import { Bakbak_One, Nunito } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const bakbakOne = Bakbak_One({
  variable: "--font-bakbak-one",
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
  style: ['normal'],
});

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
  style: ['normal'],
});

export const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
});

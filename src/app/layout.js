import { bakbakOne, nunito } from '@/utils/theme';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import "./globals.scss";

import { NavBar } from '@/components/NavBar';

export const metadata = {
  title: "Space X",
  description: "Learn about Space X rockets and astronauts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${bakbakOne.variable} ${nunito.variable}`}>
        <NavBar />
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}

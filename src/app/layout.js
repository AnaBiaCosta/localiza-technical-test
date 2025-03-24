import { bakbakOne, nunito } from '@/utils/theme';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import ReactQueryProvider from "@/components/ReactQueryProvider";
import "@/app/globals.scss";

import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: "Space X",
  description: "Learn about Space X rockets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${bakbakOne.variable} ${nunito.variable}`}>
        <NavBar />
        <MuiThemeProvider>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </MuiThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

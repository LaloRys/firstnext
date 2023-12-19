import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css"

export const metadata = {
  title: "Mi tiendita con NextJS",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, nextjs",
};

const roboto = Roboto({
  weight: ["300","400","500","700"],
  style: ["italic", "normal"],
  subsets: ["latin-ext", "latin"]
})

function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

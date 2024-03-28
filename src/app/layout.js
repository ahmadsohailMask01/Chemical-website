import { react } from "react";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Bounce, ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PAKChem Enterprises - Chemical & Factory",
  description:
    "Discover top-quality chemical solutions with PAK Chem Traders, your trusted partner in Pakistan for the buying and selling of premium-grade chemicals essential for detergents and household products. Our commitment to excellence ensures reliable sourcing and distribution, empowering your business with the finest raw materials for a cleaner and brighter future. Explore the diverse range of chemicals tailored for your needs with PAK Chem Traders – where quality meets reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ padding: `0%`, margin: `0%` }}>
        <nav>
          <Header />
        </nav>
        <main>{children}</main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <Toaster richColors />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

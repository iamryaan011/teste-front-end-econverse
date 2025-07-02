//components
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

//types
import { LayoutProps } from "@/types/LayoutProps";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

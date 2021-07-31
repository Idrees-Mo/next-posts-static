import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>MyPost | {title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

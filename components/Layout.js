import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>MyPost | {title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

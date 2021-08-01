import Layout from "../components/Layout";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Layout title="About" description="This about page for the project">
      <div>
        <h1>About This Project</h1>
        <p>
          This practice project done with Next JS to make a static blog site.
          The blogs are fecthed from fake API jsonplaceholder
          (https://jsonplaceholder.typicode.com ).
        </p>

        <Link href="/">
          <a className="btn">Go back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default AboutPage;

import axios from "axios";
import Layout from "../components/Layout";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href="/">
          <a className="btn">Go back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Post;

// server-side function to get paths
export const getStaticPaths = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const paths = res.data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const post = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return {
    props: { post: post.data },
  };
};

import axios from "axios";
import Layout from "../components/Layout";

const Post = ({ post }) => {
  console.log(post);
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Layout>
  );
};

export default Post;

// server-side method to get paths
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

import axios from "axios";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <Layout title="Home" description="Posts home page">
      <div>
        {posts.map((post) => (
          <li>
            {post.id} - {post.title}
            <a href={`/${post.id}`}>{post.id}</a>
          </li>
        ))}
      </div>
    </Layout>
  );
}

// server-side function

export const getStaticProps = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { posts: posts.data.splice(5, 10) },
  };
};

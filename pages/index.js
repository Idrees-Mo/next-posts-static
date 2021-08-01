import axios from "axios";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import styles from "../styles/Home.module.scss";

export default function Home({ posts }) {
  return (
    <Layout title="Home" description="Posts home page">
      <h1 className="title">All Posts</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
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

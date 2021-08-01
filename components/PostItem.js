const PostItem = ({ post }) => {
  return (
    <li>
      <a href={`/${post.id}`}>{post.title}</a>
    </li>
  );
};

export default PostItem;

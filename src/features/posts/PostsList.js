import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((p) => (
    <article key={p.id}>
      <h3>{p.title}</h3>
      <p>{p.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <>
      <h3>The Posts</h3>
      {renderedPosts}
    </>
  );
};

export default PostsList;

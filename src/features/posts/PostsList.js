import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // const posts = useSelector((state) => state.posts);

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((p) => (
    <article key={p.id}>
      <h3>{p.title}</h3>
      <p>{p.content.substring(0, 100)}</p>
      <div className="postCredit">
        <PostAuthor authorId={p.userId} />
        <TimeAgo timestamp={p.date} />
      </div>
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

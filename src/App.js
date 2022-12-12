import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className="App">
      <h1>** Starter App **</h1>
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;

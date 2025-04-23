import './App.css'
import PostPage from './components/PostPage';
import { PostsProvider } from './context/PostContext';

function App() {


  return (
    <PostsProvider>
      <>
        <PostPage />
      </>
    </PostsProvider>
  )
}

export default App

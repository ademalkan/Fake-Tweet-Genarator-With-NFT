import "./App.css";
import FakeTweetGenerator from "./components/FakeTweetGenerator";
import TweetBox from "./components/TweetBox";
import TweetBuyBox from "./components/TweetBuyBox";
import { PostProvider } from "./context/PostContext";

function App() {
  
  return (
    <>
      <div className="container">
        <PostProvider>
          <FakeTweetGenerator />
          <div className="fakeTweet">
            <TweetBox />
            <TweetBuyBox />
          </div>
          </PostProvider>
      </div>
    </>
  );
}

export default App;

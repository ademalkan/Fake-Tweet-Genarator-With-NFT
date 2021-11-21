import "./App.css";
import FakeTweetGenerator from "./components/FakeTweetGenerator";
import TweetBox from "./components/TweetBox";
import TweetOffers from "./components/TweetOffers";
import { PostProvider } from "./context/PostContext";

function App() {
  
  return (
    <>
      <div className="container">
        <PostProvider>
          <FakeTweetGenerator />
          <div className="fakeTweet">
            <TweetBox />
            <TweetOffers />
          </div>
          </PostProvider>
      </div>
    </>
  );
}

export default App;

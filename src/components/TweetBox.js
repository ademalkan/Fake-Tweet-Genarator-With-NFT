import {usePostContext} from '../context/PostContext';

function TweetBox() {
    const {data} = usePostContext();
    return (
        <div className="tweetBox">
        <div className="tweetHead">
          <div className="tweetUserProfile">
            <img src={data.imgUrl} alt="User"/>
            <div className="tweetUserNameBox">
              <div className="tweetUserName">
                {data.name} {data.isCertified === "yes" ? <i className="fas fa-badge-check"></i> : null}
              </div>
              <div className="tweetUserNickName">{data.mention}</div>
            </div>
          </div>
          <div className="tweetLogo">
            <img src="https://upload.wikimedia.org/wikipedia/tr/f/f2/Twitter-bird-light-bgs.png" alt="twitter"/>
          </div>
        </div>
        <div className="tweetBody">
          <div className="tweetText">
            <p>{data.postText}</p>
          </div>
          <div className="tweetDateInformation">
            <div className="tweetClock">{data.time}</div>
            <div className="tweetDate">{data.date}</div>
          </div>
        </div>
        <div className="tweetFooter">
          <div className="tweetLike">
            <i className="fal fa-heart"></i> {data.likeAmount}
          </div>
          <div className="tweetComment">
            <i className="fal fa-comment"></i> {data.commentAmount}
          </div>
        </div>
      </div>
    )
}

export default TweetBox

import { useState } from "react";

function TweetBuyBox({onclick}) {
  const [offer, setOffer] = useState();
  return (
    <div className="tweetBuyBox ">
      <div className="tweetBuyBoxHeader">
        <h2>Want to buy this tweet?</h2>
        {offer > 0 ? <p>Your offer is ${offer}</p> : <p>Please your offer</p>}
      </div>
      <div className="tweetBuyBoxContent">
        <input name="numberBox" type="number" onChange={e => setOffer(e.target.value)} />
        <input type="button" value="OFFER" onClick={onclick} />
      </div>
    </div>
  );
}

export default TweetBuyBox;

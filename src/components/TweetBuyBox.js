import {useState} from "react";
import TweetOffers from "./TweetOffers";

function TweetBuyBox() {
  const [offer, setOffer] = useState();
  const addOfferHandler = () => {
    const offerValue = document.querySelector('[name="numberBox"]').value;
    setOffer(offerValue);
  };
  return (
    <div className="tweetBuyBox ">
      <div className="tweetBuyBoxHeader">
        <h2>Want to buy this tweet?</h2>
        {offer > 0 ? <p>Your offer is ${offer}</p> : <p>Please your offer</p>}
      </div>
      <div className="tweetBuyBoxContent">
        <input name="numberBox" type="number" defaultValue="" />
        <input type="button" value="OFFER" onClick={addOfferHandler} />
      </div>

      <TweetOffers offer={offer} />
    </div>
  );
}

export default TweetBuyBox;

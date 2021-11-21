import {useState} from "react";
import TweetOffers from "./TweetOffers";
import {usePostContext} from "../context/PostContext"

function TweetBuyBox() {
  const {data} = usePostContext()
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

      <TweetOffers offer={{user: data.name, offer: offer}} />
    </div>
  );
}

export default TweetBuyBox;

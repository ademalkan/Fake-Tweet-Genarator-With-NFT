import { useEffect, useState } from "react/cjs/react.development";

function TweetOffers({ offer }) {
  const offers = [
    { user: "@denise", offer: 320000 },
    { user: "@stacia", offer: 360000 },
    { user: "@kipling", offer: 450000 },
    { user: "@evaline", offer: 420000 },
    { user: "@frankie", offer: 390000 },
    { user: "@mindy", offer: 260000 },
    { user: "@kimmy", offer: 400000 },
    { user: "@cybill", offer: 480000 },
    { user: "@john", offer: 500000 },
  ];

  const [offersList, setOffersList] = useState(offers.sort(
    (first, second) => second.offer - first.offer
  ));

  useEffect(() => {
    offer > 0
      ? setOffersList(
          [{ user: "you", offer: offer }, ...offers].sort(
            (first, second) => second.offer - first.offer
          )
        )
      : setOffersList(offersList.sort(
        (first, second) => second.offer - first.offer
      ));
  }, [offersList]);
  return (
    <div className="tweetBuyBoxHeader">
      <h2>All Offers</h2>
      <ul className="offerList">
        {offersList.map((item, key) => (
          <li key={key}>
            <span className="mention">{item.user}</span>
            ${item.offer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetOffers;
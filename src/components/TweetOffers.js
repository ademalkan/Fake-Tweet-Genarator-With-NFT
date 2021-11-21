import TweetBuyBox from "./TweetBuyBox";

function TweetOffers() {

  const offers = [
    { user: "@john", offer: 500000 },
    { user: "@cybill", offer: 480000 },
    { user: "@kipling", offer: 450000 },
    { user: "@evaline", offer: 420000 },
    { user: "@kimmy", offer: 400000 },
    { user: "@frankie", offer: 390000 },
    { user: "@stacia", offer: 360000 },
    { user: "@denise", offer: 320000 },
    { user: "@mindy", offer: 260000 },
  ];



  return (
    <div>
      <TweetBuyBox  />
      <div className="tweetBuyBoxHeader">
        <h2> All Offers </h2>
        <ul className="offerList">
          {offers.map((item, key) => (
            <li key={key}>
              <span className="mention"> {item.user} </span>${item.offer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TweetOffers;

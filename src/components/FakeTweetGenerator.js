import {usePostContext} from "../context/PostContext"

function FakeTweetGenerator() {
  const {data,setData} = usePostContext();

  return (
    <div className="fakeTweetGenerator">
      <div className="fakeTweetGeneratorOptions">
        <h4>IMG URL</h4>
        <input onChange={(e) => setData({...data,imgUrl: e.target.value})} defaultValue={data.imgUrl} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Name</h4>
        <input onChange={(e) => setData({...data,name:e.target.value})} defaultValue={data.name} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Mention</h4>
        <input onChange={(e) => setData({...data,mention:e.target.value})} defaultValue={data.mention} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Is Certified</h4>
        <div>( yes or no )</div>
        <input onChange={(e) => setData({...data,isCertified:e.target.value})} defaultValue={data.isCertified} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Post Text</h4>
        <input onChange={(e) => setData({...data,postText:e.target.value})} defaultValue={data.postText} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Time</h4>
        <input onChange={(e) => setData({...data,time:e.target.value})} defaultValue={data.time} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Date</h4>
        <input onChange={(e) => setData({...data,date:e.target.value})} defaultValue={data.date} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Like Amount</h4>
        <input onChange={(e) => setData({...data,likeAmount:e.target.value})} defaultValue={data.likeAmount} />
      </div>
      <div className="fakeTweetGeneratorOptions">
        <h4>Comment Amount</h4>
        <input onChange={(e) => setData({...data,commentAmount:e.target.value})} defaultValue={data.commentAmount} />
      </div>
    </div>
  );
}

export default FakeTweetGenerator;

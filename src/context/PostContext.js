import { useState, createContext, useContext } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [data, setData] = useState({
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2380&amp;q=80",
    name: "Adem",
    mention: "@ademalkan",
    isCertified: "yes",
    postText: "just setting up my twttr",
    time: "14:47 PM",
    date: "Nov 11, 2021",
    likeAmount: "145.1K",
    commentAmount: "124.4K",
  });
  return (
    <PostContext.Provider value={{ data, setData }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);

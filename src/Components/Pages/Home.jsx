import React, { useEffect, useState } from "react";
import Hero from "../Sections/Hero";
import axios from "axios";
import QuoteCard from "../Sections/QuoteCard";
import "./Home.css";
import { getTags } from "../../data";
import Loading3 from "./Loading3";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [allTags, setAllTags] = useState([]);

  const [quotes, setQuotes] = useState([]);
  const [quotes2, setQuotes2] = useState([]);
  const [tag, setTag] = useState("All");
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const api = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    setQuotes2([]);
    setPage(1);
  }, [tag]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const alltags = await getTags(); // Wait for the Promise to resolve
        setAllTags(alltags.slice(0, alltags.length - 1));

        const getRandomQuotes = async () => {
          setIsLoading(true);
          if (tag === "All") {
            const res = await axios.get(
              `https://${api}/quotes?page=${page}&limit=20`
            );
            if (res.data.results.length === 0) {
              setHasMore(false);
            }
            console.log(res.data.results);
            setQuotes((prevQuotes) => [...prevQuotes, ...res.data.results]);
          } else {
            setQuotes([]); // Clear the previous quotes

            const res = await axios.get(
              `https://${api}/quotes?page=${page}&tags=${tag}&limit=20`
            );
            if (res.data.results.length === 0) {
              setHasMore(false);
            }
            console.log(res.data.results);
            setQuotes2((prevQuotes) => [...prevQuotes, ...res.data.results]);
          }
          setIsLoading(false);
        };
        getRandomQuotes();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [tag, page]);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <div className="border-gray-200 dark:border-gray-700 m-0 sm:m-4">
        <nav className="flex flex-wrap gap-y-4">
          {(showAll ? allTags : allTags.slice(0, 10)).map((tab) => (
            <button
              onClick={() => setTag(tab)}
              className="-mb-px ml-2.5 py-3 px-4 inline-flex items-center gap-2 bg-white text-sm font-medium text-center border border-b-transparent text-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-800 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              key={tab}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={() => setShowAll(!showAll)}
            className="ml-5 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-transparent text-white outline-none border-none"
          >
            {showAll ? "Show Less ..." : "Show More ..."}
          </button>
        </nav>
      </div>
      <div className="p-6 mt-6" id="gallery">
        {quotes.map((quote, index) => (
          <QuoteCard key={`quote-${index}`} quote={quote} />
        ))}
        {quotes2.map((quote2, index) => (
          <QuoteCard key={`quote-${index}`} quote={quote2} />
        ))}
      </div>
      {isLoading && <Loading3 />}
      <button
        onClick={loadMore}
        className={`p-2 my-16 bg-blue-500 text-white rounded ${isLoading && "hidden"}`}
      >
        Load More
      </button>
      {!hasMore && <p className="text-gray-400"></p>}
    </div>
  );
};

export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote, getQuoteByTags, addToBookmark } from "../redux/action";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

import "../styles.css";

const Home = () => {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const quotes = useSelector((state) => state.quote);

  const bookmarks = useSelector((state) => state.bookmarks);

  console.log(bookmarks);
  //   const fetchQuotes = () => {
  //     dispatch(getQuote());

  //   };

  const fetchQuotesByTags = () => {
    dispatch(getQuoteByTags(currentTag));
  };

  const handleBookmark = () => {
    dispatch(addToBookmark(quotes));
    toast("added to bookmark" );
  };

  useEffect(() => {
    const fetchTags = async () => {
      const { data } = await axios.get("https://api.quotable.io/tags");
      setTags(data);
    };
    fetchTags();
  }, []);
  return (
    <div>
      <div>
        <div className="card col-8 mx-auto p-5 quoteBox text-white rad-30">
          {loading === true ? (
            <Spinner />
          ) : (
              <>

                <ToastContainer />
              <div className="card-body ">
                <h5 className="card-title">Quote</h5>
                <p className="card-text">{quotes.content}</p>
                <p className="card-title mx-auto col-3">- {quotes.author}</p>
              </div>
              <i className="bi bi-bookmarks" onClick={handleBookmark}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmarks"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                  <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                </svg>
              </i>
            </>
          )}
        </div>
        <div className="d-grid gap-2 col-4 mx-auto p-5 ">
          <select
            className="form-select rad-30"
            onChange={(e) => setCurrentTag(e.target.value)}
          >
            <option value={""}> Select an option! </option>
            {tags &&
              tags.map((tag) => (
                <option value={tag.name} key={tag._id}>
                  {tag.name}
                </option>
              ))}
          </select>
          <button
            type="button"
            className="btn btn-success rad-30"
            onClick={fetchQuotesByTags}
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

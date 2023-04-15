import { useDispatch, useSelector } from "react-redux";
import { removeFromBookmark } from "../redux/action";


const Bookmark = () => {

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")).bookmarks;
  console.log(bookmarks);
  const dispatch = useDispatch();
  const removeBookmark = (bookmarkId) => {
    dispatch(removeFromBookmark(bookmarkId));
  };
  return (
    <>

      <ul>
        {bookmarks && bookmarks.map((element) => (
          <div className="card col-10 mx-auto mt-3" key={element._id}>
            <div className="card-body">

              <p className="card-text">{element.content}</p>
              <p className="card-title mx-auto col-3">- {element.author}</p>
              <i
                className="bi bi-trash"
                onClick={(e) => removeBookmark(element._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </i>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Bookmark;
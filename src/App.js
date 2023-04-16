import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Bookmarks from './components/Bookmark';
import Navbar from './components/Navbar';

const App = () => {

    const bookmarks = localStorage.getItem('bookmarks');

    if(bookmarks === null) localStorage.setItem("bookmarks", JSON.stringify({bookmarks:[]}));
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/bookmarks' element={<Bookmarks/>}/>


        </Routes>
        
        </BrowserRouter>
    
    </>
    )
}

export default App
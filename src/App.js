import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallpaper from "./Pages/Wallpaper";
import Liked from "./Pages/Liked";
import Home from "./Pages/Home";
import Swipe from "./Pages/Swipe";
// App component
//<Route path="/liked" element={<Liked />} />
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallpaper" element={<Wallpaper />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/swipe" element={<Swipe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

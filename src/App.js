import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoadMore } from "./components/LoadMore/LoadMore";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import OutsideClick from "./components/OutsideClick/OutsideClick";
import Accordian from "./components/Accordian/Accordian";
import { LocalStorage } from "./components/LocalStorage/LocalStorage";
import { EndlessScroll } from "./components/EndlessScroll/EndlessScroll";

function App() {
  return (
    <>
      <div className="navbar">
        <Router>
          <div>
            <Link to="/" className="title">
              <h1>React Components</h1>
            </Link>
            <p>
              A collection of React components, designed to be reused and
              refactored as needed
            </p>
            <nav>
              <ul>
                <li>
                  <Link to="/load-more">Load More</Link>
                </li>
                <li>
                  <Link to="/image-slider">Image Slider</Link>
                </li>
                <li>
                  <Link to="/outside-click">Outside click</Link>
                </li>
                <li>
                  <Link to="/accordian">Accordian</Link>
                </li>
                <li>
                  <Link to="/local-storage">Local Storage</Link>
                </li>
                <li>
                  <Link to="/endless-scroll">Endless Scroll</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/load-more">
                <LoadMore />
              </Route>
              <Route path="/image-slider">
                <ImageSlider />
              </Route>
              <Route path="/outside-click">
                <OutsideClick />
              </Route>
              <Route path="/accordian">
                <Accordian />
              </Route>
              <Route path="/local-storage">
                <LocalStorage />
              </Route>
              <Route path="/endless-scroll">
                <EndlessScroll />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

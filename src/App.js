import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoadMore } from "./components/LoadMore/LoadMore";
import JSONFetch from "./components/JsonFetch/JSONFetch";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import OutsideClick from "./components/OutsideClick/OutsideClick";

function App() {
  return (
    <>
      <Router>
        <div>
          <h1>React Components</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/load-more">Load More</Link>
              </li>
              <li>
                <Link to="/json-fetch">Fetch API - JSON</Link>
              </li>
              <li>
                <Link to="/image-slider">Image Slider/Carousel</Link>
              </li>
              <li>
                <Link to="/outside-click">Outside click</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/load-more">
              <LoadMore />
            </Route>
            <Route path="/json-fetch">
              <JSONFetch />
            </Route>
            <Route path="/image-slider">
              <ImageSlider />
            </Route>
            <Route path="/outside-click">
              <OutsideClick />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

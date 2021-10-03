import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoadMore } from "./components/LoadMore/LoadMore";
import JSONFetch from "./components/JsonFetch/JSONFetch";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import OutsideClick from "./components/OutsideClick/OutsideClick";

function App() {
  return (
    <>
      <div className="navbar">
        <Router>
          <div>
            <Link to="/" className="title">
              <h1>React Components</h1>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/load-more">Load More</Link>
                </li>
                <li>
                  <Link to="/json-fetch">Fetch API - JSON</Link>
                </li>
                <li>
                  <Link to="/image-slider">Image Slider</Link>
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
      </div>
    </>
  );
}

export default App;

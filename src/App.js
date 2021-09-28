import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoadMore } from "./components/LoadMore";
import JSONFetch from "./components/JSONFetch";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";

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
                <Link to="/json-fetch">Fetch API (JSON)</Link>
              </li>
              <li>
                <Link to="/image-slider">Image Slider/Carousel</Link>
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
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

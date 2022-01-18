import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { LoadMore } from "./components/LoadMore/LoadMore";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import OutsideClick from "./components/OutsideClick/OutsideClick";
import Accordian from "./components/Accordian/Accordian";
import { LocalStorage } from "./components/LocalStorage/LocalStorage";
import { EndlessScroll } from "./components/EndlessScroll/EndlessScroll";
import Pagination from "./components/Pagination/Pagination";
import FormExample from "./components/Form/Form";
import BackToTopButton from "./components/BackToTop/BackToTop";

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
                  <NavLink activeClassName="selected" to="/load-more">
                    Load More
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/image-slider">
                    Image Slider
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/outside-click">
                    Outside click
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/accordian">
                    Accordian
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/local-storage">
                    Local Storage
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/endless-scroll">
                    Endless Scroll
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/pagination">
                    Pagination
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/form">
                    Form (Formik)
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/backtotop">
                    Back To Top Button
                  </NavLink>
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
              <Route path="/pagination">
                <Pagination />
              </Route>
              <Route path="/form">
                <FormExample />
              </Route>
              <Route path="/backtotop">
                <BackToTopButton />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import LoadMore from "./components/LoadMore/LoadMore";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import OutsideClick from "./components/OutsideClick/OutsideClick";
import Accordian from "./components/Accordian/Accordian";
import LocalStorage from "./components/LocalStorage/LocalStorage";
import EndlessScroll from "./components/EndlessScroll/EndlessScroll";
import Pagination from "./components/RatingBreakdown/RatingBreakdown";
import FormExample from "./components/Formik/Formik";
import BackToTopButton from "./components/BackToTop/BackToTop";
import ImageFlick from "./components/ImageFlick/ImageFlick";
import StarRating from "./components/StarRating/StarRating";
import Tabulated from "./components/Tabulated/Tabulated";
import ToastNotification from "./components/ToastNotification/ToastNotification";
import Splider from "./components/Splider/Splider";
import TrendLine from "./components/TrendLine/TrendLine";
import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
import Stars from "./components/Stars/Stars";
import RatingBreakdown from "./components/RatingBreakdown/RatingBreakdown";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="title">
          <h1>React Components</h1>
        </Link>
        <p>
          A collection of React components, designed to be reused and refactored
          as needed
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
              <NavLink activeClassName="selected" to="/formik">
                Form (Formik)
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/reacthookform">
                Form (react-hook-form)
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/backtotop">
                Back To Top Button
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/image-flick">
                Image Flick
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/star-rating">
                Star Rating
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/rating-breakdown">
                Rating Breakdown
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/splide">
                Splide
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/tabs">
                Tabs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/toast-notifications">
                Toast Notifications
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/trend">
                Trend
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/stars">
                Stars
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/load-more" element={<LoadMore loadTop={false} />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/outside-click" element={<OutsideClick />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/local-storage" element={<LocalStorage />} />
          <Route path="/endless-scroll" element={<EndlessScroll />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/formik" element={<FormExample />} />
          <Route path="/reacthookform" element={<ReactHookForm />} />
          <Route path="/backtotop" element={<BackToTopButton />} />
          <Route path="/image-flick" element={<ImageFlick />} />
          <Route
            path="/star-rating"
            element={
              <StarRating
                rating={2.6}
                fullColor="#508072"
                emptyColor="#C8FCEB"
              />
            }
          />
          <Route path="/rating-breakdown" element={<RatingBreakdown />} />
          <Route path="/tabs" element={<Tabulated />} />
          <Route path="/toast-notifications" element={<ToastNotification />} />
          <Route path="/splide" element={<Splider />} />
          <Route
            path="/trend"
            element={<TrendLine radius={7.5} width={1.5} />}
          />
          <Route path="/stars" element={<Stars />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

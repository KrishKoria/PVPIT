import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <Navbar />

      <Slider start={data.banner.start} />
      {/* <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
       <HotAccessoriesMenu /> */}

      {/* <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifestyle}
              lifestyleCover={data.hotAccessoriesCover.lifestyle}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes> */}

      {/* <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={data.productReviews} />

      <Heading text="IN THE PRESS" /> */}

      {/* <Banner banner={data.banner} /> */}

      <Footer footer={data.footer}  />
    </Router>
  );
}

export default App;

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="Holiday Deals"
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_2x._CB414278671_.jpg"
        />
        <div className="home__row">
          <Product
            title="Apple 16' MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 32GB RAM, Space Gray, Late 2019"
            price={2999}
            alt="Apple 16' Macbook, Late 2019"
            image="https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UY327_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UY436_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UY545_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UY654_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
            price={949}
            alt="New Apple iPad Pro - Space Gray (4th Generation)"
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Apple 13' MacBook Pro with Touch Bar, 10th-Generation Quad-Core Intel Core i7, Space Gray (Mid 2020)"
            price={2599}
            alt="Apple 13' Macbook, Mid 2020"
            image="https://m.media-amazon.com/images/I/61gcCcu6VQL._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/61gcCcu6VQL._AC_UY327_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61gcCcu6VQL._AC_UY436_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61gcCcu6VQL._AC_UY545_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61gcCcu6VQL._AC_UY654_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="New Apple iMac (21.5-inch, 8GB RAM, 256GB SSD Storage)"
            price={1045.94}
            alt="New Apple iMac (21.5-inch, 8GB RAM, 256GB SSD Storage)"
            image="https://m.media-amazon.com/images/I/81blwMhVV8L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="Apple Watch Series 4 (GPS, 44MM) - Space Gray Aluminum Case "
            price={329.5}
            image="https://m.media-amazon.com/images/I/517IoYaKCmL._AC_UY218_.jpg"
            alt="Apple Watch Series 4 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band (Renewed)"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Apple iPhone XS Max, 64GB, Gold - For AT&T (Renewed)"
            price={579.99}
            image="https://m.media-amazon.com/images/I/617AxLYkUkL._AC_UY218_.jpg"
            alt="Apple iPhone XS Max, 64GB, Gold - For AT&amp;T (Renewed)"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

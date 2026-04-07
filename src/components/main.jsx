import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://picsum.photos/1920/600"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
               Welcome to our New Season Arrivals, where fashion meets innovation. Explore our latest collections for men and women, 
               featuring stylish clothing that combines comfort and trendiness for every occasion. Complement your look with our 
               elegant jewellery pieces, designed to add a touch of sophistication and sparkle. For those who love technology, check

               out our cutting-edge electronics, from smart gadgets to essential devices that make your life easier and more connected.
                Discover everything you need to refresh your wardrobe, accessorize, and stay up-to-date with the latest tech trends—all in
                 one place. Shop now and embrace the season with style, elegance, and innovation. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

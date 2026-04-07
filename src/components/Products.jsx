import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import   axios from"axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../components/Base.css"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

   useEffect(() => {
    let componentMounted = true; // to prevent state update if unmounted

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products ");
        if (componentMounted) {
           console.log(response.data.products);
          setData(response.data.products);
          setFilter(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (componentMounted) setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false; // cleanup
    };
  }, []);


  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };
  

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };


  const ShowProducts = () => {
    return (
      <>
        <div className="container-fluid buttons text-center py-5 ">
          <button
            className="btn btn-outline-dark btn-sm m-2 cardy"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 cardy"
            onClick={() => filterProduct("beauty")}
          >
           Beauty
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 cardy"
            onClick={() => filterProduct("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 cardy"
            onClick={() => filterProduct("furniture")}
          >
           furniture
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 cardy"
            onClick={() => filterProduct("groceries")}
          >
           Groceries
          </button>
        </div>
      

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className=" container-fluid col-md-4 col-sm-12  col-xs-8 col-12 mb-4 " 
            >
              <div className=" card text-center h-100 card  " key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.thumbnail}
                  alt="Card"
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 29)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 100)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead  card-title">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard/ShopCard.jsx";
import { url } from "../../constants.js";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  if (loading) {
    return (
      <div className="shop-products">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <h2 className="loading-text">
            Discovering amazing products for you...
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-products">
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="retry-btn"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="shop-products">
        <div className="shop-header">
          <h1 className="shop-title">Discover Our Collection</h1>
          <p className="shop-subtitle">
            Find the perfect items for your lifestyle
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-bar">
              <div className="search-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products by name or category..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              {searchTerm && (
                <button onClick={clearSearch} className="clear-search">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="products-count">
            <span>{filteredProducts.length} products available</span>
            {searchTerm && (
              <span className="search-results">
                {" "}
                • Showing results for "{searchTerm}"
              </span>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 && !loading && !error ? (
          <div className="no-results">
            <div className="no-results-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>No products found</h3>
            <p>Try adjusting your search or browse all products</p>
            <button onClick={clearSearch} className="browse-all-btn">
              Browse All Products
            </button>
          </div>
        ) : (
          <div className="products-container">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-wrapper"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ShopCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;

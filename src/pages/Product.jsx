import { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400 text-center mb-8">
        Our Products
      </h2>

      {/* Search Box */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(6)
              .fill("")
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 animate-pulse rounded-lg p-6 h-72"
                ></div>
              ))
          : filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transform transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="bg-cyan-500 text-white text-sm px-3 py-1 rounded-lg">
                    ${product.price}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useContext } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { useCart } from "react-use-cart";
import toast from "react-hot-toast"
import Rellax from "rellax";

const Store = () => {
  const [storeName, setStoreName] = useState("Baldr's MarketPlace"); // setStoreName is a function
  document.title = `${storeName}`; // Set the title of the page to the store name
  const [products, setProducts] = useState([]);
  useEffect(() => {
    var rellax = new Rellax('.relax')
    fetch("https://fakestoreapi.com/products/category/electronics?limit=9")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []); // Only fetch the store data when the component is mounted
  return (
    <div className="w-full">
      <Heading storeName={storeName} />
      {products.length > 0 ? (
        <ProductsSection products={products} />
      ) : (
        <div className="flex justify-center items-center min-h-[300px]">
          <div
            className="animate-spin inline-block w-8 h-8 border-4 border-slate-300 border-t-slate-600  rounded-full"
            role="status"
          >
            <span className="hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;

const Heading = ({ storeName }) => {
  return (
    <div className="bg-slate-200 flex items-center justify-center rounded-md flex-col gap-2 py-4 md:py-8">
      <p className="font-bold text-md">Welcome to</p>
      <h1 className="text-xl md:text-3xl font-black uppercase">{storeName}</h1>
    </div>
  );
};

const ProductsSection = ({ products }) => (
  <div className="px-4 py-12">
    <h2 className="text-2xl font-bold py-4 text-slate-800 uppercase">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  </div>
);

const Product = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className="relative block border border-slate-200 py-2">
      <button
        className="absolute p-2 text-white bg-slate-900 rounded-full right-4 top-4"
        type="button"
      >
        <BsBookmarkStarFill />
      </button>
      <img
        className="object-contain w-full h-56 lg:h-72"
        src={product.image}
        alt={product.title}
        loading="lazy"
      />
      <div className="p-6">
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-slate-700 text-white">
          New
        </strong>
        <h5 className="mt-4 text-lg font-bold min-h-[4rem]">{product.title}</h5>
        <p className="mt-2 text-sm text-slate-700">{`$${product.price}`}</p>
        <button
          className="block w-full p-4 mt-4 text-sm font-medium text-slate-50 bg-slate-800 hover:bg-slate-800 rounded-sm"
          type="button"
          onClick={() => {
            addItem(product)
            toast.success(`Added to cart`)
        }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

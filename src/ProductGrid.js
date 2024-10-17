import React from "react";
import "./ProductGrid.css";
import aluminumFoil from "./assets/aluminumFoil.png";
import parchmentPaper from "./assets/parchmentPaper.png";
import bakeWare from "./assets/bakeWare.png";
import cookingBags from "./assets/cookingBags.png";
import waxPaper from "./assets/waxPaper.png";
import otherProducts from "./assets/otherProducts.png";

const ProductGrid = () => {
  const productsData = [
    {
      id: 1,
      name: "ALUMINUM FOIL",
      description: "Perfect for grilling, baking, and more.",
      image: aluminumFoil,
    },
    {
      id: 2,
      name: "PARCHMENT PAPER",
      description: "Oven-safe, non-stick performance for baking & roasting.",
      image: parchmentPaper,
    },
    {
      id: 3,
      name: "DISPOSABLE BAKEWARE",
      description: "Great for any meal, with no cleanup.",
      image: bakeWare,
    },
    {
      id: 4,
      name: "COOKING BAGS & LINERS",
      description: "Fast & easy cleanup, with no soaking or scrubbing.",
      image: cookingBags,
    },
    {
      id: 5,
      name: "WAX & FREEZER PAPER",
      description: "Protect surfaces & keep food fresh longer.",
      image: waxPaper,
    },
    {
      id: 6,
      name: "OTHER PRODUCTS",
      description: "Butcher Paper, Plastic Wrap, and Baking Cups.",
      image: otherProducts,
    },
  ];
  return (
    <div className="product-grid">
      {productsData.map((product) => (
        <div className="product-item" >
          <img
            src={product?.image}
            alt="Aluminum Foil"
           
          />
          <h5>{product?.name}</h5>
          <p>{product?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

import React, { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import TYPES from "./types";

const ProductApp = () => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

  const { products, cart, activeProduct } = productState;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button
              onClick={() =>
                dispatch({ type: TYPES.productShow, payload: product })
              }
            >
              Show Item
            </button>
            <button
              onClick={() =>
                dispatch({ type: TYPES.productAddToCart, payload: product })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - Quantity: {product.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: TYPES.productRemoveOne,
                  payload: product.id,
                })
              }
            >
              Remove one item
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: TYPES.productRemoveFromCart,
                  payload: product.id,
                })
              }
            >
              Remove all
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};

export default ProductApp;

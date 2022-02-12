import "./ProductList.css";
import { products } from "../../data";
import { Rating } from "@mui/material";
const handleProduct = (x, y) => {
  alert(x + "it is price is" + y);
};
const ProductList = () => {
  return (
    <section>
      <h2 className="title">This is a product List</h2>
      <div className="products-list">
        {products.map((item) => (
          <div className="product-card">
            <img src={item.image} alt="" className="p-img" />
            <h5 className="pl-title">{item.title}</h5>
            <button onClick={() => handleProduct(item.title, item.price)}>
              CLICK TO KNOW PRICE
            </button>
            <Rating
              name="half-rating"
              defaultValue={item.rating.rate}
              precision={0.5}
              readOnly
            />
            <p className="pl-desc">{item.description}</p>
          </div>
        ))}
      </div>
      <h2>
        list of product that their category is men's clothing and their price
        greater than 100
      </h2>
      <div className="products-list">
        {products
          .filter(
            (item) => item.category === "men's clothing" && item.price > 100
          )
          .map((item) => (
            <div className="product-card">
              <img src={item.image} alt="" className="p-img" />
              <h5 className="pl-title">{item.title}</h5>
              <button
                onClick={() =>
                  alert(item.title + "it is price is" + item.price)
                }
              >
                CLICK TO KNOW PRICE
              </button>
              <Rating
                name="half-rating"
                d
                defaultValue={item.rating.rate}
                precision={0.5}
                readOnly
              />
              <p className="pl-desc">{item.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProductList;

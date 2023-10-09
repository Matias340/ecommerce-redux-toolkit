import React from "react";
//import { makeStyles } from "tss-react/mui";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useGetAllProductsQuery } from "../../store/productsAPI";
import "../../App.css";

export const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  //const { classes } = useStyles();

  return (
    <>
      <div className="home-container">
        {status === "success" ? (
          <>
            <h2 style={{ marginTop: "100px" }}>Nuevos productos</h2>
            <div className="products">
              {data &&
                data?.map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occured...</p>
        )}
      </div>
    </>
  );
};

/*const useStyles = makeStyles()((theme) => ({
  root: {
    WebkitBoxShadow: "8px 5px 16px -1px rgba(0,0,0,0.76)",
    boxShadow: "8px 5px 16px -1px rgba(0,0,0,0.76)",
    maxHeight: 250,
    maxWidth: 180,
    backgroundColor: "#fff",
    fontSize: "15px",
    color: "white",
    marginTop: "30px",
    border: "1px solid #fff",
    borderRadius: "8px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    marginBottom: "20px",
    marginRight: "40px",
  },
  action: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0D305A",
  },
  media: {
    marginTop: "10px",
    height: "30px",
    paddingTop: "70%",
  },
}));*/

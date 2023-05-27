import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: localStorage.getItem("itemList")
    ? JSON.parse(localStorage.getItem("itemList"))
    : [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
  },
  reducers: {
    //agrega un item del carrito
    addToCart(state, action) {
      const newItem = action.payload

      const existItem = state.itemsList.find((item) => item.id === newItem.id)

      if (existItem >= 0) {
        state.itemsList[existItem] = {
          ...state.itemsList[existItem],
          totalQuantity: state.itemsList[existItem].totalQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, totalQuantity: 1 };
        state.itemsList.push(tempProductItem);
        toast.success("Producto agregado correctamente", {
          position: "bottom-left",
          autoClose: 1200,
        });
      }
      localStorage.setItem("itemList", JSON.stringify(state.itemsList));
    },
    //elimina un item del carrito
    removeFromCart(state, action) {
      state.itemsList.map((items) => {
        if (items.id === action.payload.id) {
          const nextCartItems = state.itemsList.filter(
            (item) => item.id !== items.id
          );

          state.itemsList = nextCartItems;

          toast.error("El producto fue eliminado", {
            position: "bottom-left",
            autoClose: 1200,
          });
        }
        localStorage.setItem("itemList", JSON.stringify(state.itemsList));
        return state;
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.itemsList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.itemsList[itemIndex].totalQuantity > 1) {
        state.itemsList[itemIndex].totalQuantity -= 1;
        
      } else if (state.itemsList[itemIndex].totalQuantity === 1) {
        const nextCartItems = state.itemsList.filter(
          (item) => item.id !== action.payload.id
        );

        state.itemsList = nextCartItems;

        toast.error("El producto fue eliminado", {
          position: "bottom-left",
          autoClose: 1200,
        });
      }

      localStorage.setItem("itemsList", JSON.stringify(state.itemsList));
    },
    increaseCart: (state, action) => {
      //find the item from state
      const item = state.itemsList.find(
        (product) => product.id === action.payload.id
      );

      //if item quantity greater than 1 then increase the quantity by 1
      if (item.totalQuantity >= 1) {
        //if not then decrease the quantity
        state.itemsList = state.itemsList.map((product) =>
          product.id === action.payload.id
            ? { ...product, totalQuantity: (item.totalQuantity += 1) }
            : product
        );
      }

      //update the localstorage value
      localStorage.setItem("itemsList", JSON.stringify(state.itemsList));
    },
    getCartTotal(state, action) {
      let { cartTotalQuantity, cartTotalPrice } = state.itemsList.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.cartTotalPrice += itemTotal;
          cartTotal.cartTotalQuantity += cartQuantity;

          return cartTotal;
        },
        {
          cartTotalQuantity: 0,
          cartTotalPrice: 0,
        }
      );
      state.cartTotalPrice = parseInt(cartTotalPrice.toFixed(2));
      state.cartTotalQuantity = cartTotalQuantity;
    },
  },
})

export const { addToCart, removeFromCart, decreaseCart, increaseCart, getCartTotal } = cartSlice.actions;
export default cartSlice
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: localStorage.getItem("itemList")
    ? JSON.parse(localStorage.getItem("itemList"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    //agrega un item del carrito
    addToCart(state, action) {
      const newItem = action.payload

      const existItem = state.itemsList.find((item) => item.id === newItem.id)

      if (existItem >= 0) {
        state.itemsList[existItem] = {
          ...state.cartItems[existItem],
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
  },
})

export const { addToCart, removeFromCart, getTotals, } = cartSlice.actions;
export default cartSlice
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: localStorage.getItem("itemsList")
    ? JSON.parse(localStorage.getItem("itemsList"))
    : [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload

      //check item is already exits
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
      localStorage.setItem("itemsList", JSON.stringify(state.itemsList));
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
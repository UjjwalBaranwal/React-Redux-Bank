import { configureStore } from "@reduxjs/toolkit";
import acountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: acountReducer,
    customer: customerReducer,
  },
});
export default store;

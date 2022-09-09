import { configureStore } from "@reduxjs/toolkit";
import CatalogSlice from "../components/Catalog/CatalogSlice";
import SignInSlice from "../components/SignIn/SignInSlice";

const store = configureStore({
    reducer: {
        signin: SignInSlice.reducer,
        catalog: CatalogSlice.reducer,
    }
})

export default store;
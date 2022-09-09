import { combineReducers } from "redux";
import SignInSliceReducer from "../components/SignIn/SignInSlice";
import CatalogReducer from "../components/Catalog/CatalogSlice";
const rootReducer = combineReducers({
  signin: SignInSliceReducer,
  catalog: CatalogReducer,
});

export default rootReducer;

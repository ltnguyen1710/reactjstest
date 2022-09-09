import Nav from "./Nav";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { productRemaining, idOfChosenProduct } from "../../redux/selectors";
import DetailOfProduct from "../DetailOfProduct";
import CatalogSlice from "./CatalogSlice";
function Catalog() {
  const catalogProducts = useSelector(productRemaining);
  const idProduct = useSelector(idOfChosenProduct)
  const dispatch = useDispatch();

  return (
    <div>
      <Nav></Nav>
      {idProduct !== "" ||
        catalogProducts.map((product, index) => {
          return (
            <Product
              onClick={() => {
                dispatch(CatalogSlice.actions.idChosenChange(product.id));
              }}
              data={product}
              key={index}
            />
          );
        })}
      {idProduct !== "" && <DetailOfProduct  />}
    </div>
  );
}

export default Catalog;

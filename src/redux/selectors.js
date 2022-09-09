import { createSelector } from "@reduxjs/toolkit";
export const signinSelector = (state) => state.signin.checkLog;

export const catalogSelector = (state) => state.catalog.products;

export const idOfChosenProduct = (state) => state.catalog.idChosen;

export const catalogSearchSelector = (state) => state.catalog.searchText;

export const productById = createSelector(
  catalogSelector,
  idOfChosenProduct,
  (products, id) => {
    return products.find((product)=>{
      return product.id === id
    })
  }
);

export const productRemaining = createSelector(
  catalogSelector,
  catalogSearchSelector,
  (products, searchText) => {
    if (searchText === "") {
      return products;
    }
    return products.filter((product) => {
      return (
        product.name.includes(searchText) || product.id.includes(searchText)
      );
    });
  }
);

import { createSlice } from "@reduxjs/toolkit";
import rabbit from "../../images/rabbit.jpg";
import logo from "../../images/logo192.png";

export default createSlice({
  name: "catalog",
  initialState: {
    searchText: "",
    idChosen: "",
    products: [
      {
        id: "BDS000",
        name: "SP01. Đất A",
        position: "Củ Chi, Hồ Chí Minh",
        type: "ONT & SX",
        area: 125,
        price: 1.62,
        image: rabbit,
        address: "210 Âu Cơ, phường 10, Quận Tân Bình, TP.HCM",
      },
      {
        id: "BDS001",
        name: "SP02. Đất B",
        position: "Củ Chi, Hồ Chí Minh",
        type: "ONT & SX",
        area: 124,
        price: 1.61,
        image: logo,
        address: "210 Cây Chôm, huyện Củ Chi, TP.HCM",
      },
      {
        id: "BDS002",
        name: "SP03. Đất C",
        position: "Củ Chi, Hồ Chí Minh",
        type: "ONT & SX",
        area: 123,
        price: 1.6,
        image: rabbit,
        address: "210 Âu Cơ, phường 10, Quận Tân Bình, TP.HCM",
      },
      {
        id: "BDS003",
        name: "SP04. Đất D",
        position: "Củ Chi, Hồ Chí Minh",
        type: "ONT & SX",
        area: 122,
        price: 1.59,
        image: logo,
        address: "210 Âu Cơ, phường 10, Quận Tân Bình, TP.HCM",
      },
    ],
  },
  reducers: {
    searchTextChange: (state, action) => {
      state.searchText = action.payload;
    },
    idChosenChange: (state, action) => {
      state.idChosen = action.payload;
    },
  },
});

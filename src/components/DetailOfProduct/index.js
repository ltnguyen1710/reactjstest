import { useSelector } from "react-redux";
import { Grid, Box } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { productById } from "../../redux/selectors";
import SlideShow from "../Slide";
import MyComponent from "../Map";
import { useDispatch } from "react-redux";
import CatalogSlice from "../Catalog/CatalogSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  margin: 20,
}));
function DetailOfProduct() {
  const data = useSelector(productById);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(CatalogSlice.actions.idChosenChange(""))
  }
  return (
    <Box>
      <Grid container spacing={3} sx={{ m: 1 }}>
        <Grid item xs={12}>
          <h3>{data.name}</h3>
        </Grid>
        <Grid item xs={12}>
          <div onClick={handleClick}>
            <li>Trang Chủ</li>
          </div>
        </Grid>
      </Grid>
      <Item>
        <SlideShow />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <b>{data.name}</b>
          </Grid>
          <Grid item xs={4}>
            <div>Mã:</div>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <div>{data.id}</div>
          </Grid>
          <Grid item xs={5}>
            <div style={{ color: "blue" }}>
              <b>Loại hình:</b>
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={3}>
            <div style={{ color: "blue" }}>
              <b>{data.type}</b>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <b>Diện tích:</b>
            </div>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <b>{data.area}m2</b>
          </Grid>
          <Grid item xs={4}>
            <div>
              <b>Giá:</b>
            </div>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <b>{data.price}tỷ</b>
          </Grid>
          <Grid item xs={12}>
            <div>Địa chỉ: {data.address}</div>
          </Grid>
        </Grid>
      </Item>
      <MyComponent data={data} />
    </Box>
  );
}
export default DetailOfProduct;

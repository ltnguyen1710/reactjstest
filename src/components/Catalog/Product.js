import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    margin: 20
  }));
  
function Product({data, onClick}){
    return (
        <Item>
            <img src={data.image} alt="product" width={'100%'} onClick={onClick}/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <b>{data.name}</b>
                </Grid>
                <Grid item xs={12}>
                   <p>{data.position}</p>
                </Grid>
                <Grid item xs={7}>
                   <b>{data.type}</b>
                </Grid>
                <Grid item xs={2}>
                   <b>{data.area}m2</b>
                </Grid>
                <Grid item xs={3}>
                   <b>{data.price}tỷ</b>
                </Grid>
            </Grid>
        </Item>
    )
}
export default Product
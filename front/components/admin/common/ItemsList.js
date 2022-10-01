import { Grid } from "@mui/material";
import React from "react";
import Item from "./Item";

const ItemsList = (props) => {
  return (
    <Grid container spacing={2}>
      {props.items.map((item, i) => {
        return (
          <Item
            key={i}
            {...item}
            size={3}
            product={props.product}
            collection={props.collection}
            blog={props.blog}
          />
        );
      })}
    </Grid>
  );
};

export default ItemsList;

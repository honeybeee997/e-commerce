import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Chart = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [duration, setDuration] = useState("Monthly");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleClose = (event) => {
    setDuration(event.target.innerText || duration);
    setAnchorEl(null);
  };

  return (
    <Grid item xs={props.size}>
      <Card className="pr-6 py-6 border">
        <div className="flex items-center justify-between pl-6 mb-4">
          <span>
            <Typography variant="h5" component="h2">
              {props.name}
            </Typography>
          </span>
          <span>
            <Button
              variant="contained"
              className="btn-override"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {duration}
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>Weekly</MenuItem>
              <MenuItem onClick={handleClose}>Monthly</MenuItem>
              <MenuItem onClick={handleClose}>Yearly</MenuItem>
            </Menu>
          </span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="hello" />
            <Tooltip>
              <p>Hello</p>
            </Tooltip>
            <Bar dataKey="products" fill="#00badb" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
};

export default Chart;

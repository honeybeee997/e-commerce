import { Button, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Overview = (props) => {
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
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "August",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "September",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "October",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "November",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "December",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  return (
    <article>
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
      <ResponsiveContainer height={400} width="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip>
            <p>Hello</p>
          </Tooltip>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  );
};

export default Overview;

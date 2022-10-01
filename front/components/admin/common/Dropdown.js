import Button from "@mui/joy/Button";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import React from "react";

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="text-right pr-8 mb-10">
      <Button
        id="basic-demo-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        className="bg-white"
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
        className="bg-white"
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;

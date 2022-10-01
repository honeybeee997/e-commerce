import { Card, Grid } from "@mui/material";
import React from "react";

import styles from "../Admin.module.css";

const Stats = ({ size, name, number, icon }) => {
  return (
    <Grid item xs={size}>
      <Card variant="outlined" className={`p-2 ${styles.dashCard}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
              {icon}
            </span>
            <strong>{name}</strong>
          </div>
          <span>{number}</span>
        </div>
      </Card>
    </Grid>
  );
};

export default Stats;

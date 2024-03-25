import { Box, Typography } from "@mui/material";
import React from "react";
import { formatStatsTitle } from "../utils/functions";

interface GaugeProps {
  value: number;
  name: string;
}

const Gauge: React.FC<GaugeProps> = ({ value, name }) => {
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          position: "relative",
          backgroundColor: 'white',
          width: "75px",
          height: "200px",
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            top: `${(1 - value) * 100}%`,
            backgroundColor: "#30A7D7",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
          data-value={value}
        ></li>
        {[...Array(16)].map((_, index) => (
          <li
            key={index}
            style={{
              background: "transparent",
              borderBottom: "0.25em solid #a4a4a4",
              height: "0.5em",
              width: "100%",
              position: "relative",
              zIndex: 2,
            }} />
        ))}
      </ul>
      <Box sx={{
        width: "75px",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}>
        <Typography variant="caption">{formatStatsTitle(name)}</Typography>
      </Box>
    </>
  );
};

export default Gauge;

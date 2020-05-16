import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <Box
        component="div"
        style={{ background: "#233", height: "100vh" }}
      ></Box>
    </>
  );
};

export default Resume;

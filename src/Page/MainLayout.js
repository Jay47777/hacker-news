import React, { useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainlayout: {
    width: "82%",
    backgroundColor:"#f6f6ef",
    marginLeft:"8%",
    height:"190vh"
  },
}));

const MainLayout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.mainlayout}>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;

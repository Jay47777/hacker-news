import React from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#ff6600",
    height: "25px",
    width: "100%",
    // marginLeft: "8%",
    marginTop: "10px",
    paddingTop: "3px",
    paddingLeft: "2px",
    paddingBottom: "3px",
    display:"flex"
  },
  logo: {
    width: "16px",
    border: "1px solid white",
    paddingLeft: "7px",
    color: "white",
    fontWeight: "bold",
  },
  title:{
      fontWeight:"bold",
      fontSize:"18px",
      marginLeft:"3px"
  },
  menu:{
      marginLeft:"15px",
      borderRight:"1px solid black",
      height:"68%",
      marginTop:"5px",
      paddingTop:"-2px",
      paddingRight:"7px",
      cursor:"pointer"
  },
  login:{
      position:"absolute",
      right:"11%",
      top:"2%"
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div className={classes.main}>
        <div className={classes.logo}>Y</div>
        <div className={classes.title}>Hacker News</div>
        <div className={classes.menu}><p style={{marginTop:"-7%"}}>Welcome</p></div>
        <div className={classes.menu}><p style={{marginTop:"-16%"}} onClick={()=>history.push('/new')}>new</p></div>
        <div className={classes.menu}><p style={{marginTop:"-14%"}} onClick={()=>history.push('/past')}>past</p></div>
        <div className={classes.menu}><p style={{marginTop:"-7%"}} onClick={()=>history.push('/comment')}>comments</p></div>
        <div className={classes.menu}><p style={{marginTop:"-18%"}} onClick={()=>history.push('/ask')}>ask</p></div>
        <div className={classes.menu}><p style={{marginTop:"-12%"}} onClick={()=>history.push('/show')}>show</p></div>
        <div className={classes.menu}><p style={{marginTop:"-14%"}} onClick={()=>history.push('/jobs')}>jobs</p></div>
        <div className={classes.menu}><p style={{marginTop:"-9%"}}>submit</p></div>
        <div className={classes.login}><p style={{marginTop:"-7%"}} onClick={()=>history.push('/login')}>login</p></div>
        
      </div>
    </>
  );
};

export default Header;

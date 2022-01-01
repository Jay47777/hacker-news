import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerMain:{
        height:"100px",
        borderTop:"3px solid #ff6600",
        width:"100%",
        marginTop:"5%"
    }
}));
// Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerMain}>
        <div style={{display:"flex",marginLeft:"30%",marginTop:"10px"}}>
            <div style={{fontSize:"14px"}}>Guidelines |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>FAQ |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>Lists |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>API |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>Security |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>Legal |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>Apply to YC |</div>
            <div style={{marginLeft:"10px",fontSize:"14px"}}>Contact </div>
        </div>
        <div style={{marginLeft:"45%",marginTop:"10px"}}><input/></div>
      
    </div>
  );
};

export default Footer;

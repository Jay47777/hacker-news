import axios from "axios";


export const setComments =(product)=>{
   return{
    type:"SET_COMMENTS",
    payload:product
   } 
}


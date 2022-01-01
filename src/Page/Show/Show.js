import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import axios from "axios";
import {setComments} from "../../Action/Action"
import {useDispatch,useSelector} from "react-redux"

const useStyles = makeStyles((theme) => ({
  newMain: {
    paddingTop: "10px",
    paddingLeft: "10px",
  },
  list: {
    display: "flex",
    cursor:"pointer"
  },
  count: {
    marginLeft: "10px",
    color: "#828282",
  },
  icon: {
    paddingTop: "4px",
    color: "#828282",
  },
  text: {
    fontSize: "12px",
    color: "#828282",
  },
}));

const Show = () => {
  const [data, setData] = useState([]);
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(30)
  const classes = useStyles();
  const dispatch = useDispatch();
  const select = useSelector(state=>state.reducer.comments)
  console.log(select);

  useEffect(async () => {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty"
    );
    fetchData(response.data);
    if (data.length !== 0) {
      while(data.length > 0) {
        data.pop();
    }
    }
  }, [start,end]);

  const fetchData = (payload) => {
    const comments = [];
    const arr = payload.slice(start, end);
    console.log(arr);
    arr.map(async (val) => {
      const res = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${val}.json?print=pretty`
      );
      comments.push(res.data.kids)
      dispatch(setComments(res.data.kids))
      setData(old =>[...old,res.data])
    });
    console.log(comments);
  };

  var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};

const getCommentList = (list) => {
//   if (list.length === 0) {
//     return 'discuss'
//   }else{
//     return `${list.length} comment`
//   }
// return `${list.length} comment`
  return 'discuss'
}

const getTime = (min) => {
  var s = new Date(min).toLocaleTimeString([], { minute: '2-digit' });
  return s
}
  console.log(data);
  return (
    <div className={classes.newMain}>
      {data && data.map((e, i) => {
        return (
          <div className={classes.list} key={i} onClick={()=>window.location.replace(`${e.url}`)}>
            <div className={classes.count}>{i + start +1}</div>
            <div className={classes.icon}>
              <ArrowDropUpIcon />
            </div>
            <div>
              <div>
                {e.title}
                <span style={{ color: "#828282" }}>{`(${getLocation(e.url)})`}</span>
              </div>
              <div className={classes.text}>
                {e.score} point by {e.by} {getTime(e.time)} minutes ago | {getCommentList(e.kids)}
              </div>
            </div>
          </div>
        );
      })}
      <div style={{marginLeft:"10px",marginTop:"10px",cursor:"pointer"}} onClick={()=>{setStart(start + 30);setEnd(end + 30)}}>More</div>
    </div>
  );
};

export default Show;

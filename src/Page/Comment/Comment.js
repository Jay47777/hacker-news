import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import axios from "axios";
import { setComments } from "../../Action/Action";
import { useDispatch, useSelector } from "react-redux";
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
  newMain: {
    paddingTop: "10px",
    paddingLeft: "10px",
  },
  list: {
    display: "flex",
    cursor: "pointer",
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

const Comments = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(12);
  const classes = useStyles();
  const dispatch = useDispatch();
  const select = useSelector((state) => state.reducer.comments);
  console.log(select);

  useEffect(async () => {
    fetchData();
    if (data.length !== 0) {
      while (data.length > 0) {
        data.pop();
      }
    }
  }, [start, end]);

  const fetchData = () => {
    const arr = select.slice(start, end);
    console.log(arr);
    arr.map(async (val) => {
      if (val !== undefined) {
        const res = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${val}.json?print=pretty`
        );
        //   dispatch(setComments(res.data.kids));
        setData((old) => [...old, res.data]);
      }
    });
  };

  const getTime = (min) => {
    var s = new Date(min).toLocaleTimeString([], { minute: "2-digit" });
    return s;
  };
  console.log(data);
  return (
    <div className={classes.newMain}>
      {data &&
        data.map((e, i) => {
          return (
            <div className={classes.list} key={i}>
              <div className={classes.icon}>
                <ArrowDropUpIcon />
              </div>
              <div>
                <div className={classes.text}>
                  {e.by} {getTime(e.time)} minutes ago | parent | context | next 
                </div>
                <div dangerouslySetInnerHTML={{__html: e.text}} />
              </div>
            </div>
          );
        })}
      <div
        style={{ marginLeft: "10px", marginTop: "10px", cursor: "pointer" }}
        onClick={() => {
          setStart(start + 30);
          setEnd(end + 30);
        }}
      >
        More
      </div>
    </div>
  );
};

export default Comments;

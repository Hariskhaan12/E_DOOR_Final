import React from "react";
import { ProSideBar, Navbar } from "../../Component";
import { BiUpvote } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import './Question.scss'
import Button from "@mui/material/Button";
import {useState} from 'react';
import { Grid, Typography,Paper } from "@mui/material";

function Question() {
  const AnswerListed=JSON.parse(localStorage.getItem("ANSWERS"))
  const prevData=JSON.parse(localStorage.getItem('ANSWERS'))
  const[Answer,setAnswer]=useState(prevData);
  const [token, settoken] = useState(false);
  const[at,setat]=useState("");
  let AllQuestion = JSON.parse(localStorage.getItem("GlobalQuestionData"));
  let Questionid = localStorage.getItem("SelectedQuestion");
  let Question;
  AllQuestion.forEach(element => {
      if(element.Qid==Questionid)
      {
          Question=element;
      }
  });


  let SubmitAnswer=()=>{
    let obj={
      Questionid,
      Answerid:Math.floor(Math.random()*10000),
      at,
    }
    var existing = localStorage.getItem('ANSWERS');

     		existing = existing ? JSON.parse(existing) : [];
         existing.push(obj);
     		
    
     		localStorage.setItem('ANSWERS', JSON.stringify(existing));
    console.log(obj)
    settoken(!token);

  }
  return (
    <div>
      {/* {console.log(AnswerListed)}; */}
      <div>
        <Navbar />
      </div>
      <ProSideBar style={{ position: "fixed" }} />
      <div className="MainQuestion">
        <h1 style={{ marginTop: "1%" }}>Question: {` ${Question.Title}`}</h1>
        <hr
          style={{
            marginTop: "2%",
            backgroundColor: "#D0D3D4",
            border: "none",
            height: "1px",
          }}
        />
        <div className="Desc">
        <BiUpvote className="svg" size={44} />
          <span> {Question.Desc}</span>
        </div>

        {/* <div className="Answer">
          
        
           
            
          </div> */}
          <Grid container>
            <Grid item xs={2} style={{marginTop:"50px",marginLeft:""}}><h3>Your Answer:</h3></Grid>
            <Grid item xs={2} style={{marginTop:"50px"}}><h3>Your Answer:</h3></Grid>
            <Grid item xs={6} style={{marginTop:"50px"}} > <TextField
            onChange={(e)=>{setat(e.target.value)}}
              id="outlined-search"
              type="search"
              fullWidth
              // style={{ width: "70%", marginTop: "1%" }}
            /></Grid>
            <Grid item xs={2} style={{marginTop:"50px"}}>
            <Button variant="contained"  onClick={SubmitAnswer}>Submit Asnwer</Button>
            </Grid>
          </Grid>
          <div className="TotalAnswer">
              <h3 style={{marginRight:"50%",marginTop:"1rem"}}>ANSWERS:</h3>
              <div className="AnswerSection">
                {AnswerListed ? AnswerListed.map((ans)=>{
                  return(
                    <>
                    <Grid container>
                      <Grid item xs={8} style={{marginLeft:"20%"}}>
                      <Paper
						style={{
							// marginLeft: '20%',
							padding: '15px',
							border: '10px solid white',
							borderRadius: '10px',
              marginBottom:"25px",
              marginTop:"5px"
							// boxShadow: '0 0 10px 3px #ccc',
						}}
						elevation={6}
					>
            
            <Typography style={{textAlign:"left",marginLeft:"3%",fontFamily:"sans-serif"}}>{ans.at}</Typography>
            <TextField fullWidth  variant="standard" label="Reply" style={{width:"40%",}} style={{marginRight:"20%"}}></TextField>
          </Paper>
                      
                      </Grid>
                    </Grid>
                  </>)
                }) :"No Answer Yet"  }
              </div>
          </div>
        </div>
      </div>
   
  );
}

export default Question;

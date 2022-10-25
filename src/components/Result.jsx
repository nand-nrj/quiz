import React, { useState } from "react"
import { Divider, Button } from 'semantic-ui-react';
// import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function Result(props) {

    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);


    return (
        <>  <Divider />
            <div className="result_container" justify="center">
                {/* <CheckCircleRoundedIcon className="resultIcon" style={{ fontSize: 100, color: "rgb(214, 201, 16)" }} /> */}
                <h1>Thanks for attempting the Quiz.</h1>


                <h3 >Click here to see the result,</h3>
                <Button style={{ backgroundColor: "rgb(214, 201, 16)", color: "#093f50ee" }} variant="contained" onClick={() => setBool1(!bool1)}>Result</Button>
                {bool1 ? (
                    <>
                        <p>Your Score is : {props.totalScore}</p>
                        <p>Your Accuracy is : {props.totalScore}0%</p>
                    </>) : null}

                <h3 >Click here to see the correct answers,</h3>
                <Button style={{ backgroundColor: "rgb(214, 201, 16)", color: "#093f50ee" }} variant="contained" onClick={() => setBool2(!bool2)}>Correct Answers</Button>
                {bool2 ? (
                    <>
                        <h3>CORRECT ANSWERS : </h3>
                        {props.correctANS.map((eachCorrectANS, index) => {
                            return <p key={index} >{index + 1}.&nbsp;&nbsp;&nbsp; {eachCorrectANS}</p>
                        })}
                    </>) : null}

                <h3>Reattempt,</h3>
                <a href="/" className="reattemptBtn">Attempt again!</a>
            </div>
        </>
    )
}



export default Result;
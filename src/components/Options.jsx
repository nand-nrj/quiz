import React, { useEffect, useState, useContext } from 'react';
import { currentQnContext } from "./App"
import { Button } from 'semantic-ui-react';


export default function Options(props) {

    const {maxQN, currentQn, setCurrentQn, score, setScore, correctAns, setCorrectAns, htmlEntities, attempt, setAttempt, disabled, disabler, setDisabler } = useContext(currentQnContext)

    const [optionChosen, setOptionChosen] = useState("")
    let maxQN2 = Math.max(maxQN,currentQn);

    function prevHandler() {

        setCurrentQn((prevQn) => {

            return (prevQn - 1)
        })
        if (attempt < props.qNo) {
            disabled()
        }
        console.log("P--> ", disabler, attempt, props.qNo);

    }

    function nextHandler() {

        // if (attempt > props.qNo) {
        //     // setDisabler(false);
            // disabled()
            // console.log("manish");
        // }
        if (maxQN2 == currentQn) {
            setDisabler(false)
        }

        if (optionChosen === htmlEntities(props.correctAns)) {
            setScore((prevScore) => {
                return (prevScore + 5)
            })
        } else {
            setScore((prevScore) => {
                return (prevScore - 1)
            })
        }
        console.log("N-->", disabler, attempt, props.qNo);

       


        console.log(disabler);
        if (!disabler && optionChosen === "") {
            if (attempt < props.qNo) {
                alert("Please select an Option!")
            }
        } else {
            // setDisabler(false);
            setAttempt((prevAtt) => {
                return (prevAtt + 1)
            })
            setCurrentQn((prevQn) => {
                return (prevQn + 1)
            })

            setCorrectAns((prevCorrectAns) => {
                return [...prevCorrectAns, htmlEntities(props.correctAns)]
            })

        }

    }


   

    const [opt1, opt2, opt3, opt4] = [htmlEntities(props.shuffledOptions[0]), htmlEntities(props.shuffledOptions[1]),
    htmlEntities(props.shuffledOptions[2]), htmlEntities(props.shuffledOptions[3])]

   


    return (
        <>
            <div className="options">
                <label>
                    <input disabled={disabler} type="radio" name="option" id="o1" onClick={() => setOptionChosen(opt1)} />{opt1}</label>
                <br />
                <label>
                    <input disabled={disabler} type="radio" name="option" id="o2" onClick={() => setOptionChosen(opt2)} />{opt2}</label>
                <br />
                <label>
                    <input disabled={disabler} type="radio" name="option" id="o3" onClick={() => setOptionChosen(opt3)} />{opt3}</label>
                <br />
                <label>
                    <input disabled={disabler} type="radio" name="option" id="o4" onClick={() => setOptionChosen(opt4)} />{opt4}</label>

            </div>

            <div className='btn-nxt-submit'>
                <Button variant='contained' sx={{ m: 2 }} className='btn-nxt' onClick={prevHandler}>{"Previous"}</Button>
                <h2>{props.qNo - 1}/10 Completed</h2>
                <Button variant='contained' sx={{ m: 2 }} className='btn-nxt' onClick={nextHandler}>{correctAns.length === 9 ? "SUBMIT" : "Next"}</Button>
            </div>

        </>

    );
}

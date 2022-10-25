import React, { useEffect, useState, useContext } from 'react';
import { currentQnContext } from "./App"
import { Button } from 'semantic-ui-react';


export default function Options(props) {

    const { currentQn, setCurrentQn, score, setScore, correctAns, setCorrectAns, htmlEntities, attempt, setAttempt, disabled, disabler,setDisabler } = useContext(currentQnContext)

    const [optionChosen, setOptionChosen] = useState("")
    // const [disabler,setDisable] = useState(false) 
    // let disabler =false

    // function disabled(){
    //     // setDisable(true)
    //     console.log(disabler);
    //     // setDisable(true);
    //     disabler=true
    //     console.log(disabler);
    //     // if(currentQn<correctAns.length){
            
    //     // }
    // }
    function prevHandler() {
        
        // props.statHand()
        setCurrentQn((prevQn) => {
            
            return (prevQn - 1)
        })
        // props.statHand()
        disabled()
    }


    function nextHandler() {
        // props.statHand()
        if (optionChosen === htmlEntities(props.correctAns)) {
            setScore((prevScore) => {
                return (prevScore + 5)
            })
        }else{
            setScore((prevScore) => {
                return (prevScore - 1)
            })
        }
        
        if (optionChosen === "") {
            alert("Please select an Option!")
        } else {
            setAttempt((prevAtt) => {
                return (prevAtt + 1)
            })
            setCurrentQn((prevQn) => {
                return (prevQn + 1)
            })

            setCorrectAns((prevCorrectAns) => {
                return [...prevCorrectAns, htmlEntities( props.correctAns)]
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
                <Button variant='contained'  sx={{ m: 2 }}  className='btn-nxt' onClick={prevHandler}>{"Previous"}</Button>
                <h2>{props.qNo - 1}/10 Completed</h2>
                <Button variant='contained'  sx={{ m: 2 }}  className='btn-nxt' onClick={nextHandler}>{correctAns.length === 9 ? "SUBMIT" : "Next"}</Button>
            </div>

        </>

    );
}

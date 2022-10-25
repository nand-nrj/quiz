import React, { useContext } from "react";
import "../styles.css";
import Options from "./Options";
import { currentQnContext } from "./App"
import { useState } from "react";

function Question(props) {

    const { currentQn, setCurrentQn, score, setScore, correctAns, setCorrectAns, htmlEntities } = useContext(currentQnContext)
    const [disabler,setDisable] = useState(false)

    //For Shuffling the Options
    let unshuffled = [props.IA[1], props.IA[2], props.CA, props.IA[0]]
    let shuffled = unshuffled.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

    // function disabled(){
    //     // setDisable(true)
    //     console.log(disabler);
    //     setDisable(!disabler)
    //     console.log(disabler);
    //     // if(currentQn<correctAns.length){
            
    //     // }
    // }
    return (
        <div className="Quiz">
            <div className="qnContainer">
                <h2>{props.id}. {htmlEntities(props.QN)}</h2>
            </div>
            <div className="optionsContainer">
                <Options
                    // disable={disabled}
                    // statHand={props.statHand}
                    // disabler={props.status}
                    qNo={props.id}
                    shuffledOptions={shuffled}
                    correctAns={props.CA}
                />
            </div>

        </div>
    )

}

export default Question;
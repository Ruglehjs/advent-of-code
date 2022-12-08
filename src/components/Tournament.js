import React, { useState } from 'react'
import textfile from "../data/day02.txt";

const Tournament = () => {
    const [totalPoints, setTotalPoints] = useState("")
    const [totalPoints2, setTotalPoints2] = useState("")


    const firstStrat = () => {
        fetch(textfile)
        .then((r) => r.text())
        .then(text  => {
            let rounds = text.split(/\r?\n/);
            
            let points = 0;
            rounds.forEach(round => {
                let slicedRound = round.split(" ")

                switch (slicedRound[1]) {
                    case "X":
                        points = points + 1
                        switch (slicedRound[0]) {
                            case "A":
                                points = points + 3
                                break;
                            case "B":
                                points = points + 0
                                break;
                            case "C":
                                points = points + 6
                                break;
                            default:
                                break;
                        }
                        break;
                    case "Y":
                        points = points + 2
                        switch (slicedRound[0]) {
                            case "A":
                                points = points + 6
                                break;
                            case "B":
                                points = points + 3
                                break;
                            case "C":
                                points = points + 0
                                break;
                            default:
                                break;
                        }
                        break;
                    case "Z":
                        points = points + 3
                        switch (slicedRound[0]) {
                            case "A":
                                points = points + 0
                                break;
                            case "B":
                                points = points + 6
                                break;
                            case "C":
                                points = points + 3
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }

            });

            setTotalPoints(points)

            
            
        })  
    } 

    const secondStrat = () => {
        fetch(textfile)
        .then((r) => r.text())
        .then(text  => {
            let rounds = text.split(/\r?\n/);
            
            let points = 0;
            rounds.forEach(round => {
                let slicedRound = round.split(" ")

                switch (slicedRound[1]) {
                    case "X":
                        switch (slicedRound[0]) {
                            case "A":
                                points = points + 0 + 3
                                break;
                            case "B":
                                points = points + 0 + 1
                                break;
                            case "C":
                                points = points + 0 + 2
                                break;
                            default:
                                break;
                        }
                        break;
                    case "Y":
                        switch (slicedRound[0]) {
                            case "A":
                                points = points + 3 + 1
                                break;
                            case "B":
                                points = points + 3 + 2
                                break;
                            case "C":
                                points = points + 3 + 3
                                break;
                            default:
                                break;
                        }
                        break;
                    case "Z":
                        switch (slicedRound[0]) {
                            case "A":
                                points = points + 6 + 2
                                break;
                            case "B":
                                points = points + 6 + 3
                                break;
                            case "C":
                                points = points + 6 + 1
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }

            });

            setTotalPoints2(points)

            
            
        })  
    } 
    
    return (
        <>
            <button className="btn btn-success" onClick={firstStrat}>Load File data</button>
            <button className="btn btn-success" onClick={secondStrat}>Load File data</button>

            <h4>First strategy</h4>
            {totalPoints}

            <h4>Second strategy</h4>
            {totalPoints2}
        </>
    )
}

export default Tournament
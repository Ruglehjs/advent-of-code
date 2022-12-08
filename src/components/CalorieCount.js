import React, { useState } from 'react'
import textfile from "../data/day01.txt";

const CalorieCount = () => {
    const [firstElf, setFirstElf] = useState("")
    const [elfRanking, setElfRanking] = useState([]);

    const toNumber = (value) => {
        return Number(value);
    }

    const findThreeLargestNumbers = (array)  => {
        return [...array].sort((a, b) => a - b).slice(-3);
    }

    const handleClick = () => {
        fetch(textfile)
        .then((r) => r.text())
        .then(text  => {
          let elfs = text.split(/\r?\n\n/);
          let elfsFoodSum = [];

          elfs.forEach(foods => {
            elfsFoodSum.push(((foods.split(/\r?\n/)).map(toNumber)).reduce((a, b) => a + b, 0))
          });

          const elfMaxCalories = Math.max(...elfsFoodSum);
          setFirstElf(elfMaxCalories);
          setElfRanking(findThreeLargestNumbers(elfsFoodSum))
          
        })  
    } 
  
    return (
        <>
            <button className="btn btn-success" onClick={handleClick}>Load File data</button>
            <h4 className='py-4'>Top 1 elf with highest total calories is <b>{firstElf}</b></h4>
            <h4 className='py-4'>Top 3 elfs with highest total calories</h4>
            <ul>
                <li>{elfRanking[0]}</li>
                <li>{elfRanking[1]}</li>
                <li>{elfRanking[2]}</li>

            </ul>
            <h4 className='py-4'>Top 3 elfs with highest total calories sum: <b>{elfRanking.reduce((a, b) => a + b, 0)}</b></h4>
        </>
    )

}


export default CalorieCount
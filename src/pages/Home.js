import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='container py-5'>
        <h1>Advent of Code 2022</h1>
        <ul>
            <li><Link to="/day01">Day 01</Link></li>
            <li><Link to="/day02">Day 02</Link></li>
            <li><Link to="/day03">Day 03</Link></li>

        </ul>
    </div>
  )
}

export default Home
import React from 'react';

const Score = (props) =>
<div className = "container scoreTable">
  <div className = "row">
    <div className = "col-4">
    </div>
    <div className = "col-4">
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Current Score</th>
          <th scope="col">High Score</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-dark">
          <td>{props.current}</td>
          <td>{props.high}</td>
        </tr>
      </tbody>
      </table>
    </div>
    <div className = "col-4">
    </div>
  </div>
</div>


export default Score;
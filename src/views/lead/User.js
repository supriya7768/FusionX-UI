import { style } from '@mui/system';
import React from 'react'
// import PropTypes from 'prop-types';

import '../style/App.css';

const User = props => {
  const it = () => {
    <div className="Desti">
      <label className="mar">Designation</label>
      <input type="text"></input>
      <label className="mar">Year of Experiance</label>

      <input type="number" min="1988" max="2024"></input>
    </div>;
  };

  return (
    <div className="container">
      {/* <div className="header">
        <h1 class="h-1">Profile Picture</h1>
        <hr />
        <img src={require('./image/boss6.png')} alt="" />
        <h4>Upload/Change Your Image</h4>
        <button class="btn-2">Upload Avatar</button>
  </div> */}
      <h3 className="name">Lead Name</h3>
      <div className="main">
        <div className="main1">
          <div className="Left">
            <label className="mar">Lead Name</label>
            <input type="text" className=" hei " name="name"></input>

            <label className="mar">Email ID</label>
            <input type="text" className=" hei"></input>

            <label className="mar">College Name</label>

            <input type="text" className=" hei "></input>

            <label className="mar">Course Name</label>
            <select className=" hei ">
              <option></option>
              <option>Software Testing ( Java Selenium )</option>
              <option>Automation Testing ( Python Selenium )</option>
              <option>React API Testing </option>
              <option>Java Full Stack Development</option>
              <option>.NET Full Stack Development</option>
              <option>Diploma in UI/UX Design</option>
            </select>

            <label className="mar">Mode</label>
            <select className=" hei ">
              <option></option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>

            <label className='mar'>Experience</label>
            <select className=" hei ">
              <option></option>
              <option onMouseOverr={it}>IT</option>
              <option>Non IT</option>
            </select> 

            <label className="mar">Course Done From Other Institute</label>
            <select className=" hei ">
              <option></option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <div className="courseD">
              <label className="mar">Institute Name </label>
              <input type="text" className="hei"></input>
              <label className="mar">Reason For Changing </label>
              <input type="text" className="hei"></input>
              <br></br>
              <label className="mar">Fees </label>
              <input type="digit" className="hei"></input>
            </div>
          </div>

          <div className="right">
            <label className="marr">Mobile No</label>
            <input type="digit" className="hei  clr"></input>

            <label className="marr">Qualification</label>
            <input type="text" className="hei  clr"></input>

            <label className="marr">Passing Year</label>
            <input type="digit" className="hei  clr"></input>

            <label className="marr">Interest</label>

            <select className="hei  clr">
              <option></option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <label className="marr">Approach</label>
            <select className="hei  clr">
              <option></option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Search near by area</option>
              <option>Reference</option>
              <option>Other</option>
            </select>

            <div className="ref">
              <label className="marr">Reference Name</label>
              <input type="text" className="hei"></input>
              <br></br>
              <label className="marr">Batch Code</label>
              <input type="text" className="hei"></input>
            </div>

            <label className="marr">Status</label>

            <select className="hei clr">
              <option></option>
              <option>Open</option>
              <option>Deal Done</option>
              <option>PostPone</option>
              <option>Cancle</option>
            </select>
          </div>
        </div>

        <button className="btnn">Add Lead</button>
      </div>
    </div>
  );
};

User.propTypes = {};

export default User;

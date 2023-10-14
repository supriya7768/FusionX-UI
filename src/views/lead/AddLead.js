import React, { useState } from 'react';
import { Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import '../style/lead.css';

const AddLead = () => {
  const [responseMsg, setResponseMsg] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedMode, setSelectedMode] = useState(''); 
  const [selectedExperience, setSelectedExperience] = useState(''); 
  const [selectedcdfoi, setSelectedcdfoi] = useState(''); 
  const [selectedInterest, setSelectedInterest] = useState(''); 
  const [selectedApproach, setSelectedApproach] = useState(''); 
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showInstituteFields, setShowInstituteFields] = useState(false); // State to control field visibility 

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleMode = (event) => {
    setSelectedMode(event.target.value); 
  };
  
  const handleExperience = (event) => {
    setSelectedExperience(event.target.value); 
  };

  const handlecdfoi = (event) => {
    setSelectedcdfoi(event.target.value);
    if (event.target.value === 'Yes') {
      setShowInstituteFields(true);
    } else {
      setShowInstituteFields(false);
    }
  };

  const handleinterest = (event) => {
    setSelectedInterest(event.target.value); 
  };

  const handleapproach = (event) => {
    setSelectedApproach(event.target.value); 
  };

  const handlestatus = (event) => {
    setSelectedStatus(event.target.value); 
  };

  const handleAddLead = () => {
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', 'http://localhost:8080/add', true);
    xhr.setRequestHeader('Content-Type', 'application/json'); // Adjust content type as needed

    // Retrieve values from input tags (assuming you have corresponding input IDs)
    const leadName = document.getElementById('leadName').value;
    const email = document.getElementById('email').value;
    const collegeName = document.getElementById('collegeName').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const instituteName = document.getElementById('instituteName').value;
    const reasonForChanging = document.getElementById('reasonForChanging').value;
    const fees = document.getElementById('fees').value;
    const qualification = document.getElementById('qualification').value;
    const passingYear = document.getElementById('passingYear').value;
    const referenceName = document.getElementById('referenceName').value;
    const batchCode = document.getElementById('batchCode').value;

    // ... retrieve other fields as well

    const requestData = {
      leadName,
      email,
      collegeName,
      mobileNo,
      courseName: selectedCourse,
      mode: selectedMode,
      experience: selectedExperience,
      courseDoneFromOtherInstitute: selectedcdfoi,
      instituteName,
      reasonForChanging,
      fees,
      qualification,
      passingYear,
      interest: selectedInterest,
      approach: selectedApproach,
      referenceName,
      batchCode,
      status: selectedStatus
    };

    // Handle the response
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setResponseMsg(response);
        setResponseMsg('Lead added');
        setTimeout(() => {
          setResponseMsg(''); // Clear the message
          window.location.reload(); // Reload the page
        }, 2000);
      } else {
        // Handle errors here
        setResponseMsg('An error occurred while adding the lead');
      }
    };

    // Handle network errors
    xhr.onerror = () => {
      // Handle network errors here
      setResponseMsg('Network error while adding the lead');
    };

    xhr.send(JSON.stringify(requestData)); // Adjust data serialization as needed
  };

  return (
    <MainCard title="Add Lead">

      {/* =====================lead details=================== */}

      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Personal Information">
            <Grid container direction="column" spacing={1}>
              <div className="form-group">
                <label htmlFor="leadName" className="mar">
                  Lead Name
                </label>
                <input type="text" id="leadName" className="form-control" name="name" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="mar">
                  Email ID
                </label>
                <input type="text" id="email" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="mobileNo" className="marr">
                  Mobile No
                </label>
                <input type="number" id="mobileNo" className="form-control" />
              </div>
            </Grid>
          </SubCard>
        </Grid>

        {/* ==================qualification================= */}

        <Grid item xs={12} md={6}>
          <SubCard title="Qualification">
            <Grid container direction="column" spacing={1}>
              <div className="form-group">
                <label htmlFor="leadName" className="mar">
                  Degree
                </label>
                <input type="text" id="leadName" className="form-control" name="name" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="mar">
                  Passing Year
                </label>
                <input type="text" id="email" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="mobileNo" className="marr">
                  College Name
                </label>
                <input type="number" id="mobileNo" className="form-control" />
              </div>
            </Grid>
          </SubCard>
        </Grid>

              {/* ================courses===================== */}
    
        <Grid item xs={12} md={6}>
          <SubCard title="Courses">
            
          <div className="form-group">
              <label htmlFor="courseName" className="mar">
                Course Name
              </label>
              <select id="courseName" className="form-control" onChange={handleCourseChange}>
                <option></option>
                <option>Software Testing (Java Selenium)</option>
                <option>Automation Testing (Python Selenium)</option>
                <option>React API Testing </option>
                <option>Java Full Stack Development</option>
                <option>.NET Full Stack Development</option>
                <option>Diploma in UI/UX Design</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mode" className="mar">
                Mode
              </label>
              <select id="mode" className="form-control" onChange={handleMode}>
                <option></option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience" className="mar">
                Experience
              </label>
              <select id="experience" className="form-control" onChange={handleExperience}>
                <option></option>
                <option>IT</option>
                <option>Non IT</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="courseDoneFromOtherInstitute" className="mar">
                Course Done From Other Institute
              </label>
              <select id="courseDoneFromOtherInstitute" className="form-control" onChange={handlecdfoi}>
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {showInstituteFields && (
            <div className="courseD">
              <div className="form-group">
                <label htmlFor="instituteName" className="mar">
                  Institute Name
                </label>
                <input type="text" id="instituteName" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="reasonForChanging" className="mar">
                  Reason For Changing
                </label>
                <input type="text" id="reasonForChanging" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="fees" className="mar">
                  Fees
                </label>
                <input type="number" id="fees" className="form-control" />
              </div>
            </div>
            )}

              

              <div className="form-group">
                <label htmlFor="interest" className="marr">
                  Interest
                </label>
                <select id="interest" className="form-control clr" onChange={handleinterest}>
                  <option></option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

             
            
            <button className="btn" onClick={handleAddLead}>
              Add Lead
            </button>{' '}
            <h4 className="h4tag" id="reg-response">
              {responseMsg}
            </h4>
          </SubCard>
        </Grid>
      

      {/* =======================references==================== */}

      <Grid item xs={12} md={6}>
          <SubCard title="Reference">
            
          <div className="form-group">
                <label htmlFor="approach" className="marr">
                  Approach
                </label>
                <select id="approach" className="form-control clr" onChange={handleapproach}>
                  <option></option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>Search near by area</option>
                  <option>Reference</option>
                  <option>Other</option>
                </select>
              </div>
            <div className="ref">
              <div className="form-group">
                  <label htmlFor="referenceName" className="marr">
                    Reference Name
                  </label>
                  <input type="text" id="referenceName" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="batchCode" className="marr">
                    Batch Code
                  </label>
                  <input type="text" id="batchCode" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="status" className="marr">
                  Status
                </label>
                <select id="status" className="form-control clr" onChange={handlestatus}>
                  <option></option>
                  <option>Open</option>
                  <option>Deal Done</option>
                  <option>PostPone</option>
                  <option>Cancel</option>
                </select>
              </div>

          </SubCard>
        </Grid>
        </Grid>

    </MainCard>
  );
};

export default AddLead;

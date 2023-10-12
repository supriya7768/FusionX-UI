import React from 'react';
import { Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import '../style/lead.css';

const LeadList = () => {
  return (
    <MainCard title="Lead List">
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
                <label htmlFor="collegeName" className="mar">
                  College Name
                </label>
                <input type="text" id="collegeName" className="form-control" />
              </div>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Course and Preferences">
            <div className="form-group">
              <label htmlFor="courseName" className="mar">
                Course Name
              </label>
              <select id="courseName" className="form-control">
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
              <select id="mode" className="form-control">
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
              <select id="experience" className="form-control">
                <option></option>
                <option>IT</option>
                <option>Non IT</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="courseDoneFromOtherInstitute" className="mar">
                Course Done From Other Institute
              </label>
              <select id="courseDoneFromOtherInstitute" className="form-control">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

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
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Course and Preferences">
            <div className="right">
              <div className="form-group">
                <label htmlFor="mobileNo" className="marr">
                  Mobile No
                </label>
                <input type="number" id="mobileNo" className="form-control clr" />
              </div>

              <div className="form-group">
                <label htmlFor="qualification" className="marr">
                  Qualification
                </label>
                <input type="text" id="qualification" className="form-control clr" />
              </div>

              <div className="form-group">
                <label htmlFor="passingYear" className="marr">
                  Passing Year
                </label>
                <input type="number" id="passingYear" className="form-control clr" />
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="marr">
                  Interest
                </label>
                <select id="interest" className="form-control clr">
                  <option></option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="approach" className="marr">
                  Approach
                </label>
                <select id="approach" className="form-control clr">
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
                <select id="status" className="form-control clr">
                  <option></option>
                  <option>Open</option>
                  <option>Deal Done</option>
                  <option>PostPone</option>
                  <option>Cancel</option>
                </select>
              </div>
            </div>
            <button className="btnn">Add Lead</button>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default LeadList;

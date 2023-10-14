import React, { useRef, useState } from 'react';
import { Grid } from '@mui/material';
// import MuiTypography from '@mui/material/Typography';

// project imports
// import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// import { Link } from 'react-router-dom';
import '../style/invoice.css'; // Import your project's CSS file
// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Gridider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
// import AuthWrapper1 from '../pages/authentication/AuthWrapper1';
// import AuthCardWrapper from '../pages/authentication/AuthCardWrapper';
// import AuthCreateInvoice from '../pages/authentication/auth-forms/AuthCreateInvoice';
// import Logo from 'ui-component/Logo';
// import AuthFooter from 'ui-component/cards/AuthFooter';

const Create = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const addressRef = useRef(null);
  const courseNameRef = useRef(null);
  const paymentDateRef = useRef(null);
  const statusRef = useRef(null);
  const dueDateRef = useRef(null);
  const subAmountRef = useRef(null);
  const paidAmountRef = useRef(null);
  const dueAmountRef = useRef(null);
  const taxesRef = useRef(null);
  const totalAmountRef = useRef(null);

  const [responseMsg, setResponseMsg] = useState('');

  const calculateTaxes = () => {
    const subAmountValue = subAmountRef.current.value;
    const taxRate = 0.18;
    const taxes = subAmountValue * taxRate;
    taxesRef.current.value = taxes.toFixed(2);
    calculateDue();
    calculateTotalAmount();
  };

  const calculateDue = () => {
    const subAmountValue = subAmountRef.current.value;
    const paidAmountValue = paidAmountRef.current.value;
    const taxesValue = taxesRef.current.value;

    // Parse the values to numbers (assuming they are strings)
    const subAmount = parseFloat(subAmountValue);
    const paidAmount = parseFloat(paidAmountValue);
    const taxes = parseFloat(taxesValue);

    // Calculate due amount as the difference between (sub amount + taxes) and paid amount
    const dueAmount = subAmount + taxes - paidAmount;

    // Update the "Due Amount" input field with the calculated value
    dueAmountRef.current.value = dueAmount.toFixed(2);
    calculateTotalAmount();
  };

  const calculateTotalAmount = () => {
    const subAmountValue = subAmountRef.current.value;
    const taxesValue = taxesRef.current.value;

    // Parse the values to numbers (assuming they are strings)
    const subAmount = parseFloat(subAmountValue);
    const taxes = parseFloat(taxesValue);

    // Calculate the total amount as the sum of sub amount and taxes
    const totalAmount = subAmount + taxes;

    // Update the "Total Amount" input field with the calculated value
    totalAmountRef.current.value = totalAmount.toFixed(2); // Assuming you want to display the total amount with 2 decimal places
  };

  // Regular expressions for email and mobile number validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const mobilePattern = /^[789]\d{9}$/;

  // Function to validate email and mobile number
  const validateInputs = () => {
    const email = emailRef.current.value;
    const mobile = mobileRef.current.value;

    if (!emailPattern.test(email)) {
      setResponseMsg('Please enter a valid email address.');
      setTimeout(() => {
        setResponseMsg('');
      }, 5000); // 5 seconds in milliseconds
      return false;
    }

    if (!mobilePattern.test(mobile)) {
      setResponseMsg('Please enter a valid mobile number');
      setTimeout(() => {
        setResponseMsg('');
      }, 5000); // 5 seconds in milliseconds
      return false;
    }

    return true;
  };

  const handleCreateInvoice = () => {
    // Get the values from the input elements using refs

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobileRef.current.value;
    const address = addressRef.current.value;
    const courseName = courseNameRef.current.value;
    const paymentDate = paymentDateRef.current.value;
    const status = statusRef.current.value;
    const dueDate = dueDateRef.current.value;
    const subAmount = subAmountRef.current.value;
    const paidAmount = paidAmountRef.current.value;
    const dueAmount = dueAmountRef.current.value;
    const taxes = taxesRef.current.value;
    const totalAmount = totalAmountRef.current.value;

    // Check if any of the required fields are empty
    if (!name || !email || !mobile || !address || !courseName || !paymentDate || !status || !subAmount || !paidAmount) {
      setResponseMsg('Please fill in all required fields.');
      setTimeout(() => {
        setResponseMsg('');
      }, 10000); // 10 seconds in milliseconds
      return; // Exit the function if any field is empty
    }

    // Validate email and mobile number inputs
    if (!validateInputs()) {
      return;
    }

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request to check if the email already exists
    xhr.open('GET', 'http://localhost:8080/getInvoiceByEmail?email=' + email, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = xhr.responseText;
          if (response === 'Email id is already present') {
            setResponseMsg('Email is already registered.');
            setTimeout(() => {
              setResponseMsg('');
            }, 5000); // 5 seconds in milliseconds
          } else {
            // If the email is not found, proceed to create a new invoice
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('address', address);
            formData.append('courseName', courseName);
            formData.append('paymentDate', paymentDate);
            formData.append('status', status);
            formData.append('dueDate', dueDate);
            formData.append('subAmount', subAmount);
            formData.append('paidAmount', paidAmount);
            formData.append('dueAmount', dueAmount);
            formData.append('taxes', taxes);
            formData.append('totalAmount', totalAmount);

            // Create a new XMLHttpRequest object for creating the invoice
            const createInvoiceXhr = new XMLHttpRequest();

            // Configure the request to create a new invoice
            createInvoiceXhr.open('POST', 'http://localhost:8080/createInvoice', true);

            createInvoiceXhr.onreadystatechange = () => {
              if (createInvoiceXhr.readyState === 4) {
                if (createInvoiceXhr.status === 200) {
                  setResponseMsg('Invoice Generated');
                  setTimeout(() => {
                    setResponseMsg('');
                    window.location.reload();
                  }, 5000);
                } else {
                  setResponseMsg('An error occurred while creating the invoice.');
                  setTimeout(() => {
                    setResponseMsg('');
                  }, 10000); // 10 seconds in milliseconds
                }
              }
            };

            // Send the FormData object as the request body to create the invoice
            createInvoiceXhr.send(formData);
          }
        } else {
          setResponseMsg('An error occurred while generating invoice');
          setTimeout(() => {
            setResponseMsg('');
          }, 10000); // 10 seconds in milliseconds
        }
      }
    };

    // Send the request to check if the email exists
    xhr.send();
  };

  return (
    <MainCard title="Creating Invoice">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <Grid container direction="column" spacing={1}>
              <Grid className="head" item>
                {/* <h1>Create Invoice</h1> */}
              </Grid>
              <hr></hr>
              <Grid className="main1">
                <Grid className="col-lg-4">
                  <h4>Lead Name*</h4>
                  <input className="inp" type="text" placeholder="Enter Lead Name" ref={nameRef}></input>
                </Grid>
                <Grid className="col-lg-4">
                  <h4>Lead Email*</h4>
                  <input className="inp" type="email" placeholder="Enter Email id" ref={emailRef}></input>
                </Grid>
                <Grid className="col-lg-4">
                  <h4>Lead Mobile Number*</h4>
                  <input className="inp" id="myNumberInput" type="number" placeholder="Enter Mobile Number" ref={mobileRef}></input>
                </Grid>
              </Grid>

              <Grid className="main2">
                <Grid className="col-lg-8">
                  <h4 className="leadaddress">Lead Address*</h4>
                  <input className="add" type="text" placeholder="Address" ref={addressRef}></input>
                </Grid>
                <Grid className="col-lg-4">
                  <h4>Course Name*</h4>
                  <select className="inp" ref={courseNameRef}>
                    <option>Select Course</option>
                    <option>Software Testing(Java Selenium)</option>
                    <option>Automation Testing(Python Selenium)</option>
                    <option>Rest API Testing</option>
                    <option>Java Full Stack Development</option>
                    <option>MERN Java Full Stack Development</option>
                    <option>.NET Full Stack Development</option>
                    <option>Diploma in UI/UX Design</option>
                  </select>
                </Grid>
              </Grid>

              <Grid className="main1">
                <Grid className="col-lg-4">
                  <h4>Payment Date*</h4>
                  <input className="inp" type="date" ref={paymentDateRef}></input>
                </Grid>
                <Grid className="col-lg-4">
                  <h4>Status*</h4>
                  <select className="inp" ref={statusRef}>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Refund</option>
                  </select>
                </Grid>
                <Grid className="col-lg-4">
                  <h4>Due Date</h4>
                  <input className="inp" type="date" ref={dueDateRef}></input>
                </Grid>
              </Grid>

              <Grid className="main3">
                <Grid className="col-lg-3">
                  <h4>Sub Amount*</h4>
                  <input className="inp1" type="number" placeholder="₹ 000" ref={subAmountRef} onChange={calculateTaxes}></input>
                </Grid>
                <Grid className="col-lg-3">
                  <h4>Paid Amount*</h4>
                  <input className="inp1" type="number" placeholder="₹ 000" ref={paidAmountRef} onChange={calculateDue}></input>
                </Grid>
                <Grid className="col-lg-3">
                  <h4>Due Amount</h4>
                  <input className="inp1" type="number" placeholder="₹ 000" ref={dueAmountRef}></input>
                </Grid>
                <Grid className="col-lg-3">
                  <h4>Taxes</h4>
                  <input className="inp1" type="number" placeholder="₹ 000" ref={taxesRef}></input>
                </Grid>
              </Grid>

              <Grid className="bb">
                <Grid className="main4">
                  <h4>Total</h4>
                  <input className="inp" type="number" placeholder="₹ 000" ref={totalAmountRef}></input>
                </Grid>
                <button className="btn" onClick={handleCreateInvoice}>
                  Create Invoice
                </button>{' '}
                <h4 className="h4tag" id="reg-response">
                  {responseMsg}
                </h4>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default Create;

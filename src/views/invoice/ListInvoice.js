import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import '../style/invoice.css';

const List = () => {
  const [invoices, setInvoices] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownNames, setDropdownNames] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  // const [filteredInvoices, setFilteredInvoices] = useState([]);

  useEffect(() => {
    // Fetch data from your API when the component mounts
    fetch('http://localhost:8080/getAllInvoices')
      .then((response) => response.json())
      .then((data) => {
        setInvoices(data);
        // Extract and set the list of names for the dropdown
        const names = data.map((invoice) => invoice.name);
        setDropdownNames(names);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const displayDropdown = (names) => {
    return (
      <div className={`dropdown-content ${isDropdownVisible ? 'visible' : ''}`}>
        {names.map((name) => (
          <a key={name} href="#">
            {name}
          </a>
        ))}
      </div>
    );
  };

  const handleShowAllInvoices = () => {
    setSelectedStatus('All');
    // You can also reset the selectedName here if needed.
  };

  const filterInvoicesByStatus = () => {
    if (selectedStatus === 'All') {
      return invoices; // Return all invoices
    } else {
      return invoices.filter((invoice) => invoice.status === selectedStatus);
    }
  };

  const sortedInvoices = [...filterInvoicesByStatus()].sort((a, b) => {
    if (sortField) {
      if (sortField === 'dueDate') {
        // Handle sorting for the 'dueDate' field with empty or null values
        const valueA = a[sortField] || '';
        const valueB = b[sortField] || '';

        if (valueA < valueB) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortDirection === 'asc' ? 1 : -1;
        }
      } else {
        // Handle sorting for other fields
        if (a[sortField] < b[sortField]) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (a[sortField] > b[sortField]) {
          return sortDirection === 'asc' ? 1 : -1;
        }
      }
    }
    return 0;
  });

  // const calculateTotals = () => {
  //   let totalQuantity = 0;
  //   let totalAmount = 0;

  //   invoices.forEach((invoice) => {
  //     // Check if 'quantity' is a valid number
  //     const quantity = parseFloat(invoice.quantity);

  //     if (!isNaN(quantity)) {
  //       totalQuantity += quantity;
  //     }

  //     // Ensure 'totalAmount' is a valid number as well
  //     const amount = parseFloat(invoice.totalAmount);

  //     if (!isNaN(amount)) {
  //       totalAmount += amount;
  //     }
  //   });

  //   return { totalQuantity, totalAmount };
  // };

  // const { totalQuantity, totalAmount } = calculateTotals();

  return (
    <MainCard title="Invoice List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div>
            {/* <nav> */}
            <div className="dropdown" onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
              <button className="dropbtn">Select User</button>
              {isDropdownVisible && displayDropdown([...new Set(dropdownNames)])}
            </div>
            <input className="inp" type="text" placeholder="Enter Lead Name"></input>
            {/* <button id="nvd">Generate report</button> */}
            {/* </nav> */}
            <div className="navbar">
              <div>
                {/* <div id="newinvoices">
                  <a id="anewinvoices" href="">
                    <i className="material-icons"></i>All Invoices
                    <div>Total Quantity: {totalQuantity}</div>
                    <div>₹ {totalAmount}</div>
                  </a>
                </div> */}
                <a href="#" onClick={handleShowAllInvoices}>
                  All Invoices
                </a>
                <a href="#" onClick={() => setSelectedStatus('Paid')}>
                  Paid
                </a>
                <a href="#" onClick={() => setSelectedStatus('Pending')}>
                  Pending
                </a>
                <a href="#">Overdue</a>
                {/* <a href="#">Recurring</a>
                <a href="#">Cancelled</a> */}
              </div>
              {/* <div id="newinvoices">
                <a id="anewinvoices" href="">
                  <i className="material-icons"></i>New invoice
                </a>
              </div> */}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Invoice Id</th>
                  <th onClick={() => handleSort('name')}>
                    <span>Invoice to</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('name')}>
                        {sortDirection === 'asc' ? '' : ''}
                      </button>
                    </div>
                  </th>
                  <th onClick={() => handleSort('courseName')}>
                    <span>Course Name</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('courseName')}>
                        {sortDirection === 'asc' ? '' : ''}
                      </button>
                    </div>
                  </th>
                  <th onClick={() => handleSort('invoiceDate')}>
                    <span>Created on</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('invoiceDate')}>
                        {sortDirection === 'asc' ? '' : ''}
                      </button>
                    </div>
                  </th>
                  <th onClick={() => handleSort('totalAmount')}>
                    <span>Total Amount</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('totalAmount')}>
                        {sortDirection === 'asc' ? '' : ''}
                      </button>
                    </div>
                  </th>
                  <th onClick={() => handleSort('dueAmount')}>
                    <span>Due Amount</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('dueAmount')}>
                        {sortDirection === 'asc' ? '' : ''}
                      </button>
                    </div>
                  </th>
                  <th onClick={() => handleSort('dueDate')}>
                    <span>Due Date</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('dueDate')}>
                        {sortDirection === 'asc' ? ' ▼' : ' ▲'}
                      </button>
                    </div>
                  </th>
                  <th onClick={() => handleSort('status')}>
                    <span>Status</span>
                    <div className="dropdown">
                      <button className={`dropdownn-button ${sortDirection}`} onClick={() => handleSort('status')}>
                        {sortDirection === 'asc' ? ' ▼' : ' ▲'}
                      </button>
                    </div>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedInvoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.invoiceId}</td>
                    <td>{invoice.name}</td>
                    <td>{invoice.courseName}</td>
                    <td>{invoice.invoiceDate}</td>
                    <td>{invoice.totalAmount}</td>
                    <td>{invoice.dueAmount}</td>
                    <td>{invoice.dueDate}</td>
                    <td>{invoice.status}</td>
                    <td>
                      <div className="dropdown">
                        <button className="dropdown-button">&#10247;</button>
                        <div className="dropdown-content">
                          <a href="#">Edit</a>
                          <a href="#">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default List;

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(invoiceTo, invoiceId, courseName, dueAmount, dueDate, status, action) {
  return {
    invoiceTo,
    invoiceId,
    courseName,
    dueAmount,
    dueDate,
    status,
    action,
    history: [
      {
        paymentDate: '2020-01-05',
        mode: 'Cash',
        amountPaid: 10000,
        remaining: 20000
      },
      {
        paymentDate: '2020-01-05',
        mode: 'Cheque',
        amountPaid: 10000,
        remaining: 10000
      }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.invoiceTo}
        </TableCell>
        <TableCell align="right">{row.invoiceId}</TableCell>
        <TableCell align="right">{row.courseName}</TableCell>
        <TableCell align="right">{row.dueAmount}</TableCell>
        <TableCell align="right">{row.dueDate}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.action}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell> Payment Date</TableCell>
                    <TableCell>Mode</TableCell>
                    <TableCell align="right">Amount paid</TableCell>
                    <TableCell align="right">Remaining</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.paymentDate}>
                      <TableCell component="th" scope="row">
                        {historyRow.paymentDate}
                      </TableCell>
                      <TableCell>{historyRow.mode}</TableCell>
                      <TableCell align="right">{historyRow.amountPaid}</TableCell>
                      <TableCell align="right">{Math.round(historyRow.amountPaid * row.dueAmount * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    invoiceId: PropTypes.number.isRequired,
    dueAmount: PropTypes.number.isRequired,
    courseName: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    invoiceTo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.number.isRequired
  }).isRequired
};

const rows = [
  createData('Supriya Mahajan', 1, 'Java Full stack', 10000, 12, 8.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Invoice to</TableCell>
            <TableCell align="right">Invoice ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Due Amount</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.invoiceTo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

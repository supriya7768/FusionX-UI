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

function createData(name, course, mobile, email, address, status) {
  return {
    name,
    course,
    mobile,
    email,
    address,
    status,
    history: [
      {
        degree: 'B.E',
        field: 'Civil',
        passingYear: 3,
        collegeName: 'RCPIT',
        expierience: 0,
        attendedBy: 'Shakila'
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
          {row.name}
        </TableCell>
        <TableCell align="right">{row.course}</TableCell>
        <TableCell align="right">{row.mobile}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Degree</TableCell>
                    <TableCell align="left">Field</TableCell>
                    <TableCell align="left">Passing Year</TableCell>
                    <TableCell align="left">College Name</TableCell>
                    <TableCell align="left">Expierience</TableCell>
                    <TableCell align="left">Attended By</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.degree}>
                      <TableCell component="th" scope="row">
                        {historyRow.degree}
                      </TableCell>
                      <TableCell>{historyRow.field}</TableCell>
                      <TableCell align="left">{historyRow.passingYear}</TableCell>
                      <TableCell align="left">{historyRow.collegeName}</TableCell>
                      <TableCell align="left">{historyRow.expierience}</TableCell>
                      <TableCell align="left">{historyRow.attendedBy}</TableCell>
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
    course: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string.isRequired,
        collegeName: PropTypes.string.isRequired,
        passingYear: PropTypes.number.isRequired,
        expierience: PropTypes.number.isRequired,
        attendedBy: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired
};

const rows = [
  createData('Supriya Mahajan', 'Java Full Stack Development', 123456, 'mahajansupriya@gmail.com', 'Jalgaon', 'Open'),
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
            <TableCell>Lead Name</TableCell>
            <TableCell align="right">Course Intrested</TableCell>
            <TableCell align="left">Mobile No</TableCell>
            <TableCell align="right">Email ID</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

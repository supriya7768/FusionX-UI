// import React, { useRef, useState } from 'react';
import { Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import '../style/invoice.css'; // Import your project's CSS file

const List = () => {
  return (
    <MainCard title="List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title="List Items">
            {/* Your list content goes here */}
            {/* For example, you can render a list of items */}
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default List;

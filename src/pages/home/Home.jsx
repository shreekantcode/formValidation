import React from 'react'
import './home.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BasicTable from './Table';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import ScrollDialog from './Modal';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='tab top'>
      <div className='flex'>
        <div>
          <span className='border'></span>
          Corporate Information
        </div>
        <div className='pointer' onClick={() => navigate('/register')}>
          <BorderColorIcon />
        </div>
      </div>
      <BasicTable />

      <Grid container spacing={1} sx={{ marginTop: 2 }}>

        <Grid item xs={12} sm={6}>
          <div className='flex'>
            <div>
              <span className='border'></span>
              Corporate Information
            </div>
            <div className='pointer'>
              <ScrollDialog/>
              
            </div>
          </div>
        </Grid>
      </Grid>

    </div>



  )
}

export default Home

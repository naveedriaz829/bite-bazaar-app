import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'

const Dashboard = () => {
  return (
    <Grid  >
      <Header />
      <Outlet />
    </Grid>
  )
}

export default Dashboard
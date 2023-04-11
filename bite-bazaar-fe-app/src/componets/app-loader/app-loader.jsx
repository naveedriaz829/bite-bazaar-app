import { LinearProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react';
import './app-loader.css'

const AppLoader = (props) => {
    const {message} = props
    return (
        <div className="center-text">
            <h2
                className='secondary-heading secondary-color font-weight-600'>
                {message || 'Please wait! while processing your request'}
            </h2>
            <LinearProgress variant="indeterminate" className='bg-primary-color' sx={{
                '& .MuiLinearProgress-bar': {
                    backgroundColor:'#fff23f'
                }
            }} />
        </div>
    )
}

export default AppLoader
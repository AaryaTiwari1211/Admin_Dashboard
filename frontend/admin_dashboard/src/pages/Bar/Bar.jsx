import React from 'react'
import { Box, colors } from '@mui/material'
import Header from '../../components/Header/Header'
import Barchart from '../../components/Barchart/Barchart'

function Bar() {
    return (
        <Box m='20px'>
            <Header title='BAR CHART' subtitle="Bar Chart Visualization" />
            <Box height='75vh'>
                <Barchart/>
            </Box>
        </Box>
    )
}

export default Bar
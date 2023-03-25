import React from 'react'
import Piechart from '../../components/Piechart'
import { Box } from '@mui/material'
import Header from '../../components/Header/Header'

function Pie() {
    return (
        <Box m='20px'>
            <Header title='PIE CHART' subtitle='Pie Chart Visualization'/>
            <Box height='75vh'>
                <Piechart/>
            </Box>
        </Box>
    )
}

export default Pie
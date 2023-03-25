import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header/Header'
import Linechart from '../../components/Linechart'


function Line() {
  return (
    <Box m='20px'>
      <Header title='LINE CHART' subtitle="Line Chart Visualization" />
      <Box height='75vh'>
        <Linechart/>
      </Box>
    </Box>
  )
}

export default Line
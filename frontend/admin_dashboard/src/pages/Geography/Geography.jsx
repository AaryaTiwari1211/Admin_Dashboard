import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header/Header'
import Geochart from '../../components/Geochart'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

function Geography() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box m='20px'>
            <Header title='GEOGRAPHY CHART' subtitle="Geo Chart Visualization" />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`}>
                <Geochart />
            </Box>
        </Box>
    )
}

export default Geography
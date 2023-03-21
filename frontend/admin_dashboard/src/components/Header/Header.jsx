import React from 'react'
import { Typography, useTheme, Box } from '@mui/material'
import {tokens} from '../../theme'
import './Header.css'

function Header({title , subtitle}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box mb='30px'>
            <Typography
                variant='h2'
                color={colors.grey[100]}
                fontWeight='bold'
                sx={{ mb: '5px' }}>
                    <span className='title'>
                        {title}
                    </span>
            </Typography>
            <Typography variant='h5' color={colors.greenAccent[400]}> 
                <span>
                    {subtitle}
                </span>
                
            </Typography>
        </Box>
    )
}

export default Header
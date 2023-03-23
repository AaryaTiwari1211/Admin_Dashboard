import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import Header from '../../components/Header/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'


function FAQ() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions' />
            <Box height='30px' />
            <Accordion sx={{
                m: '20px 0',
            }} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur 
                    ex atque quam in, nihil eius sapiente nulla doloremque, vitae id minima, mollitia 
                    laudantium vel aut repellendus quo alias dignissimos?
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                m: '20px 0',
            }} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur 
                    ex atque quam in, nihil eius sapiente nulla doloremque, vitae id minima, mollitia 
                    laudantium vel aut repellendus quo alias dignissimos?
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                m: '20px 0',
            }} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur 
                    ex atque quam in, nihil eius sapiente nulla doloremque, vitae id minima, mollitia 
                    laudantium vel aut repellendus quo alias dignissimos?
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                m: '20px 0',
            }} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur 
                    ex atque quam in, nihil eius sapiente nulla doloremque, vitae id minima, mollitia 
                    laudantium vel aut repellendus quo alias dignissimos?
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ
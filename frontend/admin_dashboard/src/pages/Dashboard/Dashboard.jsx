import React from 'react'
import './Dashboard.css'
import { tokens } from '../../theme'
import Header from '../../components/Header/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { mockTransactions } from '../../Data/mockData'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import {useNavigate} from 'react-router-dom'
import Barchart from '../../components/Barchart'
import Linechart from '../../components/Linechart'
import Piechart from '../../components/Piechart'
import Geochart from '../../components/Geochart'

import Stats from '../../components/Stats'
import ProgressCircle from '../../components/ProgressCircle'
import { fontSize } from '@mui/system'

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className='threespan'
                >
                    <Stats
                        title="-4573"
                        subtitle="Bitches Pulled"
                        progress="0.75"
                        increase="-14%"
                        icon={
                            <Woman2OutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className='threespan'
                >
                    <Stats
                        title="431,225"
                        subtitle="Exams Failed"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <NoteAltOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className='threespan'
                >
                    <Stats
                        title="32,441"
                        subtitle="rejections Faced"
                        progress="0.30"
                        increase="+270%"
                        icon={
                            <ThumbDownOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className='threespan'
                >
                    <Stats
                        title="1,325,134"
                        subtitle="Money Wasted on Feet Pics"
                        progress="0.80"
                        increase="+200%"
                        icon={
                            <AttachMoneyOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    className='threespan'
                    onClick={() => navigate('/line')}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <Linechart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    className='threespan'
                    onClick={() => navigate('/invoices')}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                    className='threespan'
                    onClick={() => navigate('/pie')}
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        {/* <Piechart isDashboard={true}/> */}
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    className='threespan'
                    onClick={() => navigate('/bar')}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <Barchart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                    className='threespan'
                    onClick={() => navigate('/geography')}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height="200px">
                        <Geochart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
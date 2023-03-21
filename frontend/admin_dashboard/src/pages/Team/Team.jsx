import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../Data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header/Header'
import { borderBottom } from '@mui/system'


function Team() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'name',
      headerName: 'Full Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'email',
      headerName: 'Email ID',
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      cellClassName: 'age-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width='50%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius='3px'
          >
            {
              access === 'admin' &&
              <AdminPanelSettingsOutlinedIcon />
            }
            {
              access === 'manager' &&
              <SecurityOutlinedIcon />
            }
            {
              access === 'user' &&
              <LockOpenOutlinedIcon />
            }
            <Typography
              color={colors.grey[100]}
              sx={{ ml: '5px' }}
            >{access}</Typography>
          </Box>
        )
      }
    },
  ]
  return (
    <Box m='20px'>
      <Header title='TEAM' subtitle='Teams are Managed Here' />
      <Box
      m='40px 0 0 0'
      height='75vh'
      sx={
        {
          "& .MuiDataGrid-root": 
          {
            border: 'none'
          },
          "& .MuiDataGrid-cell": 
          {
            borderBottom: 'none'
          },
          "& .name-column--cell": 
          {
            color: colors.greenAccent[100]
          },
          "& .MuiDataGrid-columnHeaders": 
          {
            color: colors.blueAccent[100],
            borderBottom: 'none'
          },
          "& .MuiDataGrid-virtualScroller": 
          {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": 
          {
            borderTop: 'nono',
            backgroundColor: colors.blueAccent[700],
          },
        }
      }
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Team
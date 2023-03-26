import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
// X_Data-Grid is used for making the tables
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../Data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header/Header'


function Team() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // Columns for the X-Data-Grid Table
  const columns = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'name',
      headerName: 'Full Name',
      flex: 1, // Sets Width for the cell
      cellClassName: 'name-column--cell', // Will be edited later
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
      renderCell: ({ row: { access } }) => { //This shows what will be rendered ateach cell for specificity
        return (
          <Box
            width='50%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600] // Color Changes based on the user access along with the Icon
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
          "& .MuiDataGrid-root": // Taregts the Datagrid main class
          {
            border: 'none'
          },
          "& .MuiDataGrid-cell": //Targets each cell in the table
          {
            borderBottom: 'none'
          },
          "& .name-column--cell": //Targets the column 'name' cells
          {
            color: colors.greenAccent[100] 
          },
          "& .MuiDataGrid-columnHeaders": //Targets the columnheader
          {
            color: colors.grey[100],
            borderBottom: 'none'
          },
          "& .MuiDataGrid-virtualScroller": // targets the background of the Main Scroller
          {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": //Targets the Footer
          {
            borderTop: 'nono',
            backgroundColor: colors.primary[400],
          },
        }
      }
      >
        <DataGrid // Takes 2 parameters rows and columns and creates the table
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Team
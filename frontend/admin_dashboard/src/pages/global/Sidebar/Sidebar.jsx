import React from 'react'
import { useState } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {Box , IconButton , Typography, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import { tokens } from '../../../'

function Sidebar() {
    return (
        <ProSidebarProvider>
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </ProSidebarProvider>
    )
}

export default Sidebar
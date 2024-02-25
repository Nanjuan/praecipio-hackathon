"use client"

import { useEffect } from "react";
import Link from 'next/link';
import { styled } from '@mui/system';
import {
    AppBar,
    ToolBar,
    IconButton,
    MenuIcon,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Button
} from '@mui/material'

const drawerWidth = 240;

const DrawerContainer = styled('div')({
    overflow: 'auto',
});

const Content = styled('div')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));


export default function UserToolbar() {
    return (
        <div sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <ToolBar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => console.log('Menu Clicked')} // Add functionality
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        User Profile
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
};
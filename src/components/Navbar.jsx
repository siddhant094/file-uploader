'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import Image from 'next/image';
// import clogo from '../../../public/assets/notion icon.webp';

// interface Props {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window?: () => Window;
// }

const drawerWidth = 240;
const navItems = ['Product', 'Download', 'Solutions', 'Resources', 'Pricing'];

export default function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
            className='md:hidden'
        >
            {/* <Typography variant='h6' sx={{ my: 2 }}>
                Notion
            </Typography> */}
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: 'center',
                                textTransform: 'lowercase',
                            }}
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            sx={{ display: 'flex' }}
            className='bg-white border border-b-2 md:hidden'
        >
            <CssBaseline />
            <AppBar component='nav' className='bg-white shadow-none md:hidden'>
                <Toolbar className='justify-between bg-inherit md:hidden'>
                    {/* <image src={clogo} alt='img' width={50} height={50} /> */}
                    <span className='text-[#050505] font-bold text-base m-auto md:hidden'>
                        Notion
                    </span>
                    <IconButton
                        color='info'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    ></Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: '#000',
                                    textTransform: 'capitalize',
                                    fontSize: '16px',
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                        <span className='text-black ml-80'>
                            Request a {'Demo      '}
                        </span>
                        <span className='text-black mx-5'>Log In</span>
                        <Button
                            variant='contained'
                            className='bg-black text-white normal-case text-base font-medium hover:bg-[#333] btn flex-grow-0 justify-center px-4 py-1'
                        >
                            Get Notion Free
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav className='border border-b-2'>
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

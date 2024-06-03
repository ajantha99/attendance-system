import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Button } from '@mui/material';
import { Home, AccountCircle, Settings, ExitToApp } from '@mui/icons-material';

const drawerWidth = 240;

const Dashboard = () => {
    //Store the JSON object into user variable
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.token) {
            // Not authenticated, redirect to login
            navigate('/');
        }
    }, [user, navigate]);

    //Handle the logout function
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div style={{ display: 'flex' }}>

            <AppBar position="fixed" style={{ zIndex: 1201 }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={handleLogout} style={{ textTransform: 'none' }}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                style={{ width: drawerWidth, flexShrink: 0 }}
                PaperProps={{ style: { width: drawerWidth } }}
            >
                <Toolbar />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>

            <Container style={{ marginTop: 100, marginLeft: drawerWidth }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to the Dashboard {user.username}
                </Typography>
            </Container>

        </div>
    );
}

export default Dashboard;

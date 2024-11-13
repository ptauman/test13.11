import React from 'react'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@mui/material';



export const NavBarComponent : React.FC = () => {
    return (
        <>
         <AppBar position="sticky">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/register">Reqgister</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/options">Options</Button>
            </Toolbar>
        </AppBar>
        </>
    )
    
}
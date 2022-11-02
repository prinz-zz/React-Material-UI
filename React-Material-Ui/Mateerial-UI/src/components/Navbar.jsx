import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'    
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width:'40%',
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    cursor: 'pointer',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
}))


export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography varient='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Material UI</Typography>
                <EmojiNatureIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder="Search"/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error"><MailIcon /></Badge>
                    <Badge badgeContent={4} color="error"><NotificationsIcon /></Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=200' alt=""
                        onClick={(e)=> setOpen(true)} />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=200' alt=""
                    onClick={(e)=> setOpen(true)} />
                    <Typography varient='span'>Adam</Typography>
                </UserBox>

                        <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={(e)=> setOpen(false)}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>

            </StyledToolbar>
        </AppBar>
    )
}
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';

export default function Sidebar({mode, setMode}) {
    return(
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketpalce" />
            </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            </ListItem>  
                <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
                </ListItem>     
                <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <NightlightIcon/>
              </ListItemIcon>
                <Switch onChange={ e => setMode (mode === "light" ? "dark" : "light") } />
            </ListItemButton>
                </ListItem>    
        </List>      
        </Box>

        </Box>
    )
} 
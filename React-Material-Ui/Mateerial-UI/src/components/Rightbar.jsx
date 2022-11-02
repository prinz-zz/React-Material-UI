import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Rightbar() {
    return (
        <Box flex='2' p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}><Typography variant="h6" fontWeight={100} >Online Friends</Typography>
        <AvatarGroup max={5}>
            <Avatar alt="Vivian Richard" src="https://picsum.photos/200/300?random=1"/>
            <Avatar alt="Richard Keaton" src="https://picsum.photos/200/300?random=2" />
            <Avatar alt="JFK" src="https://picsum.photos/200/300?random=3" />
            <Avatar alt="Teddy" src="https://picsum.photos/200/300?random=4" />
            <Avatar alt="FDR" src="https://picsum.photos/200/300?random=5" />
            <Avatar alt="Michael" src="https://picsum.photos/200/300?random=6" />
            <Avatar alt="Karl" src="https://picsum.photos/200/300?random=7" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5} >
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300?random=8" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://picsum.photos/200/300?random=9" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300?random=10" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
            
        </Box></Box>
    )
}
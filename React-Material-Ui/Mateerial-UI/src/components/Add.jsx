import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Box, style } from "@mui/system";
import { useState } from 'react';
import styled from "@emotion/styled";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const MyModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
const Userbox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: 10,
})

export default function Add() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={ e => setOpen(true)}
                title="Delete"
                sx={{
                    position: 'fixed',
                    bottom: 20, left: { xs: 'Calc(50% - 25px)', md: 30 }
                }}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
            </Tooltip>

            <MyModal
                open={open}
                onClose={ e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box width={400} height={400} bgcolor={'background.default'} color={'text.primary'} padding={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
                    <Userbox>
                        <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300?random=12" />
                        <Typography fontWeight={500} variant='span'>Adam Smith</Typography>
                    </Userbox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's up"
                        variant="standard"
                        />
                    <Stack direction={'row'} gap={1} mt={1} mb={2}>
                        <EmojiEmotionsIcon color="primary"/>
                        <ImageIcon color="secondary"/>
                        <VideoCameraBackIcon color='success'/>
                        <PersonAddIcon color='error'/>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                    <Button sx={{ width: '100px' }}><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>
                </MyModal>


        </>
    )
}
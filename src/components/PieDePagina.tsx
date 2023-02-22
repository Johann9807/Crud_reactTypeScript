import React from 'react';
import { Grid, Typography, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import { styled } from '@mui/material/styles';

const StyledBottomNavigation = styled(BottomNavigation)({
    display: 'flex',
    padding: '0px 300px 0px 0px',
    background: '#24303c',
    '& .MuiBottomNavigationAction-root': {
        minWidth: 0,
        color: '#fff',
        '& .MuiBottomNavigationAction-iconOnly': {
            paddingTop: 0,
        },
        '& .MuiSvgIcon-root': {
            fontSize: '3.8rem',
        },
        '&:hover': {
            color: '#1976d2',
        },
        '&.Mui-selected': {
            color: '#b7e9ff',
        },
    },
});

const PieDePagina = () => {
    return (
        <Box sx={{
            mt: 13,
            backgroundColor: '#24303c',
            padding: "0px",
        }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Typography variant="h4" component="h2" sx={{
                            flexGrow: 1,
                            color: '#ffff',
                            padding: '10px',
                            margin: '40px 120px 10px 90px',
                            fontFamily: 'initial',
                            background: '#000000',
                            width: '10px',
                            border: '14px double #ffff',
                        }}>
                            <Typography variant="h6" sx={{
                                display: {
                                    xs: 'none',
                                    md: 'flex'
                                },
                            }} />
                            <AutoStoriesIcon sx={{
                                mr: 2,
                                fontSize: 40,
                                color: "#ffff",
                            }} />
                            Bokshop
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} sx={{ 
                    color: "#ffff",
                    }}>
                    <Typography variant="h6" gutterBottom>
                        Sobre Nosotros
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        color: "#b7e9ff",
                        padding: '10px 40px 10px 0px',
                    }} >
                        Te ofrecemos más de un millón de libros editados en España y dónde conseguirlos y comprarlos.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        color: "#b7e9ff",
                        padding: '10px 40px 60px 0px',
                    }}>
                        Buscador de libros de derecho, ciencias sociales, economía, empresa, historia y ciencias humanas.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} sx={{ color: "#ffff" }}>
                    <Typography variant="h6" gutterBottom>
                        Siguenos
                    </Typography>
                    <StyledBottomNavigation>
                        <BottomNavigationAction label="Facebook" icon={<FaFacebook />} />
                        <BottomNavigationAction label="Instagram" icon={<FaInstagram />} />
                        <BottomNavigationAction label="Twitter" icon={<FaTwitter />} />
                        <BottomNavigationAction label="Twitter" icon={<FaYoutube />} />
                    </StyledBottomNavigation>
                </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{
                color: "#ffff",
                margin: '20px 10px 0px 10px',
                padding: '20px 0px 0px 0px',
                fontSize: '16px',
            }}>
                &copy; {new Date().getFullYear()} Johann Casallas - Todos los Derechos Reservados
            </Typography>
        </Box>
    );
};

export default PieDePagina;

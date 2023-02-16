import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Box, Tabs, Tab, Button, Typography} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

interface IPropiedadesMenu{
  irAdministracionLibro:()=>void;
  irAdministracionUsuario:() => void; 
  irAdministracionPrestamo:() => void
}

export const Menu: FunctionComponent<IPropiedadesMenu> = ({irAdministracionLibro, irAdministracionUsuario, irAdministracionPrestamo}) =>{
  const [valorSeleccionado, setValorSeleccionado] = React.useState(0);

  const cambiarValorSeleccionado = (evento: React.ChangeEvent<{}>, nuevoValor: number) => {
    setValorSeleccionado(nuevoValor);
  };

  return(
    <AppBar sx={{
      height: 70, 
      background: '#24303c' 
      }}  
      position="static">
      <Toolbar>
        <AutoStoriesIcon sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          mr: 2, 
          fontSize: 40
        }} 
          />
        <Typography variant="h4" 
        sx={{fontFamily: 'initial', 
        }} 
        style={{ 
          color: '#fff' 
          }}>
          Bookshop
        </Typography>
        <Box ml="auto">
          <Tabs sx={{paddingRight: 50}} textColor="inherit" value={valorSeleccionado} onChange={cambiarValorSeleccionado}>
            <Tab label="Libros" onClick={irAdministracionLibro}/>
            <Tab label="Usuarios" onClick={irAdministracionUsuario}/>
            <Tab label="Prestamo" onClick={irAdministracionPrestamo}/>
          </Tabs>
        </Box>
        <Button sx={{background: '#1f53c5'}} variant="contained" color="primary" className="button-login">
            Login
          </Button>
      </Toolbar>
    </AppBar>
  );
}







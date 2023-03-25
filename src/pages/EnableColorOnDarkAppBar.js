
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/Home.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <Typography variant="h6"  sx={{ flexGrow: 1 }}>
        <div className={styles.navbarNavigaationPage}>
          <div>About me</div>
          <div>
            Contact me
          </div>
          <div>
            Projects
          </div>

          <div>
           Objective
          </div>

        </div>



      </Typography>
     
      {/* <Typography variant="h6" noWrap component="" sx={{ flexGrow: 1 }}>
        Contact me
      </Typography> */}

    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>

        <AppBar position="static" color="primary">
          {appBarLabel('My Portfolio')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
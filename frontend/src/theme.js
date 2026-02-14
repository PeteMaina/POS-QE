import { createTheme } from '@mui/material/styles';

// Global Material UI theme aligned with the SRS visual guidelines:
// - 2 refreshing blues
// - 2 feel‑good greens
// - A bluish‑white background
// - Big, rounded buttons and large, readable fonts

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      // Refreshing blues
      main: '#1E88E5',
      light: '#90CAF9',
      dark: '#1565C0',
    },
    secondary: {
      // Feel‑good greens
      main: '#43A047',
      light: '#A5D6A7',
      dark: '#2E7D32',
    },
    background: {
      // White that looks slightly blue
      default: '#F4F8FF',
      paper: '#FFFFFF',
    },
  },
  shape: {
    // Rounded UI and especially buttons
    borderRadius: 16,
  },
  typography: {
    // Large, readable default font sizes
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 999, // extra rounded, big buttons
          paddingInline: '1.75rem',
          paddingBlock: '0.8rem',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'medium',
        fullWidth: true,
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;


import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

// Main shell for the app using Material UI layout primitives.
// Sidebar keeps its current implementation for now, but the overall
// look & feel and background colors are driven by the global MUI theme.

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          ml: '250px',
          width: 'calc(100% - 250px)',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

import React from 'react';
import CustomAppbar from './components/CustomAppbar';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from './theme/customTheme';
import MasterRouter from './routers/MasterRouter';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomAppbar />
        <MasterRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
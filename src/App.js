import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import { lightTheme, darkTheme } from './theme';

const ThemedApp = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Blog Application
        </Typography>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <PostForm />
          <PostList />
          <ThemeSwitcher />
        </div>
      </Container>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );
};

export default App;

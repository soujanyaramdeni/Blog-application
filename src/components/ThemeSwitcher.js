import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/actions';
import { Switch, FormControlLabel, Grid } from '@mui/material';

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <Grid container justifyContent="flex-end" style={{ position: 'absolute', top: '20px', right: '20px' }}>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleThemeChange} />}
        label={darkMode ? 'Dark Mode' : 'Light Mode'}
      />
    </Grid>
  );
};

export default ThemeSwitcher;

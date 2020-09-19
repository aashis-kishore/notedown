import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import useAppState from '../../hooks/useAppState';
import { darkTheme, lightTheme } from '../../lib/theme';
import AppStyle from '../styles/AppStyle';
import BottomPane from './panes/BottomPane';
import MiddlePane from './panes/MiddlePane';
import TopPane from './panes/TopPane';

export const AppContext = createContext(true);

const App = ({ initState }) => {
  const appState = useAppState({ initState });
  return (
    <AppContext.Provider value={appState}>
      <ThemeProvider theme={appState.state.darkTheme ? darkTheme : lightTheme}>
        <div className="app">
          <AppStyle />
          <TopPane />
          <MiddlePane />
          <BottomPane />
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;

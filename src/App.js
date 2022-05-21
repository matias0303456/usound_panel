import './styles/App.css'
import Layout from "./app_components/layout/Layout";
import Router from "./Router";
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './contexts/UserContext';
import '@fontsource/montserrat'
import '@fontsource/roboto'
import ThemeSwitcher from './app_components/ThemeSwitcher';
import ThemeContext from './contexts/ThemeContext'
import { switchThemes } from './utilities/switchThemes';

function App() {

  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    switchThemes(theme)
  }, [theme])

  return (
    <div className="App">
      <UserContext.Provider value={{
        user,
        setUser
      }}
      >
        <ThemeContext.Provider value={{
          theme,
          setTheme
        }}
        >
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
          <ThemeSwitcher />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

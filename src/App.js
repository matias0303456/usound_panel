import './styles/App.css'
import Layout from "./app_components/layout/Layout";
import Router from "./Router";
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './context/userContext';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <UserContext.Provider value={{
        user,
        setUser
      }}
      >
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

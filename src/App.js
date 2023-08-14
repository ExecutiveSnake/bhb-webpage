// React Imports
import React, { 
  Fragment, 
  Component, 
  useEffect,
  useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import Home from './components/Home/Home';
import Collection from './components/Collection/Collection';
import Content from "./components/Content/Content";
import Games from './components/Games/Games';
import Team from './components/Team/Team';
import LoadingPage from './components/LoadingPage/LoadingPage';
import HomeTest from './components/Home/HomeTest'



function App() {
  // Loading page function
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to fetch data (you can replace this with actual API calls)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); // Empty dependency array to run the effect only once on mount

  if (isLoading) {
    // Render the LoadingPage when data is loading
    return <LoadingPage />;
  }

  return (
    <div>
      
      {isLoading ? (
        <LoadingPage />
      ) : (
      <div className="App">

        <div>
            <div className='page'>
            {/* <NavBarTest routeData={routeData} /> */}
              <Routes>
                <Route path="*" element={(<HomeTest />)} />
                <Route exact path="/home" element={(<HomeTest />)} />
                <Route exact path='/collection' element={(<Collection />)} />
                <Route exact path='/content' element={(<Content />)} />
                <Route exact path='/games' element={(<Games />)} />
                <Route exact path='/teams' element={(<Team />)} />
              </Routes>

            </div>
        </div>
    </div>
      )}
    </div>
  );
}

export default App;

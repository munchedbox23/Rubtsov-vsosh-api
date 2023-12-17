import MainSection from "./components/MainSection";
import React from 'react';
import {RouterSection} from "./components/RouterSection";
import { AuthRouter } from "./components/AuthRouter";

function App() {
  return (
    <div className='App'>
      <MainSection/>
      <RouterSection/>
      <AuthRouter/>
  </div>
  );
}

export default App;

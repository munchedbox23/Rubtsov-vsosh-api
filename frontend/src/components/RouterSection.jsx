import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NewsSection } from './NewsSection';
import { ArchiveSection } from './ArchiveSection';
import { Documents } from './Documents';

const RouterSection = () => {
  return(
    <Routes>
      <Route path="/archive" element={<ArchiveSection/>}/>
      <Route path="/news" element={<NewsSection/>}/>
      <Route path="/documents" element={<Documents/>}/>
    </Routes> 
  );
};



export {RouterSection};

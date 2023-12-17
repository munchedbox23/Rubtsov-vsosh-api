import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {TaskBank} from "./TaskBank";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/taskBank" element={<TaskBank />} />
    </Routes>
  );
};

export { AuthRouter };

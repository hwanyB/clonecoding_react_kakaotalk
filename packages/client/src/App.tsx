import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Friends from './pages/Friends';
import Lobby from './pages/Lobby';
import RoomDetail from './pages/RoomDetail';
import RoomList from './pages/RoomList';
import SeeMore from './pages/SeeMore';

function App() {
  return (
    <Routes>
      <Route index element={<Lobby />} /> {/* Lobby */}
      <Route path="/friends" element={<Friends />} /> {/* Friends */}
      <Route path="/rooms" element={<RoomList />} /> {/* RoomList */}
      <Route path="/rooms/:roomId" element={<RoomDetail />} /> {/* RoomDetail */}
      <Route path="/more" element={<SeeMore />} /> {/* Seemore */}
    </Routes>
  );
}

export default App;

import './App.css';
import ProfilePage from './Profile/ProfilePage';
import { Route, Router, Routes } from 'react-router-dom';
import EditProfile from './Profile/EditProfile';
import { useState } from 'react';
import DisplayProfile from './Profile/DisplayProfile';
import MyAddress from './Profile/MyAddress';
import AddAddressOption from './Profile/AddAddressOption';
import AddAddressManual from './Profile/AddAddressManual';

function App() {
   const [savedProfile, setSavedProfile] = useState(null);
  return (
    <div className="App">
      
      
        <Routes>
          <Route path='/profile' element={<ProfilePage {...savedProfile}/>}/>
          <Route path='/edit' element={<EditProfile setSavedProfile={setSavedProfile}/>}/>
          <Route path='/display' element={<DisplayProfile {...savedProfile}/>}/>
          <Route path='/address' element={<MyAddress/>}/>
          <Route path='/add-option' element={<AddAddressOption/>}/>
          <Route path='add-manual' element={<AddAddressManual/>}/>
        </Routes>
    </div>
  );
}

export default App;

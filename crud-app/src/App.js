// Team Ameya : Welcome to the main rendering/mounting file of the project.



// Team Ameya : Importing all the required component file.
import AllUsers from './Component/AllCab';
import AddUser from './Component/AddCab';
import EditUser from './Component/EditCab';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// Team Ameya : Calling the App function.
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}



// Team Ameya : Exporting the App file.
export default App;

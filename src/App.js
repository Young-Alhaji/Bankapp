import { buildQueries } from "@testing-library/react";
import { useState ,useEffect} from "react";
import { Routes,Route } from "react-router";
import { Navigate } from "react-router";
import Navbar from "./Components/Navbar";
import Funding from "./Pages/Funding";
import History from "./Pages/History";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Successful from "./Pages/Successful";
import Transfer from "./Pages/Transfer";
function App() {
  const [allUsers, setallUsers] = useState([])
  useEffect(() => {
    if(localStorage.allOfUsers){
       let localUser=JSON.parse(localStorage.allOfUsers)
       setallUsers(localUser)
    }
   }, [])
  return (
    
    <>
      <Routes>
        <Route path="/" element={<SignUp allUsers={allUsers}/>}/>
        <Route path="/profile" element={<Profile allUsers={allUsers}/>}/>
        <Route path="/signin" element={<SignIn allUsers={allUsers}/>}/>
        <Route path="/home" element={<Home allUsers={allUsers}/>}/>
        <Route path="/fundaccount" element={<Funding allUsers={allUsers}/>}/>
        <Route path="/transfer" element={<Transfer allUsers={allUsers}/>}/>
        <Route path="/signup" element={<Navigate to='/'/>}/>
        <Route path="/home/history" element={<History/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/transfer/success" element={<Successful/>}/>
      </Routes>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Profile/> */}

    </>
  );
}

export default App;

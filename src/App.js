import { Route, Routes } from 'react-router-dom';
import { About } from "./pages/about"
import { Home } from './pages/home';
import {Login} from "./pages/login"
import { WhatsNew } from './pages/whatsnew'; 
import { Discussions } from './pages/discussion';
import { MessageBoard } from './pages/MessageBoard';

// import './App.css';

export default function App(){
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/whatsnew" element={<WhatsNew />} />
    <Route path="/discussion" element={<Discussions />} />
    <Route path="/login" element={<Login />} />
    <Route path="/explore" element={<MessageBoard />} />
    </Routes>
  );
}

// export default App;
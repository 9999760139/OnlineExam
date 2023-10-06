import logo from './logo.svg';
import './App.css';
import Question1 from './components/question/Question1';
import Layout from './components/layout/Layout';
import { Suspense, useState } from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from './components/pages/landing/Landing';
import Detailpage from './components/pages/detailPage/Detailpage';
import Infopage from './components/pages/infopage/Infopage';
import LiveTest from './components/pages/livetest/LiveTest';
import LoginPage from './components/pages/LoginPage';
import MobileVarification from './components/pages/MobileVarification';
import OTP from './components/pages/OTP';

function App() {
  const [signed,setSigned] = useState(false)
  return (
    <BrowserRouter >
      <Layout signed={signed}>
        <Suspense fallback={<div className="loading_div">loading...</div>}>
          {/* <Question1 /> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/manavrachna/login" element={<LoginPage />} />
            <Route path="/manavrachna/signup" element={<LoginPage />} />
            <Route path="/manavrachna/verification" element={<MobileVarification />} />
            <Route path="/manavrachna/otp" element={<OTP />} />
            <Route path="/test/:id" element={<Detailpage />} />
            <Route path="/test/info" element={<Infopage />} />
            <Route path="/test/live" element={<LiveTest />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

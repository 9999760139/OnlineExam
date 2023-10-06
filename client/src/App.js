import logo from "./logo.svg";
import "./App.css";
import Question1 from "./components/question/Question1";
import Layout from "./components/layout/Layout";
import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./components/pages/landing/Landing";
import Detailpage from "./components/pages/detailPage/Detailpage";
import Infopage from "./components/pages/infopage/Infopage";
import LiveTest from "./components/pages/livetest/LiveTest";
import LoginPage from "./components/pages/LoginPage";
import MobileVarification from "./components/pages/MobileVarification";
import OTP from "./components/pages/OTP";
import SignupPage from "./components/pages/SignupPage";

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <BrowserRouter>
      <Layout signed={signed}>
        <Suspense fallback={<div className="loading_div">loading...</div>}>
          {/* <Question1 /> */}
          <Routes>
            {!signed && (
              <>
                <Route
                  path="/manavrachna/login"
                  element={<LoginPage setSigned={setSigned} />}
                />
                <Route path="/manavrachna/signup" element={<SignupPage />} />
                <Route
                  path="/manavrachna/verification"
                  element={<MobileVarification />}
                />
                <Route path="/manavrachna/otp" element={<OTP />} />
                <Route
                  path="*"
                  element={<Navigate to="manavrachna/login" replace />}
                />
              </>
            )}
            {signed && (
              <>
                <Route path="/" element={<Landing />} />
                <Route path="/test/:id" element={<Detailpage />} />
                <Route path="/test/info" element={<Infopage />} />
                <Route path="/test/live" element={<LiveTest />} />
              </>
            )}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

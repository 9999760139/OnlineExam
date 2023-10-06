import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import MobileVarification from "./auth/MobileVarification";
import Landing from "./pages/user/landing/Landing";
import Detailpage from "./pages/user/detailPage/Detailpage";
import Infopage from "./pages/user/infopage/Infopage";
import LiveTest from "./pages/user/livetest/LiveTest";
import OTP from "./auth/OTP";

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <BrowserRouter>
      <Layout signed={signed}>
        <Suspense fallback={<div className="loading_div">loading...</div>}>
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

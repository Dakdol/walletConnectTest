import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import React, { Components } from "react";
import Main from "./pages/main";
import WalletConnect from "./pages/walletConnect";
import Home from "./pages/home";
import Signup from "./pages/signup";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/walletConnect" element={<WalletConnect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

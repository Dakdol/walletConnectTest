import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import React, { Components } from "react";
import CustomerFirst from "./pages/customer_first";
import CustomerWalletConnect from "./pages/customer_walletConnect";
import CustomerMain from "./pages/customer_main";
import Signup from "./pages/signup";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<CustomerFirst />} />
          <Route path="/customer_first" element={<CustomerFirst />} />
          <Route
            path="/customer_walletConnect"
            element={<CustomerWalletConnect />}
          />
          <Route path="/customer_main" element={<CustomerMain />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

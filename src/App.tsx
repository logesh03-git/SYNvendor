import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import OrderFullFillMent from "./components/OrderFullFillMent/OrderFullFillMent";
import DashBoard from "./components/DashBoard/DashBoard";
import Layout from "./layout/Layout"
import { Suspense } from "react";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <Suspense fallback={<Loading />}>
                <Layout />
              </Suspense>
              }
        />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="inventory" element={<OrderFullFillMent />} />
          <Route path="orders" element={<OrderFullFillMent />} />
          <Route path="bidding" element={<OrderFullFillMent />} />
          <Route path="shipment" element={<OrderFullFillMent />} />
          <Route path="payment" element={<OrderFullFillMent/>} />
          <Route path="reports" element={<OrderFullFillMent />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

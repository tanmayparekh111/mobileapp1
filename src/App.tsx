import { BrowserRouter, Routes, Route } from "react-router-dom";

import WatchlistPage from "./pages/WatchlistPage";
import OrdersPage from "./pages/OrdersPage";
import SplashPage from "./pages/SplashPage";
import OnboardingPage from "./pages/OnboardingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import InvestmentAnalyticsPage from "./pages/InvestmentAnalyticsPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/watchlist" element={<WatchlistPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/investment-analytics" element={<InvestmentAnalyticsPage/>}/>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
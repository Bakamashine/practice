import type { ComponentType } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { MainPage } from "./views";
import "./css/main.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/layouts/main_layout";
import CommentsView from "./views/comments";
import ProfileView from "./views/profile";
import LiveView from "./views/profile/like";
import ProductShow from "./views/products/show";
import BuyPage from "./views/products/buy_page";
import EditProduct from "./views/products/edit";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import LoginView from "./views/auth/login";
import RegisterView from "./views/auth/register";
import React from "react";
import { useUser } from "./hooks/useUser";

const GuestRoute: React.FC = () => {
  const { user } = useUser();
  if (!user) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} state={{ from: window.location }} replace />;
};

const PrivateRoute: React.FC = () => {
  const { user } = useUser();
  if (user) {
    return <Outlet />;
  }
  return <Navigate to={"/"} replace />;
};

const App: React.FC = () => {
  const { user, login, logout, setUser } = useAuth();
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/comments" element={<CommentsView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/like" element={<LiveView />} />
            <Route path="/show" element={<ProductShow />} />
            <Route path="/buy_page" element={<BuyPage />} />
            <Route path="/edit_product" element={<EditProduct />} />
            <Route element={<GuestRoute />}>
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
            </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;

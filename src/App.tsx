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
import LoginView from "./views/auth/login";
import RegisterView from "./views/auth/register";
import NotFound from "./views/notFound";
import React from "react";
import { useAuthProvider } from "./hooks/useAuthProvider";

const GuestRoute: React.FC = () => {
  const { user } = useAuthProvider();
  if (!user) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

const PrivateRoute: React.FC = () => {
  const { user } = useAuthProvider();
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};

const AppContent: React.FC = () => {
  const { user, setUser } = useAuthProvider();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/comments" element={<CommentsView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/like" element={<LiveView />} />
          <Route path="/product/:id" element={<ProductShow />} />
          <Route path="/buy_page" element={<BuyPage />} />
          <Route path="/edit_product" element={<EditProduct />} />
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
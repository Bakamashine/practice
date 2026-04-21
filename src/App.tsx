import type { ComponentType } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./views";
import "./css/main.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/layouts/main_layout";
import CommentsView from "./views/comments";
import ProfileView from "./views/profile";
import LikeViewComponent from "./views/profile/like";
import ProductShow from "./views/products/show";
import BuyPage from "./views/products/buy_page";
import EditProduct from "./views/products/edit";

const MainPageComponent: ComponentType = MainPage;
const CommentsViewComponent: ComponentType = CommentsView;
const ProfileViewComponent: ComponentType = ProfileView;
const LayoutComponent: ComponentType = Layout;

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutComponent />}>
                    <Route path="/" element={<MainPageComponent />} />
                    <Route path="/comments" element={<CommentsViewComponent />} />
                    <Route path="/profile" element={<ProfileViewComponent />} />
                    <Route path="/like" element={<LikeViewComponent />} />
                    <Route path="/show" element={<ProductShow />} />
                    <Route path="/buy_page" element={<BuyPage />} />
                    <Route path="/edit_product" element={<EditProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
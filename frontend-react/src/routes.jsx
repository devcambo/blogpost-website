import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mainlayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import PostDetail from "./components/PostDetail";
import NotFoundPage from "./pages/NotFoundPage";
import AddPost from "./components/AddPost";
import UpdatePost from "./components/UpdatePost";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route index element={<HomePage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/add" element={<AddPost />} />
            <Route path = "/update/:id" element = {<UpdatePost />} />
          </Route>

          {/* Handle Page Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
export default AppRoutes;

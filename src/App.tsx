import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import AdminRoutesComp from "./components/protectedRoutes/adminRoutesComp/AdminRoutesComp";
// import UserRoutesComp from "./components/protectedRoutes/userRoutesComp/UserRoutesComp";
import IntranetPage from "./pages/intranetPage/IntranetPage";
import ArticleUpFormPage from "./pages/articleUpFormPage/ArticleUpFormPage";
import UserLoginPage from "./pages/userLoginPage/UserLoginPage";
import ElBosquePage from "./pages/elBosquePage/ElBosquePage";
import ElBosqueRoutesComp from "./components/protectedRoutes/elBosqueRoutesComp/ElBosqueRoutesComp";
import ElBosqueReglamPage from "./pages/elBosqueReglamPage/ElBosqueReglamPage";
import ElBosqueGenInfoPage from "./pages/elBosqueGenInfoPage/ElBosqueGenInfoPage";
import ElBosqueConsorcistasPage from "./pages/elBosqueConsorcistasPage/ElBosqueConsorcistasPage";
import ElBosqueAdminPage from "./pages/elBosqueAdminPage/ElBosqueAdminPage";
import ScrollToTop from "./components/scrollToTopComp/ScrollToTopComp";

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          {/* Admin Routes */}
          <Route element={<AdminRoutesComp />}>
            <Route path="/intranet" element={<IntranetPage />} />
            <Route path="/article-up-form" element={<ArticleUpFormPage />} />
          </Route>
          {/* El Bosque Routes */}
          <Route element={<ElBosqueRoutesComp />}>
            <Route path="/elbosque" element={<ElBosquePage />} />
            <Route path="/elbosquereglam" element={<ElBosqueReglamPage />} />
            <Route path="/elbosque-info-general" element={<ElBosqueGenInfoPage />} />
            <Route path="/elbosque-consorcistas" element={<ElBosqueConsorcistasPage />} />
            <Route path="/elbosque-admin" element={<ElBosqueAdminPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;


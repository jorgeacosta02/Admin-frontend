import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ContactPage from "./pages/contactPage/ContactPage"
import UserRoutesComp from "./components/protectedRoutes/userRoutesComp/UserRoutesComp"
import IntranetPage from "./pages/intranetPage/IntranetPage"
import ArticleUpFormPage from "./pages/articleUpFormPage/ArticleUpFormPage"
import UserLoginPage from "./pages/userLoginPage/UserLoginPage"
import ClientPage from "./pages/clientPage/ClientPage"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route element={<UserRoutesComp/>}>
          <Route path='/intranet' element={<IntranetPage/>}/>
          <Route path='/client' element={<ClientPage/>}/>
          <Route path='/article-up-form' element={<ArticleUpFormPage/>}/>
        </Route>
        <Route path='/login' element={<UserLoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App

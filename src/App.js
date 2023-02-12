import { Route, Routes, BrowserRouter } from "react-router-dom"
import Register from "./pages/user/register"
import Login from "./pages/user/login"
import ReadAll from "./pages/item/readAll"
import ReadSingle from "./pages/item/readSingle"
import Create from "./pages/item/create"
import Update from "./pages/item/update"
import Delete from "./pages/item/delete"
import Header from "./conponents/header"
import Footer from "./conponents/footer"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
      <Header />
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/" element={<ReadAll />} />
        <Route path="/item/:id" element={<ReadSingle />} />
        <Route path="/item/create/" element={<Create />} />
        <Route path="/item/update/:id" element={<Update />} />
        <Route path="/item/delete/:id" element={<Delete />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
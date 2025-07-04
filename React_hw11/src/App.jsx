import { Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import ArticlePage from "./pages/ArticlePage"
import Articles from "./pages/Articles"
function App() {
  return (
    <>
    <NavLink to='/' style={({ isActive })=> ({ color: isActive ? 'red' : 'black' })}>
        To Home Page
    </NavLink>
    <NavLink to='articles' style={({ isActive })=> ({ color: isActive ? 'red' : 'black' })}>
        To Artickles Page
    </NavLink>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="articles" element={<Articles/>} />
      <Route path="articles/:id" element={<ArticlePage/>} />
    </Routes>
    </>
  )
}

export default App

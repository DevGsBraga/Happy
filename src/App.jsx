import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Content from "./pages/Content"
import Content2 from "./pages/Content2"
import Content3 from "./pages/Content3"
import Content4 from "./pages/Content4"
import Content5 from "./pages/Content5"
import Home from "./pages/Home"




const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Content" element={<Content />}  />
        <Route path="/content2" element={<Content2 />}  />
        <Route path="/content3" element={<Content3 />}  />
        <Route path="/content4" element={<Content4 />}  />
        <Route path="/content5" element={<Content5 />}  />
      </Routes>
    </Router>
    </>
  )
}

export default App

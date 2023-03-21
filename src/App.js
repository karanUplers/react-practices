import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blogs } from "./components/Blogs";
import { BlogSingle } from "./components/BlogSingle";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

function App() {
   return (
      <div className="App h-screen bg-sky-50 p-20">
         <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full">
            <BrowserRouter>
               <NavBar/>
               <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/blogs" element={<Blogs/>}></Route>
                  <Route path="/blogs/:id" element={<BlogSingle/>}></Route>
               </Routes>
            </BrowserRouter>
         </div>
      </div>
   );
}

export default App;

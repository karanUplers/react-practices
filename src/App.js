import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blogs } from "./components/Blogs";
import { BlogSingle } from "./components/BlogSingle";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Users } from "./components/Users";
import { UserSingle } from "./components/UserSingle";

function App() {
   return (
      <div className="App h-screen bg-sky-50 p-20">
         <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full">
            <BrowserRouter>
               <NavBar/>
               <Routes>
                  <Route exact path="/" element={<Home/>}></Route>

                  <Route path="/users" element={<Users/>}></Route>
                  <Route path="/users/:id" element={<UserSingle/>}></Route>

                  <Route exact path="/blogs" element={<Blogs/>}></Route>
                  <Route exact path="/blogs/:id" element={<BlogSingle/>}></Route>
               </Routes>
            </BrowserRouter>
         </div>
      </div>
   );
}

export default App;

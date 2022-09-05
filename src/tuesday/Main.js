import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import About from "./About";
import Contact, {AlwaysAsk} from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import Students from "./Students";

function Main (){
    return(
        <div>
            <h1>Main Component</h1>
            <Link to="/home">Home</Link> ||
            <Link to="/contact">Contact</Link> ||
            <Link to="/ask">Ask</Link> ||
            <Link to="/about">ABout</Link> ||
            {/* <Link to="/students/1/ha">John</Link>  */}

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/ask" element={<AlwaysAsk/>}/>
                {/* <Route path="/students/:id" element={<Students/>}/> */}
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default Main;


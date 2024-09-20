import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SurveyProvider } from "./context/surveyContext";
import MainRoute from "./screen/route/mainRoute/mainRoute";
import Home from "./screen/page/main/home/home";
import About from "./screen/page/main/about/about";
import WhatWeDo from "./screen/page/main/whatWeDo/whatWeDo";
import Contact from "./screen/page/main/contact/contact";
import OngoingTrials from "./screen/page/main/ongoingTrials/ongoingTrials";
import Login from "./screen/page/auth/login/login";
import AuthRoute from "./screen/route/authRoute/authRoute";
import Register from "./screen/page/auth/register/register";
import Auth from "./screen/page/auth/auth/auth";
function App() {
  return (
    <div className="App">
      <SurveyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainRoute/>}>
             <Route path="/" element={<Home/>} />
             <Route path="about"element={<About/>} />
             <Route path="whatWeDo" element={<WhatWeDo/>} />
             <Route path="contact" element={<Contact/>} />
             <Route path="ongoingTrials" element={<OngoingTrials/>}/>
            </Route>
            <Route path="/" element={<AuthRoute/>}>
        
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/auth" element={<Auth/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </SurveyProvider>
    </div>
  );
}

export default App;

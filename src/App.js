import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Category from "./screen/page/main/home/innerScreen/category/category";
import HomeRoute from "./screen/route/homeRoute/homeRoute";
import Study from "./screen/page/main/home/innerScreen/result/study/study"; 
import Result from "./screen/page/main/home/innerScreen/result/result";

function App() {
  return (
    <div className="">
      <SurveyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainRoute />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="whatWeDo" element={<WhatWeDo />} />
              <Route path="contact" element={<Contact />} />
              <Route path="ongoingTrials" element={<OngoingTrials />} />
            </Route>

            <Route path="/category" element={<HomeRoute />}>
              <Route index element={<Category />} />
              <Route path="result" element={<Result />}>
                <Route path="study" element={<Study />} />
              </Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth" element={<AuthRoute />}>
              <Route index element={<Auth />} /> 
            </Route>
            {/* Other potential routes can go here */}
          </Routes>
        </Router>
      </SurveyProvider>
    </div>
  );
}

export default App;

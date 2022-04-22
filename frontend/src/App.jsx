import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PopularCocktail from "@pages/PopularCocktail";
import Random from "@pages/Random";
import Home from "@pages/Home";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Card from "@components/Card";
import NavBar from "@components/NavBar";
import ShowCocktail from "@components/ShowCocktail";
import getCocktailByName from "@services/getCocktail";
import "@assets/navbar.css";

function App() {
  getCocktailByName("mojito", 3, 1);
  return (
    <div>
      <Banner />
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/popular-cocktail" element={<PopularCocktail />} />
            <Route path="/show-cocktail" element={<ShowCocktail />} />
          </Routes>
        </div>
      </Router>
      <Card />
      <Footer />
    </div>
  );
}

export default App;

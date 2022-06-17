import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Deployled from "./components/Deployed/Deployled";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return <div>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={ <Hero /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="/portfolio" element={ <Product /> } />
				<Route path="/contact" element={ <Product /> } />
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;

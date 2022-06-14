import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Deployled from "./components/Deployed/Deployled";

const App = () => {
	return <div>
		<Header />
		<Hero />
		<About />
		<Product />
		<Deployled />
	</div>;
};

export default App;

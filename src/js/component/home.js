import React from "react";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />

			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
					<Card text=" is simply dummy text of the printing and typesetting industry. " />
					<Card text="it to make a type specimen book. It has survived not only five centuries, but" />
					<Card text="It is a long established fact that a reader will be distracted by the readable " />
				</div>
			</div>
			<Footer />
		</div>
	);
}

import React from "react";
import { Button } from "bootstrap";
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a
					className="navbar-brand"
					href="#"
					style={{
						color: "white"
					}}>
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a
							className="nav-link active"
							aria-current="page"
							href="#"
							style={{
								color: "white"
							}}>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{
								color: "white"
							}}>
							About
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{
								color: "white"
							}}>
							Services
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{
								color: "white"
							}}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

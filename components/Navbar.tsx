"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@/styles/header.css";

const Header: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        if (showNavbar) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [showNavbar]);

    const closeNavbar = () => {
        setShowNavbar(false);
    };

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <header className="header">
            <Navbar expand="lg" expanded={showNavbar}>
                <Container>
                    <Navbar.Brand href="/">cemb<span className="blue">o</span><span className="yellow">o</span></Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand className="nav-collapse-logo" href="/">cemb<span className="blue">o</span><span className="yellow">o</span></Navbar.Brand>
                        <button onClick={closeNavbar} className="close-button">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <Nav className="my-2 my-lg-0">
                            <Nav.Link className="mobile-links" href="/">
                                <span className="image">
                                    <Image src={asset.homeIcon} className="header-img white-icon" alt="Header Links Icons" width="24" height="24" />
                                    <Image src={asset.homeIconBlue} className="header-img blue-icon" alt="Header Links Icons" width="24" height="24" />
                                </span>
                                <span className="text">Home</span>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <span className="image">
                                    <Image src={asset.dashboardIcon} className="header-img white-icon" alt="Header Links Icons" width="24" height="24" />
                                    <Image src={asset.dashboardIconBlue} className="header-img blue-icon" alt="Header Links Icons" width="24" height="24" />
                                </span>
                                <span className="text">Apps</span>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <span className="image">
                                    <Image src={asset.productsIcon} className="header-img white-icon" alt="Header Links Icons" width="24" height="24" />
                                    <Image src={asset.productsIconBlue} className="header-img blue-icon" alt="Header Links Icons" width="24" height="24" />
                                </span>
                                <span className="text">Movies</span>
                            </Nav.Link>
                            <Nav.Link className="mobile-links" href="/">
                                <span className="image">
                                    <Image src={asset.tvIcon} className="header-img white-icon" alt="Header Links Icons" width="24" height="24" />
                                    <Image src={asset.tvIconBlue} className="header-img blue-icon" alt="Header Links Icons" width="24" height="24" />
                                </span>
                                <span className="text">TV</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="nav-div d-flex align-items-center">
                        <div className="login-buttons">
                            <ul>
                                <li className="search-icon">
                                    <Link href="/" className="btn white-button round">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="btn white-button create-button">
                                        <span className="text">Create Account</span>
                                        <span className="image"><FontAwesomeIcon icon={faRightToBracket} /></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="btn white-button round">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleNavbar} />
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
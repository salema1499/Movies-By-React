import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../Assets/logo.png";
import "./Navs.css";
export const Navs = () => {
  return (
    <div  >
      <Navbar bg="light" expand="lg"  >
        <Container fluid >
          <Navbar.Brand className="home" href="#home">
            <img src={logo} className="logo" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div class="dropdown">
                <span>Movies</span>
                <div class="dropdown-content">
                  <p>Popular</p>
                  <p>Now Playing</p>
                  <p>Up Coming</p>
                  <p>Top Rated</p>
                </div>
                
              </div>
              <div class="dropdown">
                <span>TV Shows</span>
                <div class="dropdown-content">
                  <p>Popular</p>
                  <p>Airing Today</p>
                  <p>On TV</p>
                  <p>Top Rated</p>
                </div>
                
              </div>
              <div class="dropdown">
                <span>People</span>
                <div class="dropdown-content">
                  <p>Popular People</p>
                  
                </div>
                
              </div>
              <div class="dropdown">
                <span>More</span>
                <div class="dropdown-content">
                  <p>Discussions</p>
                  <p>Leaderboard</p>
                  <p>Support</p>
                  <p>API</p>
                </div>
                
              </div>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

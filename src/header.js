import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Logo from "./assets/Logo.png";
import Patch from "./assets/Path3.png";

function header() {
  return (
    <div>
      <div className="wrapper">
        <div className="bg_img">
          <div className="navigationBar">
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="#">
                  <img src={Logo} width={100} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1" className="navlink active mr-3">
                      HOME
                    </Nav.Link>
                    <Nav.Link
                      href="#action2"
                      className="navlink text-white mr-3"
                    >
                      HISTORY
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2 searchcls"
                      aria-label="Search"
                    />
                    <Button variant="primary clsButtonConnect">CONNECT</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

          <div className="content_wrapper">
            <div className="winner_cls px-4 pt-2">
              <h1>1000 ENTRIES</h1>
              <p>1WINNER</p>
            </div>

            <div className="availblecls">
              <div class="slots">
                <p>AVAILABLE SLOTS</p>
                <h3>9525</h3>
              </div>

              <div class="slots ml-4em">
                <h2>₹10,00,000</h2>
                <h4>(10040 MATIC)</h4>
              </div>

              <div class="slots">
                <p>POOL ID</p>
                <h3>#254FJDKF4225</h3>
              </div>
            </div>

            <div className="patchNow my-5 p-3">
              <div class="cont_cls">
                <p className="text-center">ENTER</p>
                <div className="spacecls">
                  <p>10MATIC</p>
                  <p>(₹1238)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;

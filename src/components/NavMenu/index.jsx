import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import { Form, FormControl, Button, Container } from "react-bootstrap";

export default function NavMenu() {
  return (
    <>
      <Container>
        <div className={s.nav_menu}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>

          <Form inline style={{ marginLeft: "auto", display: "flex" }}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ marginRight: "20px" }}
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

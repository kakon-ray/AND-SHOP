import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "../LoginRegister.css";
import PageBanner from "../../PageBanner/PageBanner";

export default function Login() {
  return (
    <div>
      <PageBanner page="Login" />
      <div className="form-responsive mx-auto">
        <SocialLogin />
        <Card className="mx-auto rounded-0">
          <h4 className="text-center pb-0 pt-3">Login</h4>
          <Card.Body className="p-5 py-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  className="rounded-0"
                />
              </Form.Group>

              <Button
                className="btn btn-warning w-100"
                style={{ backgroundColor: "#f79837", color: "#fff" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/registation" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer", color: "#f79837" }}>Login</span>
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

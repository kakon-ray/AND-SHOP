import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const Review = () => {
  return (
    <div>
      <Card className="p-2 m-4">
        <h2 className="py-3 text-secondary">Please Add a Positive Review</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="Enter Review Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <textarea
              name="description"
              className="w-100 form-control rounded-0"
              rows="9"
            ></textarea>
          </Form.Group>

          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Review;

import { React, useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ItemDetails from "../itemDetails/ItemDetails";

// Handles how items are rendered.
export default function ItemsView({ items }) {
  // function handleOpen() {
  //   setItemDetails(itemDetails);
  // }

  return (
    <div className="card-container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {items.map((item) => {
          return (
            <Col key={item._id}>
              <Card className="h-100">
                {item.img && (
                  <Card.Img
                    variant="top"
                    src={item.img ? item.img : ""}
                    alt={item.name}
                  />
                )}
                <Card.Body>
                  {item.img ? "" : <Card.Title>No Image Available</Card.Title>}
                  <Card.Text className="text-muted">
                    Name: {item.name}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="text-muted">
                    Description: {item.description}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Duplicates: {item.duplicates}
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
        {/* {(activeItem || error) && (
        <Detail
          objectDetail={activeItem}
          show={show}
          handleClose={handleClose}
          error={error}
        />
      )} */}
      </Row>
    </div>
  );
}

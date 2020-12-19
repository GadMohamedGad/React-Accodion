import React, { useState } from "react";
import {
  Container,
  Accordion,
  Card,
  Row,
  Col,
  Button
} from "react-bootstrap";
import AccodionHead from "../accodion-head/accodion-head";

export default function AccodionComponent() {
  // Logic for collapseAll and expandAll 
  // When i give all accordion the same eventKey and defaultActiveKey  (collapseAllState default value 0 )
  // Then by default all accordion will be expanded 
  // When click collapseAll change (setcollapseAllState) to be 1 then all accordion will be collapsed 
  // But this cause problem when i tried to collapse or expand one single accordion by click on collapse header 
  const [collapseAllState, setcollapseAllState] = useState("0");

  const collapseAll = () => setcollapseAllState("1");
  const expandAll = () => setcollapseAllState("0");

  return (
    <div>
      <Container fluid>
        <Row>
            <Col md="12">
            <div className="head" >
            <Row>
              <Col>
                <div className="p-3">
                  <Button onClick={collapseAll} className="m-2">coolapse all</Button>
                  <Button onClick={expandAll}>expand all</Button>
                </div>
              </Col>
            </Row>
          </div>
            </Col>

            <Col md="12">
            <div className="acc">
            <Accordion defaultActiveKey="0">
              <Card>
                <AccodionHead name="accordion 1" eventKey="0" />
                <Accordion.Collapse eventKey="0">
                   <Card.Body>
                       <p>
                           Lorem ipsum dolor 
                       </p>
                    </Card.Body> 
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="acc">
            <Accordion defaultActiveKey="1">
              <Card>
                <AccodionHead name="accordion 2" eventKey="1" />
                <Accordion.Collapse eventKey="1">
                   <Card.Body>
                       <p>
                           Lorem ipsum 
                       </p>
                    </Card.Body> 
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="acc">
            <Accordion defaultActiveKey="2">
              <Card>
                <AccodionHead name="accordion 3" eventKey="2" />
                <Accordion.Collapse eventKey="2">
                   <Card.Body>
                       <p>
                           Lorem ipsum 
                       </p>
                    </Card.Body> 
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="acc">
            <Accordion defaultActiveKey="3">
              <Card>
                <AccodionHead name="accordion 4" eventKey="3" />
                <Accordion.Collapse eventKey="3">
                   <Card.Body>
                       <p>
                           Lorem ipsum 
                       </p>
                    </Card.Body> 
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
            </Col>
          
          
        </Row>
      </Container>
    </div>
  );
}

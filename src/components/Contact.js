import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const marginBottom = {
    marginBottom: '8rem'
};

const Contact=()=>{
  
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const encode= (data)=>{
        return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
    };

    const handleSubmit=(event)=> {
        event.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", firstName, lastName, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      };

    return(
        <Container style={marginBottom}>
            <Container >
                <h1>Contact Me</h1>
                <p></p>
            </Container>

            <Form netlify name='contact' onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                name='firstName' 
                                onChange={(event)=>setFirstName(event.target.value)}
                                type="text" 
                                placeholder="Fernando" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                            name='lastName' 
                            onChange={(event)=>setLastName(event.target.value)}
                            type="text" 
                            placeholder="Zaldivar" />
                        </Form.Group>
                    </Col>
                </Row>

                
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    name='email' 
                    onChange={(event)=>setEmail(event.target.value)}
                    type="email" 
                    placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                    name='message'
                    nChange={(event)=>setMessage(event.target.value)} as="textarea" 
                    rows={3} />
                </Form.Group>

                <Form.Group className="mb-3 float-end" controlId="formBasicCheckbox">
                    <Button type="submit" onSubmit={handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>
  
            </Form>   
            
        </Container>
    )
}

export default Contact;
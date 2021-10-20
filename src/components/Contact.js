import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button } from 'react-bootstrap';


function Contact() {
  const [state, handleSubmit] = useForm("xknkabjy");
  if (state.succeeded) {
      return <p>Thank you for your message!</p>;
  }

  return (

    <Form onSubmit={handleSubmit} className="container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label htmlFor="input" style={{ marginTop: '20px' }}>First and Last Name</Form.Label>
        <Form.Control type="input" placeholder="Full Name" id="fullname" name="fullname" />
            <ValidationError prefix="Fullname" field="fullname" errors={state.errors} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label htmlFor="email" >Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" id="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Let me know if you want to work with me.</Form.Label>
        <Form.Control as="textarea" rows={3} id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Form.Group>
        <Button className="btn" type="submit" disabled={state.submitting}>Send Message</Button>
    </Form>
  );
}

export default Contact;
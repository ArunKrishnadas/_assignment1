import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './employeeform.css'; // Import the CSS file


export default function EmployeeForm({ setEmployees }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: id,
      name: name,
      email: email
    };
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(newEmployee),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setEmployees(prevEmployees => [...prevEmployees, data]);
        setId('');
        setName('');
        setEmail('');
      })
      .catch(error => console.log(error));
  }

  return (
    // <div>
    //   <div className="container my-4">
    //     <h1>Employee Form</h1>
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group controlId="formId">
    //         <Form.Label>ID</Form.Label>
    //         <Form.Control type="text" placeholder="Enter ID" value={id} onChange={e => setId(e.target.value)} />
    //       </Form.Group>

    //       <Form.Group controlId="formName">
    //         <Form.Label>Name</Form.Label>
    //         <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
    //       </Form.Group>

    //       <Form.Group controlId="formEmail">
    //         <Form.Label>Email</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
    //       </Form.Group>

    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //   </div>
    // </div>
    <div>
  <div className="container my-4">
    <h1 className="form-heading">Employee Form</h1>
    <Form onSubmit={handleSubmit} className="employee-form">
      <Form.Group controlId="formId">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" value={id} onChange={e => setId(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-button">
        Submit
      </Button>
    </Form>
  </div>
</div>

  );
}

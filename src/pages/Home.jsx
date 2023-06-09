 import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Table, Form } from 'react-bootstrap';

import './employeeform.css';

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.log(error));
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home" style={{ color: '#339FFF' }}><b>Employee List</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <Form.Control
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container my-4">
        <div className="color">
          <Table striped bordered hover className="custom-table">
            <thead>
              <tr>
                <th style={{ color: '#339FFF' }}>ID</th>
                <th style={{ color: '#339FFF' }}>Name</th>
                <th style={{ color: '#339FFF' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(employee => (
                 <tr key={employee.id} style={{ cursor: 'pointer' }} className="hover-effect">
                  <td style={{ color: 'white' }}>{employee.id}</td>
                  <td style={{ color: 'white' }}>{employee.name}</td>
                  <td style={{ color: 'white' }}>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
     
    </div>
  );
}
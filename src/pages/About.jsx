import React from 'react'

export default function About() {
  return (
    <div className='color'>
        <h1 className='text-center'>About Page</h1>
        <div className='container'>
        <p>The Employee App is a web application developed using React. It provides a dashboard for managing employee data
             and a form for adding new employees. The app includes a navigation bar with links to the Home page
              (Employee Dashboard)the Employee Form and an About page.</p>
            <b>  Home Page / Employee Dashboard:</b>
              <ul>
<li>The Home page or Employee Dashboard displays a list of employee data obtained from an external API (https://jsonplaceholder.typicode.com/users).</li>
<li>The employee data is presented in a tabular, card, or list view, showing the fields: ID, Name, and Email.</li>
<li>The dashboard fetches the employee data from the API using the axios library and stores it in the component's state.</li>
<li>The data is then rendered in the chosen view format (tabular, card, or list) using React components.</li>
</ul>

<b>Employee Form:</b>
<ul> 
<li>The Employee Form allows users to add new employee information to the system.</li>
<li>It includes fields for Name, Designation, Location, and Salary.</li>
<li>The form data is managed using React's state management, with each field having its own state variable.</li>
<li>When the user submits the form, the data is processed and can be handled according to the specific requirements of your application.</li>
</ul>              
        
        </div>
    </div>
  )
}

import React, { useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {studentContext} from '../App';

function AllStudents(props) {
  let context = useContext(studentContext);
  console.log("Context Data", context);
  let handleDelete=(i)=>{
  let newArray=[...context.students];
  newArray.splice(i,1);
  context.setStudents(newArray);
  //let arr =  props.data.students;
  //arr.splice(i,1);
  //props.data.setStudents(arr); //this is an issue component not rendereing
  }
let navigate=useNavigate();
  return <>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Batch</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {
  context.students.map((e,i)=> {
    return <tr key={i}>
    <td>{i + 1}</td>
    <td>{e.name}</td>
    <td>{e.email}</td>
    <td>{e.mobile}</td>
    <td>{e.batch}</td>
    <td>{e.status ?<p style={{color:"green"}}>Active</p>:<p style={{color:"red"}}>InActive</p>}</td>
    <td><Button variant="primary" onClick={() => navigate('/editstudents/' + i)}>Edit</Button>
    &nbsp;
    &nbsp;
    &nbsp;
    <Button variant="danger" onClick={() => handleDelete(i)}>Delete</Button>
    </td>
  </tr>
  })
}
  </tbody>
</Table>
  </>
}

export default AllStudents
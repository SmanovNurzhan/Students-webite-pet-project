import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
// import { type } from '@testing-library/user-event/dist/type';

export default function Student() {
    const[name,setName]=React.useState('');
    const[lastName,setLastName]=React.useState('');
    const[age,setAge]=React.useState('');
    const[address,setAddress]=React.useState('');
    const[student,setStudent]=React.useState([]);

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,lastName,age,address}
        console.log(student)
        fetch("http://localhost:8081/student/addStudent",
        {method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("new student added");
    })
}
React.useEffect(()=>{
    fetch("http://localhost:8081/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudent(result)
    }
)
},[])

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 }, //, width: '25ch'
      }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{color:"red"}}>Add Student</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      /><br/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined"
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      /><br/>
      <TextField id="outlined-basic" label="Age" variant="outlined"
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      /><br/>
      <TextField id="outlined-basic" label="Address" variant="outlined"
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      /><br/>
      <Button variant="contained" onClick={handleClick}>Sumbit</Button><br/><br/><br/>
      <h1>Students lists</h1>
      {student.map(student=>(
      <Box elevation={6} style={{margin:"10px",padding:"15px"}} key={student.id}
      component="data"
      sx={{
        '& > :not(style)': {m:1}, width: '25ch'
      }}
      noValidate
      autoComplete="off"
      >
        <h5>Name: {student.name}<br/></h5>
        <h5>Last Name: {student.lastName}</h5>
        <h5>Age: {student.age}</h5>
        <h5>Address: {student.address}</h5>
      </Box>
      ))
}
    </Box>
    
  );

}

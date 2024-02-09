// import React, { useState } from 'react'
// import './empdetails.css'
// const EmpForm = (props) => {
//   const[newEmpobj,setNewEmpobj]=useState({})

//   function updateData(e)
//   {
// let temp= JSON.parse(JSON.stringify(newEmpobj))
// temp[e.target.name]= e.target.value
// setNewEmpobj(temp)

//   }

//   function onsubmit()
//   {

//     if(newEmpobj.name!==undefined && newEmpobj.salary!==undefined && newEmpobj.dept!==undefined)
//     {
//       props.addemp(newEmpobj)
//     }

//   }

//   return (
//     <div className='empform'>

//         <label>
//           Name:
//           <input
//             id="1"
//             type="text"
//             name="name"
//             onChange={updateData}  
//             required
//           />

//         </label>
//         <br />
//         <label>
//           Salary:
//           <input
//           id="2"
//             type="number"
//             name="salary"
//             onChange={updateData}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Department:
//           <select
//           id="4"
//             name="dept"
//             onChange={updateData}
//           >

//             <option value="IT">IT</option>
//             <option value="HR">HR</option>
//             <option value="Finance">Finance</option>

//           </select>
//         </label>
//         <br />
//         <button onClick={onsubmit}>Submit</button>

//     </div>
//   )
// }

// export default EmpForm



// M2 : Using TextField instead of Add employee Form .... using Material UI from ChatGPT
/*
import React, { useState } from 'react';
import './empdetails.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const EmpForm = (props) => {
  const [newEmpobj, setNewEmpobj] = useState({});

  const updateData = (e) => {
    let temp = { ...newEmpobj };
    temp[e.target.name] = e.target.value;
    setNewEmpobj(temp);
  };

  const onSubmit = () => {
    if (newEmpobj.name !== undefined && newEmpobj.salary !== undefined && newEmpobj.dept !== undefined) {
      props.addemp(newEmpobj);
    }
  };

  return (
    <Box className="empform">
      <TextField
        id="1"
        label="Name"
        type="text"
        name="name"
        onChange={updateData}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="2"
        label="Salary"
        type="number"
        name="salary"
        onChange={updateData}
        required
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="4">Department</InputLabel>
        <Select
          id="4"
          name="dept"
          onChange={updateData}
        >
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default EmpForm;
*/

// Using Material UI

import React, { useState } from 'react'
import { Stack, MenuItem, Select, FormControl, InputLabel, TextField, Button, Box } from '@mui/material'


const EmpForm = (props) => {
  const [newEmpobj, setNewEmpobj] = useState({})

  function updateData(e) {
    let temp = JSON.parse(JSON.stringify(newEmpobj))
    temp[e.target.name] = e.target.value
    setNewEmpobj(temp)

  }

  function onsubmit() {

    if (newEmpobj.name !== undefined && newEmpobj.salary !== undefined && newEmpobj.dept !== undefined) {
      props.addemp(newEmpobj)
    }

  }

  return (
    <Box>
      <Stack sx={{ py: 10, px: 10 }} spacing={2}>
        <TextField
          label="Name"
          id="1"
          type="text"
          name="name"
          onChange={updateData}
          required
        />

        <TextField

          label="Salary"
          id="2"
          type="number"
          name="salary"
          onChange={updateData}
          required
        />

        <FormControl fullWidth>
          <InputLabel id="Label">Dept</InputLabel>
          <Select
            labelId="Label"
            id="4"
            name="dept"
            onChange={updateData}
          >
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
          </Select>
        </FormControl>


        <Button variant="contained" color="primary" onClick={onsubmit}>
          Submit
        </Button>

      </Stack>
    </Box>

  )
}

export default EmpForm
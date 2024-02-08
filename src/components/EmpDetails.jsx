// import React from 'react'
// import './employee.css'
// import EmpForm from './EmpForm'
// import EditForm from './EditForm'



// const EmpDetails = (props) => {
//   function display(){

//   if(props.selectedCentre==="1") 
//   {

//     return(<EmpForm updateData={props.updateData} addemp={props.addemp} empobj={props.empobj}/>)

//   }
//   else if(props.selectedCentre==="2")
//   {
//     return(<EditForm selectedEmp={props.selectedEmp} editEmployee={props.editEmployee}/>)
//   }
//   else if(props.selectedCentre==="3") {
//     return(<EmpTable selectedEmp={props.selectedEmp} displayCentre={props.displayCentre} delEmp={props.delEmp}/>)
//   }
//   else{
//     return(<h2 style={{color:"green"}}>Select employee to see details</h2>)
//   }
// } 
//   return (
//     <div className='empdetails'>
//     {
//        display()
//     }

//     </div> 
//   )
// }
// const EmpTable = (props) => {

//   return(
//     <>
//     <table>
//     <tbody>
//       <tr>
//         <td>Name:</td>
//         <td>{props.selectedEmp.name}</td>
//       </tr>
//       <tr>
//         <td>Salary:</td>
//         <td>{props.selectedEmp.salary}</td>
//       </tr>
//       <tr>
//         <td>Department:</td>
//         <td>{props.selectedEmp.dept}</td>
//       </tr>
//     </tbody>
//   </table>

//   <div className='buttons'>
//   <button id="2" className='edit' onClick={props.displayCentre}>edit</button>
//   <button id="3" className='delete' onClick={props.delEmp}>delete</button>
//   </div>
//   </>
//   )
// }

// export default EmpDetails


// Using Material UI

import React from 'react'
import './employee.css'
import EmpForm from './EmpForm'
import EditForm from './EditForm'
import { Stack, Table, TableBody, TableRow, TableCell, Button, Box, Grid } from '@mui/material'

const EmpDetails = (props) => {
  function display() {

    if (props.selectedCentre === "1") {

      return (<EmpForm updateData={props.updateData} addemp={props.addemp} empobj={props.empobj} />)

    }
    else if (props.selectedCentre === "2") {
      return (<EditForm selectedEmp={props.selectedEmp} editEmployee={props.editEmployee} />)
    }
    else if (props.selectedCentre === "3") {
      return (<EmpTable selectedEmp={props.selectedEmp} displayCentre={props.displayCentre} delEmp={props.delEmp} />)
    }
    else {
      return (<h2 style={{ color: "green" }}>Select employee to see details</h2>)
    }
  }
  return (
    <Box className='empdetails'>
      {
        display()
      }
    </Box>
  )
}
const EmpTable = (props) => {

  return (
    <Stack py={10} px={50}>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Name:</TableCell>
            <TableCell>{props.selectedEmp.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Salary:</TableCell>
            <TableCell>{props.selectedEmp.salary}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Department:</TableCell>
            <TableCell>{props.selectedEmp.dept}</TableCell>
          </TableRow>
        </TableBody>

        <Grid container spacing={2}>
          <Grid Button xs={8}>
          <Button  variant="contained" color="primary" id="2" className='edit' onClick={props.displayCentre}>edit</Button>
          </Grid>
          <Grid Button xs={4}>
          <Button variant="contained" color="primary" id="3" className='delete' onClick={props.delEmp}>delete</Button>
          </Grid>
          
        </Grid>
      </Table>

    </Stack>
  )
}

export default EmpDetails
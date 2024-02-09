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
import EmpForm from './EmpForm'
import EditForm from './EditForm'
import { Table, TableBody, TableRow, TableCell, Button, Box, Grid,  Card, CardContent, Paper} from '@mui/material'

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
      return (<h2 style={{ color: "red" }}>Select Employee Name From Employee List To See Details</h2>)
    }
  }
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={11} lg={10} >
      {
        display()
      }
      </Grid >     
    </Grid>
  )
}
const EmpTable = (props) => {

  return (

    <Grid container spacing={2}>
    <Grid item xs={10} md={10} lg={8} sx={{py:2, px:2}}>
      <Card sx={{m:2}}>
        <CardContent>
          <Table sx={{m:2}}>
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
          </Table>
          <Grid container spacing={2}>
            <Grid item>
              <Button sx={{px:2, py:2}} variant="outlined" color="primary" id="2" className='edit' onClick={props.displayCentre}>Edit</Button>
            </Grid>
            <Grid item>
              <Button  variant="outlined" color="primary" id="3" className='delete' onClick={props.delEmp}>Delete</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);
};

export default EmpDetails
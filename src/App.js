import React, { useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'

import {Stack, Box, Button, List, ListItem, Paper,Grid} from '@mui/material'


const App = () => {
  const obj={
    text:"ays software solution",
  }
  // const[employees,updatedEmployees] = useState([
  //     {"id" : 1, "name" : "Kunal", "dept" : "Tester", "salary" : "60000"},
  //     {"id" : 2, "name" : "Pratte", "dept" : "Developer", "salary" : "80000"},
  //     {"id" : 3, "name" : "Nupur", "dept" : "Tester", "salary" : "60000"},
  //     {"id" : 4, "name" : "Abhishek", "dept":"Developer", "salary" : "80000"},
  //     {"id" : 5, "name": "Trupti","dept":"Developer", "salary" : "80000"},
  //     {"id" : 6, "name": "Prerana" , "dept":"Developer", "salary" : "80000"},
  //     {"id" : 7, "name" : "Mehvish", "dept" :"DevOps Engineer", "salary":"60000"},
  //     {"id" : 8, "name" : "Abhi", "dept":"Senior Developer", "salary" : "1000000"}
  //   ])
 

  const[employees,updatedEmployees] = useState([])



  // Method 1 : Using async-await Method

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch("https://4f2b71f08a2546e6b59aa718e3ae4071.api.mockbin.io/");
        const result = await response.json();
        console.log("Successfully Fetched")
        updatedEmployees(result);
      }
      catch(error){
        console.log("Error is " , error)
      }
    }
    fetchData();
  },  [])

  


  /*
  // Method 2 : Using promises method
  useEffect(()=>{
    fetch("https://jsleholder.typicode.com/users")
      .then(response=>{
        if(!response){
          throw new Error("Network Response Was Not Ok");
        }
        else{
          return response.json()
        }        
      })
      .then(result=>{
        updatedEmployees(result)
        console.log("Successfully Fetched")
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [])

*/


  const[selectedEmp,setSelectedEmp] = useState({})
  function selectEmployee(employee){
    setSelectedEmp(employee)   
  }
  
  function addemp(newEmpobj)
  {
    setSelectedEmp({})
    let empId=employees.length + 1
    let temp=JSON.parse(JSON.stringify(employees))
    newEmpobj["id"]=empId
    temp.push(newEmpobj)
    console.log("ok",newEmpobj);
    console.log("aaaa")
    updatedEmployees(temp)
    setSelectedCentre("")
  }
  function delEmp()
  {
    let tempArr=JSON.parse(JSON.stringify(employees))
    tempArr=tempArr.filter(employee => {
      return employee.id !== selectedEmp.id;
    });
    updatedEmployees(tempArr)
    setSelectedCentre("")
  }
  

  function editEmployee(editedEmpobj)
  {
    
    let tempArr=JSON.parse(JSON.stringify(employees))
    let empIndex=tempArr.findIndex(obj => obj.id === selectedEmp.id);
    console.log("index found",empIndex)
    
    tempArr[empIndex]=editedEmpobj
    console.log("curr obj",tempArr[empIndex]);
    updatedEmployees(tempArr)
    setSelectedCentre("")

  }
  
  
  //selected employee state
  
  // state for centre div
  const[selectedCentre,setSelectedCentre]=useState("")

  function displayCentre(e)
  {
    setSelectedCentre(e.target.id)
  }

  return (
    <Grid container className="demo">
      <Navbar obj={obj} displayCentre={displayCentre} />
      <Grid item  xs={12} md={12} lg={12} sx={{width :"100%"}}>
              <Grid container>
        <Grid item sx={{width:"25%"}}>
          <Box sx={{width:"100%"}}>
            <Employee empArr={employees} selectedEmp={selectedEmp} selectEmployee={selectEmployee} displayCentre={displayCentre}/>  
          </Box>
          </Grid>
        <Grid item sx={{width:"75%"}}>
          <Box sx={{width:"100%"}}> 
          <EmpDetails selectedEmp={selectedEmp} selectedCentre={selectedCentre} addemp={addemp} displayCentre={displayCentre} setSelectedEmp={setSelectedEmp} delEmp={delEmp} editEmployee={editEmployee}/>  
          </Box>
        </Grid>
      </Grid> 
      </Grid>
                 
    </Grid>
  )
  
}

export default App



// return (
//   <Grid container className="demo">
//     <Navbar obj={obj} displayCentre={displayCentre} />
//     <Grid item xs={12} sm={12} md={11} lg={9} className='main'>
//     <Employee empArr={employees} selectedEmp={selectedEmp} selectEmployee={selectEmployee} displayCentre={displayCentre}/>
//     <EmpDetails selectedEmp={selectedEmp} selectedCentre={selectedCentre} addemp={addemp} displayCentre={displayCentre} setSelectedEmp={setSelectedEmp} delEmp={delEmp} editEmployee={editEmployee}/>
    
//     </Grid>                  
//   </Grid>
// )
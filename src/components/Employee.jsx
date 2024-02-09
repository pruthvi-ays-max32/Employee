import React, { useState } from 'react'
import { Stack, Box, Button, List, ListItem, Paper, Grid } from '@mui/material'
import './employee.css'
const Employee = (props) => {
  const [selectedBt, setselectedBt] = useState("")
  const [inputValue, setInputValue] = useState();
  function handleInputChange(e) {
    setInputValue(e.target.value)

  }
  function onSort(sortDirection) {
    console.log(sortDirection)
    setselectedBt(sortDirection)
  }


  return (
    <Grid container >
      <Grid item xs={10} md={10} lg={8}>
          <Stack>
            <Toolbar empArr={props.empArr} inputValue={inputValue} handleInputChange={handleInputChange} onSort={onSort} selectedBt={selectedBt} />
            <Employeelist empArr={props.empArr} selectedEmp={props.selectedEmp} selectEmployee={props.selectEmployee} inputValue={inputValue} handleInputChange={handleInputChange} selectedBt={selectedBt} displayCentre={props.displayCentre} />
          </Stack>
      </Grid>     
    </Grid>
  )
}
const Toolbar = (props) => {

  return (

    <Box sx={{ py: 1, px: 1 }}>
      <input type="text" value={props.inputValue} onChange={props.handleInputChange} />
      <Button sx={{ marginRight: 1 }} className='asc' type='button' style={{ backgroundColor: props.selectedBt === "asc" ? "red" : "orange" }} onClick={() => props.onSort("asc")} >Asc</Button>
      <Button className='dsc' type='button' style={{ backgroundColor: props.selectedBt === "dsc" ? "red" : "orange" }} onClick={() => props.onSort("dsc")}>Dsc</Button>
    </Box>

  )
}
const Emp = (props) => {
  let color;
  if (props.emp.id === props.selectedEmp.id) {
    color = 'contained'
  } else {
    color = 'outlined'
  }
  function fun(e) {
    props.selectEmployee(props.emp)
    props.displayCentre(e)

  }
  return (

    <ListItem>
      <Button variant={color} id="3" sx={{ m: "2px" }} onClick={fun}>{props.emp.name}</Button>
    </ListItem>

  )
}

const Employeelist = (props) => {

  let clonedArray = [...props.empArr]
  let searchText = props.inputValue
  let selectedBt = props.selectedBt

  let newarr = []


  function fun() {
    if (searchText !== undefined) {
      clonedArray = clonedArray.filter(user => user.name.includes(searchText));
      console.log(clonedArray)
    }
    if (selectedBt === "asc") {
      clonedArray.sort((a, b) => (a.name > b.name) ? 1 : -1)

    }
    else if (selectedBt === "dsc") {
      clonedArray.sort((a, b) => (a.name < b.name) ? 1 : -1)

    }

    for (let i = 0; i < clonedArray.length; i++) {
      newarr.push(<Emp emp={clonedArray[i]} selectedEmp={props.selectedEmp} selectEmployee={props.selectEmployee} key={clonedArray[i].id} displayCentre={props.displayCentre} />)
    }
    return newarr
  }

  return (
    <Box className='Employeelist'>
      <List>
        {fun()}
      </List>
    </Box>
  )
}

export default Employee
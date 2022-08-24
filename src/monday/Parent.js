import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    

    // constructor(){
    //     super();
    //     console.log("constructor");
    // }
   
    
  state = {
    name : "John",
    age : 24,
    salary : 30000,
    data : {
      name: " Doe"
    }
  }

  componentDidMount () {
    console.log("lifecycle");
  }

  componentDidUpdate () {
    console.log("lifecycle componentDidUpdate");
  }

  render(){

    console.log("Render");
    const handleChangeSalary = () => {
        this.setState({
            salary : 40000
        })
    }


    const handleChangeAge = (value) => {
        this.setState({
            age : value
        })
    }

    return(
      <div>
        Hello World 
        <h1>Parent Component</h1>
        <div> Name :{this.state.name} || Age : {this.state.age} || Salary : {this.state.salary}</div>
        {this.state.data.name}
        <button onClick={handleChangeSalary}>Increment Salary</button>

        {/* <button onClick={()=>this.setState({salary:40000})}>Increment Salary</button> */}
        <Child name={this.state.name} salary={this.state.salary} updateSalary={handleChangeAge}/>


      </div>
    )
  }
}
<></>

export default Parent
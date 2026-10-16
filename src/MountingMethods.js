import React from "react";
class MountingMethods extends React.Component 
{ 
    render() 
    {
        let abc="Pavan Chanpura";
        console.log(abc)
     return( 
     <div> 
        <h1>Diploma in AIML </h1>
        <h4>{this.state.color}</h4>
        <h4>{this.state.name}</h4> 
     </div> 
    );} 
    constructor(props)
    {
        super();
        this.state={color:"red",name:"Pavan"}
    }
    static getDerivedStateFromProps(props)
    {
        return{
            color:"blue"
        } 
    }
    componentDidMount(){
        console.log("HI")
    }
} 
export default MountingMethods;

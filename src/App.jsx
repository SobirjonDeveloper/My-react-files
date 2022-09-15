import React ,{Component} from "react"


class Student extends Component{
  render(){
    return(
      <div>Sobirjon is {this.props.title}</div>
    )
  }
}
export default Student

class Parent extends Component{
  render(){
    return(
      <div>parent and {this.props.children}</div>
    )
  }
}
export {Parent}
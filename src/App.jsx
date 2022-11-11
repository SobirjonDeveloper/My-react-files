import React from "react";
import { Student } from "./Data";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Student: Student,
    };
  }
  render() {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th width={225}>ID</th>
            <th width={225}>NAME</th>
            <th width={225}>PHONE</th>
            <th width={225}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Student.map((std) => {
            return (
              <tr className="wrap" key={std.id}>
                <td width={50}>{std.id}</td>
                <td width={300}>{std.name}</td>
                {/* // <td width={200}>{std.phone}</td> */}
                <td width={150}>{std.status}</td>
                <td width={200}>
                  <button
                    className="trash"
                    onClick={() => {
                      let res = this.state.Student.filter(
                        (value) => value.id !== std.id
                      );
                      this.setState({ Student: res });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default App;

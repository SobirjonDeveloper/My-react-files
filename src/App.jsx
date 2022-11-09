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
      <div>
        {this.state.Student.map((std) => {
          return (
            <table border={1}>
              {/* <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE</th>
                <th>STATUS</th>
              </tr> */}
              <tr className="wrap">
                <td width={50}>{std.id}</td>
                <td width={300}>{std.name}</td>
                <td width={200}>{std.phone}</td>
                <td width={130}>{std.status}</td>
                <td width={200}>
                  <button
                    onClick={() => {
                      let res = this.state.Student.filter(
                        (value) => value.id !== Student.id
                      );
                      this.setState({ Student: res });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default App;

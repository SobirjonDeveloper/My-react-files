import React from "react";
import { Student } from "./Data";
import { Hooks } from "./Hooks";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: Student,
      count: 0,
    };
  }
  render() {
    // const plus = () => {
    //   this.setState({ count: this.state.count + 1 });
    // };
    // const minus = () => {
    //   this.setState({ count: this.state.count - 1 });
    // };

    return (
      <div>
        <div>
          <input width={300} type="text" placeholder="Enter your name " />
          <input
            type="text"
            placeholder="Enter your phone number"
            width={300}
          />
          <input type="text" placeholder="status" width={300} />
        </div>
        <table border={2}>
          <tr>
            {/* <th width={300}>ID</th> */}
            <th width={300}>NAME</th>
            <th width={300}>PHONE</th>
            <th width={300}>STATUS</th>
          </tr>

          {this.state.data.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>{value.status}</td>
                <td>
                  <button
                    onClick={() => {
                      let res = this.state.data.filter(
                        (Student) => value.id !== Student.id
                      );
                      this.setState({ data: res });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>

        <Hooks />
      </div>
    );
  }
}
export { App };

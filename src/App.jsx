import React, { Component } from "react";
import "./style.css";
// import React, { Component } from "react";

export default class Line extends Component {
  render() {
    return (
      <div className="Line">
        <ifram src="sobir" frameborder="1" className="sobir">
          <tr className="s">
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>ADDRESS</td>
            <td>STATUS</td>
            <td>NICKNAME</td>
            <td>UNIV</td>
            <button>EDIT</button>
          </tr>
          <tr>
            <td>6</td>
            <td>Sobirjon Fayzullayev</td>
            <td>26</td>
            <td>Toshkent Uzbekistan</td>
            <td>Student</td>
            <td>Ali</td>
            <td>sejong</td>
            <button>EDIT</button>
          </tr>
          <tr className="ss">
            <td>7</td>
            <td>Odina Saidnazarova</td>
            <td>15</td>
            <td>Toshkent Uzbekistan</td>
            <td>Student</td>
            <td>Bonu</td>
            <td>Sejong</td>
            <button>EDIT</button>
          </tr>
          <tr>
            <td>8</td>
            <td>SHoaziz Xusanov</td>
            <td>16</td>
            <td>Toshkent Uzbekistan</td>
            <td>student</td>
            <td>Xusanov</td>
            <td>Sejong</td>
            <button>EDIT</button>
          </tr>
          <tr>
            <td>9</td>
            <td>Abduqodir Abdullayev</td>
            <td>15</td>
            <td>ToshkentUzbekistan</td>
            <td>student</td>
            <td>Abduqodir</td>
            <td>Sejong</td>
            <button>EDIT</button>
          </tr>
        </ifram>
      </div>
    );
  }
}

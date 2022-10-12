// import React, { useContext, useState } from "react";
// import { ContextData } from "./ContextData";
// import { WrapBody } from "./contextstyle";
// import { Boylik } from "./TableContext";
// const ContextBody = () => {
//   const [state, setState] = useContext(Boylik);
//   const [Data, SetData] = useState(ContextData);
//   const onDelete = (idd) => {
//     setState(state.filter((vale) => vale.id !== idd));
//   };
//   return (
//     <div>
//       <h1>
//         {state.map((value) => (
//           <WrapBody>
//             <h5>{value.id}</h5>
//             <h5>{value.name}</h5>
//             <button onClick={() => onDelete(value.id)}>delete</button>
//           </WrapBody>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default ContextBody;

import React, { useState } from "react";

// export const Home = (props) => {
//   return (
//     <>
//       <h1>Home Component</h1>
//       <p>{JSON.stringify(props)}</p>
//     </>
//   );
// };

// export class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Justin"
//     };
//   }

handleInputChange = (e) => {
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
};
//   render() {
//     return <h1>The current state is: {JSON.stringify(this.state)}</h1>;
//   }
// }

export const Home = (props) => {
  const [name, setName] = useState("Justin");

  return (
    <>
      <h1>{JSON.stringify(name)}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

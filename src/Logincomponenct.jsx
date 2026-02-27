import { useEffect, useState } from "react";

function Logincomponenct() {
  const app = () => {
    const [details, setdetails] = useState({
      username: "",
      password: ""
    });

    const changes = (e) => {
      const { name, value } = e.target;
      setdetails((prev) => {
         return {...prev,[name]:value};
      })
    };
    return (
      <>
        <form>
          <input type="text" placeholder="Enter the user name" className="username" onChange={changes}></input>
          <input type="password" placeholder="Enter a password" className="password" onChange={changes}></input><br></br>
          <input type="button" value="Login" className="Login"></input><br></br>
          <input type="button" value="Log" className="Log"></input>
        </form>
      </>
    )
  }
}
export default Logincomponenct;

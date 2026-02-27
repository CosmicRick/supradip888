import { useEffect } from "react";

function Logincomponenct() {

  return (
    <>
      <form>
        <input type="text" placeholder="Enter the user name" name="username"></input>
        <input type="password" placeholder="Enter a password" name="password"></input><br></br>
        <input type="button" value="Login" name="Login"></input><br></br>
        <input type="button" value="Log" name="Log"></input>
      </form>
    </>
  )
}
export default Logincomponenct;

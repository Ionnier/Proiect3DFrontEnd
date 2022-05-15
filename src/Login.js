import axios from "axios";
import { useState } from "react";

function Login(props) {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState()


  return (
    <div>

      <label>email: </label>
      <input type="text" value={userEmail} onChange={(e) => {
        setUserEmail(e.target.value)
      }
      } />
      <br />
      <label>password:
        <input type="password" value={userPassword} onChange={(e) => {
          setUserPassword(e.target.value)
        }
        } />
      </label>
      <br />
      <input type="button" value={"Login"} onClick={() => {
        axios.post('https://proiectgrafica.herokuapp.com/api/v1/users/login', {
          userEmail, userPassword
        }).then((res) => {
          props.set_token(res.data.token)
        })
      }} />
      <input type="button" value={"Register"} onClick={() => {
        axios.post('https://proiectgrafica.herokuapp.com/api/v1/users/signup/client', {
          userEmail, userPassword
        })
      }} />
    </div>
  )
}

export default Login
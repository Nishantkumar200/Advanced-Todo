import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Actions/UserAction";

function Login() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [name, setName] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = JSON.parse(localStorage.getItem("userId"));

  const userData = useSelector((state) => state.login);

  const responseGoogle = (response) => {
    // console.log(response);

    const { email, name, googleId } = response.profileObj;

    dispatch(loginUser(email, googleId, name,history));
    history.push("/todo");
  };

  useEffect(() => {
    if (userId) {
      history.push("/todo");
    } else {
      history.push("/");
    }
  }, []);

  console.log(userData);
  return (
    <div>
      <GoogleLogin
        clientId="513270965377-qqaf5mmsihis676tglivf3hqniaief6q.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;

import React from "react";
import "./ErrorURL.css"
import { useNavigate } from "react-router-dom";
const ErrorURL = ()=>{

    const navigate = useNavigate()
    return(
        <div className="errorUrl">
          <p>404</p>
          <p>Sorry, the page not found</p>
          <button onClick={()=>navigate("/Y_LAB_University_task_1/main")} className="errorUrl__button">Go to the main page</button>
          <button onClick={()=>navigate("/Y_LAB_University_task_1/login")} className="errorUrl__button">Go to Login</button>

        </div>
    )
}

export default ErrorURL;
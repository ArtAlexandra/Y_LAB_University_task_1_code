import React, {  useRef, useState } from "react";
import "./Authentication.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
type UserData = {
  email?:string;
  phone?:string;
  };

const Authentication =()=>{
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
  

    const navigate = useNavigate()

    const [right, setRight] = useState<boolean>(true)

    const refForm = useRef<HTMLFormElement|null>(null)

    const Login = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("email ", email)
        console.log("password ", password)

       
        try{
            const response = await axios.get<UserData[]>(`https://jsonplaceholder.typicode.com/users?email=${email}`) 
             console.log(response.data[0])
             if(response.data[0].phone===password){
                setRight(true)
                refForm.current?.reset()
                setEmail("")
                setPassword("")
                navigate("/Y_LAB_University_task_1/main")
             }
             else{
                 setRight(false)
             }
     
        }
        catch(e){
            setRight(false)
        }
     
    }
    return(
        <div >
            <form onSubmit={Login} ref={refForm} className="authentication__form">
                <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} 
                className={right? "authentication__form__input":"authentication__form__input authentication__form__input_error"}/>

                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}
                className={right? "authentication__form__input":"authentication__form__input authentication__form__input_error"}/>

                <button type="submit" className="authentication__form__button">Login</button>
                {!right &&<p className="authentication__form__error">Invalid email or password</p>}
            </form>
        </div>
    )
}

export default Authentication;
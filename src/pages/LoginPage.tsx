import { useNavigate } from "react-router-dom";

function LoginPage(){

const navigate=useNavigate();

return(

<div className="login-container">

<div className="login-card">

<h1>Xutra</h1>

<p>
Demo Mode — Any ID/Password Works
</p>

<input
placeholder="Enter User ID"
/>

<input
placeholder="Enter Password"
type="password"
/>

<button
onClick={()=>{
navigate("/watchlist")
}}
>

Login

</button>

</div>

</div>

)

}

export default LoginPage;
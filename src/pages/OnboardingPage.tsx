import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
Users,
Newspaper,
TrendingUp,
Route
} from "lucide-react";

function OnboardingPage(){

const navigate=useNavigate();

const [current,setCurrent]=useState(0);

const slides=[

{
icon:<Users size={50}/>,
title:"Who We Are",
description:
"Xutra combines multiple brokers into one smart ecosystem for traders and investors."
},

{
icon:<Route size={50}/>,
title:"Smart Broker Routing",
description:
"Automatically route trades to the broker with better charges and execution."
},

{
icon:<Newspaper size={50}/>,
title:"Live News & Analytics",
description:
"Stay updated with market news, insights and smart trading signals."
},

{
icon:<TrendingUp size={50}/>,
title:"Portfolio Intelligence",
description:
"Track profits, optimize costs and understand how much money you save."
}

];

return(

<div className="onboarding-main">

<div className="slide-container">

<div className="slide-icon">

{slides[current].icon}

</div>

<h1>

{slides[current].title}

</h1>

<p>

{slides[current].description}

</p>

</div>



<div className="dots">

{

slides.map((_,index)=>(

<div
key={index}
className={
current===index
?
"active-dot"
:
"dot"
}
/>

))

}

</div>



<div
className="bottom-controls"
style={{
justifyContent:
current===0
?
"flex-end"
:
"space-between"
}}
>

<button
className="skip-btn"
style={{
visibility:
current===0
?
"hidden"
:
"visible"
}}
onClick={()=>setCurrent(current-1)}
>

Back

</button>

{

current!==slides.length-1

?

<button
className="next-btn"
onClick={()=>setCurrent(current+1)}
>

Next

</button>

:

<button
className="next-btn"
onClick={()=>navigate("/login")}
>

Get Started

</button>

}

</div>

</div>

)

}

export default OnboardingPage;



import { useState } from "react";
import BottomNav from "../components/BottomNav";

import growwLogo from "../assets/brokers/groww.png";
import zerodhaLogo from "../assets/brokers/zerodha.png";
import upstoxLogo from "../assets/brokers/upstock.png";
import angelLogo from "../assets/brokers/angelone.png";

function HomePage(){

const [open,setOpen]=useState(false);

const brokers=[

{
name:"Groww",
logo:growwLogo
},

{
name:"Zerodha",
logo:zerodhaLogo
},

{
name:"Upstox",
logo:upstoxLogo
},

{
name:"Angel",
logo:angelLogo
}

];

const [routeMode,setRouteMode]=
useState<string | null>(null);

const [priceFeed,setPriceFeed]=
useState(
brokers[1]
);

const [brokerConnect,setBrokerConnect]=
useState(
brokers[2]
);

return(

<div

className="premium-app"

onClick={()=>
setRouteMode(null)
}

>


{/* EXECUTION HUB */}

<div

className={open ? "side-panel open":"side-panel"}

onClick={(e)=>
e.stopPropagation()
}

>


<div
className={
open
?
"hub-content show"
:
"hub-content"
}
>

<h4 className="hub-title">

Execution Hub

</h4>



{/* PRICE FEED */}

<div className="hub-section">

<p>

Price Feed

</p>

<div

className={
routeMode==="price"
?
"selected-broker active-route"
:
"selected-broker"
}

onClick={()=>{

setRouteMode(
routeMode==="price"
?
null
:
"price"
);

}}

>

<img
src={priceFeed.logo}
className="hub-logo"
/>

<div>

<span>

{priceFeed.name}

</span>

<p className="route-helper">

Tap to edit

</p>

</div>

</div>

</div>



{/* BROKER CONNECT */}

<div className="hub-section">

<p>

Broker Connect

</p>

<div

className={
routeMode==="connect"
?
"selected-broker active-route"
:
"selected-broker"
}
onClick={()=>{

setRouteMode(
routeMode==="connect"
?
null
:
"connect"
);

}}
>

<img
src={brokerConnect.logo}
className="hub-logo"
/>

<div>

<span>

{brokerConnect.name}

</span>

<p className="route-helper">

Tap to edit

</p>

</div>

</div>

</div>



{/* BROKER LIST */}

<div className="hub-section">

<p>

Choose Broker

</p>

<div className="broker-grid">

{

brokers.map((broker,index)=>(

<div

key={index}

className={
routeMode
?
"selectable show-add"
:
"selectable"
}

onClick={(e)=>{

e.stopPropagation();

if(routeMode==="price"){

setPriceFeed(broker);

}

if(routeMode==="connect"){

setBrokerConnect(broker);

}

setRouteMode(null);

}}

>

<img

src={broker.logo}

className="hub-logo"

/>

<div
className={
routeMode
?
"broker-add show-add"
:
"broker-add"
}
>

+

</div>

</div>

))

}

</div>

</div>

</div>



{/* HANDLE */}

<div

className="menu-handle"

onClick={()=>
setOpen(!open)
}

>

|||

</div>

</div>




{/* MARKET TICKER */}

<div className="market-container">

<div className="market-scroll">

{

Array(2)
.fill(brokers)
.flat()
.map((_,i)=>(

<div
key={i}
className="market-card"
>

<span className="market-name">

NIFTY 25277

</span>

<span className="market-up">

+0.84%

</span>

</div>

))

}

</div>

</div>




{/* BODY */}

<div className="page-body">

<h1>

Welcome To Xutra

</h1>

</div>



<BottomNav/>

</div>

)

}

export default HomePage;
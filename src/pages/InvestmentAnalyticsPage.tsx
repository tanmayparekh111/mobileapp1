import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InvestmentAnalyticsPage(){

const navigate=useNavigate();

const [type,setType]=useState("Intraday");

const [showBroker,setShowBroker]=
useState(false);

const [selectedBrokers,setSelectedBrokers]=
useState<string[]>([]);

const brokers=[

"Groww",
"Zerodha",
"Upstox",
"Angel One"

];

const positions=[

{
name:"Nifty",
capital:"₹40K",
pnl:"+₹2500",
profit:true,
width:"85%"
},

{
name:"BankNifty",
capital:"₹70K",
pnl:"-₹1200",
profit:false,
width:"55%"
},

{
name:"Sensex",
capital:"₹20K",
pnl:"+₹600",
profit:true,
width:"35%"
}

];

return(

<div className="premium-app">

<div className="analytics-header">

<div
className="back-btn"
onClick={()=>navigate(-1)}
>

<ArrowLeft/>

</div>

<div>

<h2>
Investment Analytics
</h2>

<p>
Track sectors and positions
</p>

</div>

</div>


{/* FILTERS */}

<div className="analytics-tabs">

<div
className="tab"
onClick={()=>
setShowBroker(
!showBroker
)
}
>

<Plus size={16}/>

Add Broker

</div>

<div
className={
type==="Intraday"
?
"active-tab"
:
"tab"
}
onClick={()=>
setType(
"Intraday"
)
}
>

Intraday

</div>

<div
className={
type==="CNC"
?
"active-tab"
:
"tab"
}
onClick={()=>
setType(
"CNC"
)
}
>

CNC

</div>

</div>



{/* BROKER DROPDOWN */}

{

showBroker && (

<div className="broker-dropdown">

{

brokers.map((broker)=>(

<div
key={broker}
className="broker-option"

onClick={()=>{

if(
!selectedBrokers.includes(
broker
)
){

setSelectedBrokers([

...selectedBrokers,
broker

])

}

setShowBroker(false)

}}
>

{broker}

</div>

))

}

</div>

)

}



{/* SELECTED BROKER CARDS */}

<div className="selected-brokers">

{

selectedBrokers.map((broker)=>(

<div
key={broker}
className="broker-chip"
>

{broker}

<span

onClick={()=>{

setSelectedBrokers(

selectedBrokers.filter(
x=>x!==broker
)

)

}}

>

✕

</span>

</div>

))

}


{

selectedBrokers.length>0 && (

<div
className="reset-chip"

onClick={()=>
setSelectedBrokers([])
}
>

Reset All

</div>

)

}

</div>



{/* ANALYTICS CARDS */}

{

positions.map((item,index)=>(

<div
key={index}
className="analytics-premium-card"
>

<div className="analytics-row">

<h3>

{item.name}

</h3>

<span
className={
item.profit
?
"profit"
:
"loss"
}
>

{item.pnl}

</span>

</div>

<p>

Capital: {item.capital}

</p>

<div className="analytics-progress">

<div
className="analytics-fill"
style={{
width:item.width
}}
/>

</div>

<p className="analytics-status">

Active Position

</p>

</div>

))

}

</div>

)

}

export default InvestmentAnalyticsPage;
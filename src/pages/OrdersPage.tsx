import { useState } from "react";

import BottomNav from "../components/BottomNav";
import GlobalShutter from "../components/GlobalShutter";
import MarketTicker from "../components/MarketTicker";

function OrdersPage(){

const [showFilter,setShowFilter]=
useState(false);

const orders=[

{
symbol:"RELIANCE",
type:"BUY",
qty:"2 QTY",
exchange:"NSE EQ",
product:"Intraday",
status:"COMPLETE",
price:"₹2,940",
time:"09:40 AM",
profit:true
},

{
symbol:"BANKNIFTY 24 JUL 55800 CE",
type:"SELL",
qty:"1 LOT",
exchange:"NFO",
product:"MIS",
status:"CANCELLED",
price:"₹214",
time:"10:12 AM",
profit:false
},

{
symbol:"TCS",
type:"BUY",
qty:"5 QTY",
exchange:"NSE EQ",
product:"Delivery",
status:"OPEN",
price:"₹4,120",
time:"11:02 AM",
profit:true
},

{
symbol:"NIFTY 50",
type:"SELL",
qty:"1 LOT",
exchange:"INDEX",
product:"Intraday",
status:"REJECTED",
price:"₹25,277",
time:"01:25 PM",
profit:false
}

];

return(

<div className="premium-app">

<MarketTicker/>

<GlobalShutter/>


{/* TABS */}

<div className="orders-tabs">

<div className="order-tab active-order">

All

</div>

<div className="order-tab">

Open

</div>

<div className="order-tab">

Executed

</div>

</div>



{/* SEARCH */}

<div className="orders-search">

<input
placeholder="Search Orders..."
/>

</div>



{/* FILTER BAR */}

<div className="orders-toolbar">

<h3>

12 Orders

</h3>

<div className="toolbar-actions">

<button
onClick={(e)=>{

e.stopPropagation();

setTimeout(()=>{

setShowFilter(true);

},0);

}}
>

Filter

</button>

<button>

Sort

</button>

</div>

</div>



{/* ORDER LIST */}

<div className="orders-container">

{

orders.map((order,index)=>(

<div
key={index}
className="order-card"
>

<div className="order-left">

<h2>

{order.symbol}

</h2>

<h4
className={
order.profit
?
"buy-text"
:
"sell-text"
}
>

{order.type} • {order.qty}

</h4>

<p>

{order.exchange} • {order.product}

</p>

</div>



<div className="order-right">

<h3
className={
order.status==="COMPLETE"
?
"status-green"
:
order.status==="OPEN"
?
"status-blue"
:
"status-red"
}
>

{order.status}

</h3>

<h2>

{order.price}

</h2>

<p>

{order.time}

</p>

</div>

</div>

))

}

</div>



{/* FILTER MODAL */}

{

showFilter && (

<div
className="filter-overlay"
onClick={()=>
setShowFilter(false)
}
>

<div
className="filter-modal"
onClick={(e)=>
e.stopPropagation()
}
>
<h2>

Filter Orders

</h2>


<div className="filter-group">

<h4>

Product Type

</h4>

<label>
<input type="checkbox" defaultChecked/>
Regular
</label>

<label>
<input type="checkbox" defaultChecked/>
MTF
</label>

<label>
<input type="checkbox" defaultChecked/>
Intraday
</label>

</div>



<div className="filter-group">

<h4>

Broker

</h4>

<label>
<input type="checkbox" defaultChecked/>
Zerodha
</label>

<label>
<input type="checkbox" defaultChecked/>
Groww
</label>

<label>
<input type="checkbox" defaultChecked/>
Upstox
</label>

</div>



<div className="filter-actions">

<button

className="apply-btn"

onClick={()=>
setShowFilter(false)
}
>

Apply

</button>

<button

className="reset-btn"

onClick={()=>
setShowFilter(false)
}
>

Reset

</button>

</div>

</div>

</div>

)

}


<BottomNav/>

</div>

)

}

export default OrdersPage;
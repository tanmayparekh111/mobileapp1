import BottomNav from "../components/BottomNav";
import GlobalShutter from "../components/GlobalShutter";
import MarketTicker from "../components/MarketTicker";

function WatchlistPage(){

const stocks=[
{
symbol:"NIFTY 24 JUL 25200 CE",
exchange:"NFO",
price:"₹214",
change:"+5.42%",
profit:true,
route:"Zerodha"
},

{
symbol:"BANKNIFTY 31 JUL 55800 PE",
exchange:"NFO",
price:"₹178",
change:"-2.11%",
profit:false,
route:"Upstox"
},
{
symbol:"RELIANCE",
exchange:"NSE EQ",
price:"₹2,940",
change:"+2.14%",
profit:true,
route:"Zerodha"
},

{
symbol:"NIFTY 50",
exchange:"INDEX",
price:"₹25,277",
change:"+0.84%",
profit:true,
route:"Upstox"
},

{
symbol:"BANKNIFTY",
exchange:"INDEX",
price:"₹55,221",
change:"-0.21%",
profit:false,
route:"Groww"
},

{
symbol:"TCS",
exchange:"NSE EQ",
price:"₹4,120",
change:"+1.22%",
profit:true,
route:"Angel"
},

{
symbol:"HDFCBANK",
exchange:"NSE EQ",
price:"₹1,780",
change:"-0.44%",
profit:false,
route:"Zerodha"
}

];

return(

<div className="premium-app">

{/* GLOBAL COMPONENTS */}

<MarketTicker/>

<GlobalShutter/>


{/* SEARCH */}

<div className="watchlist-search">

<input
placeholder="Search stocks, futures, options..."
/>

</div>



{/* TABS */}

<div className="watchlist-tabs">

<div className="watch-tab active-watch">

F&O

</div>

<div className="watch-tab">

Equity

</div>

<div className="watch-tab">

Scalping

</div>

<div className="watch-tab">

+ New

</div>

</div>



{/* WATCHLIST */}

<div className="watchlist-container">

{

stocks.map((stock,index)=>(

<div
key={index}
className="watch-card"
>

<div className="watch-left">

<h3>

{stock.symbol}

</h3>

<p>

{stock.exchange}

</p>


<div className="route-chip">

{stock.route}

</div>

</div>



<div className="watch-chart">

<div className="chart-line"/>

</div>



<div className="watch-right">

<h2>

{stock.price}

</h2>

<p
className={
stock.profit
?
"profit"
:
"loss"
}
>

{stock.change}

</p>

</div>

</div>

))

}

</div>


<BottomNav/>

</div>

)

}

export default WatchlistPage;
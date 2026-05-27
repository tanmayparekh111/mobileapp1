function MarketTicker(){

const marketData=[

{
name:"NIFTY",
value:"25,277",
change:"+0.84%",
profit:true
},

{
name:"BANKNIFTY",
value:"55,221",
change:"-0.21%",
profit:false
},

{
name:"SENSEX",
value:"81,540",
change:"+0.45%",
profit:true
},

{
name:"FINNIFTY",
value:"26,280",
change:"+0.05%",
profit:true
},

{
name:"MIDCAP",
value:"13,410",
change:"+0.31%",
profit:true
},

{
name:"IT",
value:"39,200",
change:"+1.02%",
profit:true
}

];

return(

<div className="market-container">

<div className="market-scroll">

{

Array(2)
.fill(marketData)
.flat()
.map((item,index)=>(

<div
key={index}
className="market-card"
>

<span className="market-name">

{item.name} {item.value}

</span>

<span
className={
item.profit
?
"market-up"
:
"market-down"
}
>

{item.change}

</span>

</div>

))

}

</div>

</div>

)

}

export default MarketTicker;
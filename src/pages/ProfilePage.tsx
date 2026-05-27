import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

import {
BarChart3,
Landmark,
ArrowRight,
TrendingUp
} from "lucide-react";

import growwLogo from "../assets/brokers/groww.png";
import zerodhaLogo from "../assets/brokers/zerodha.png";
import upstoxLogo from "../assets/brokers/upstock.png";
import angelLogo from "../assets/brokers/angelone.png";

function ProfilePage(){

const navigate=useNavigate();

const brokers=[

{
logo:growwLogo,
total:"₹2.5L",
used:"₹50K",
available:"₹2L"
},

{
logo:zerodhaLogo,
total:"₹1.7L",
used:"₹20K",
available:"₹1.5L"
},

{
logo:upstoxLogo,
total:"₹3.1L",
used:"₹80K",
available:"₹2.3L"
},

{
logo:angelLogo,
total:"₹95K",
used:"₹15K",
available:"₹80K"
}

];

return(

<div className="premium-app">

{/* PROFILE */}

<div className="profile-card">

<div className="avatar">
RS
</div>

<div>

<h2>
Rahul Sharma
</h2>

<p>
rahul@email.com
</p>

</div>

</div>



{/* INVESTMENT */}

<div
className="profile-feature-card clickable"
onClick={()=>
navigate("/investment-analytics")
}
>

<div className="feature-left">

<BarChart3 size={28}/>

<div>

<h3>
Investment Analytics
</h3>

<p>
Sector analysis & insights
</p>

</div>

</div>

<ArrowRight/>

</div>



{/* SMART SAVING */}

<div
className="smart-saving-card"
>

<div className="smart-top">

<div className="feature-left">

<div className="saving-icon">

<TrendingUp
size={24}
/>

</div>

<div>

<h3>

Smart Saving Analyzer

</h3>

<p>

Broker optimization insights

</p>

</div>

</div>

</div>


<div className="saving-stats">

<div>

<p>

Monthly Saved

</p>

<b>

₹12,450

</b>

</div>


<div>

<p>

Yearly Saved

</p>

<b>

₹1,48,200

</b>

</div>

</div>


<div className="saving-chart">

<div className="bar h1"></div>
<div className="bar h2"></div>
<div className="bar h3"></div>
<div className="bar h4"></div>
<div className="bar h5"></div>
<div className="bar h6"></div>
<div className="bar h7"></div>

</div>

</div>




{/* FUND MONITOR */}

<div className="fund-monitor-box">

<div className="feature-left">

<Landmark size={28}/>

<div>

<h3>
Fund Monitor
</h3>

<p>
Balance and margin tracking
</p>

</div>

</div>

{

brokers.map((broker,index)=>(

<div
className="fund-row"
key={index}
>

<img
src={broker.logo}
className="broker-logo-table"
/>

<div className="fund-values">

<div>
<p>Total</p>
<b>{broker.total}</b>
</div>

<div>
<p>Used</p>
<b>{broker.used}</b>
</div>

<div>
<p>Available</p>
<b>{broker.available}</b>
</div>

</div>

<button className="fund-btn">

+

</button>

</div>

))

}

</div>




{/* HEATMAP */}

<div className="heat-main-card">

<h3>

Broker Wise PnL

</h3>

<div className="heat-broker-container">

{

brokers.map((broker,index)=>(

<div
key={index}
className="broker-grid-card"
>

<img
src={broker.logo}
className="broker-heat-logo"
/>

<div className="heat-grid">

{

Array.from(
{length:12},
(_,i)=>{

const profit=Math.random()<0.7;

const opacity=
0.35+
Math.random()*0.65;

return(

<div
key={i}
className={
profit
?
"heat-green"
:
"heat-red"
}
style={{
opacity
}}
/>

)

})

}

</div>

</div>

))

}

</div>

</div>

{/* PROFILE INFO */}

<div className="profile-info-card">

<h3>

Profile Information

</h3>


<div className="info-section">

<p>Name</p>

<span>

Rahul Sharma

</span>

</div>


<div className="info-section">

<p>Gender</p>

<span>

Male

</span>

</div>


<div className="info-section">

<p>Date Of Birth</p>

<span>

12 Mar 1992

</span>

</div>


<h4>

Contact Details

</h4>


<div className="info-section">

<p>Email</p>

<span>

rahulsharma@gmail.com

</span>

</div>


<div className="info-section">

<p>Phone</p>

<span>

+91-8897973903

</span>

</div>



<h4>

Support

</h4>

<div className="info-section">

<p>Invite Friends</p>

<span className="profit">

EARN

</span>

</div>


<h4>

About

</h4>

<div className="info-section">

<p>App Version</p>

<span>

v3.2.1 Xutra

</span>

</div>



<button
className="logout-btn"
onClick={()=>
navigate("/")
}
>

Logout

</button>

</div>

<BottomNav/>

</div>

)

}

export default ProfilePage;
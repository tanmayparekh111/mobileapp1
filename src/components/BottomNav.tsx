import {
  UserRound,
  Wallet,
  ChartCandlestick,
  ClipboardList,
  Eye
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function BottomNav() {

  const navigate=useNavigate();

  const location=useLocation();

  const tabs=[

    {
      icon:Eye,
      text:"Watchlist",
      route:"/watchlist"
    },

    {
      icon:ClipboardList,
      text:"Orders",
      route:"/orders"
    },

    {
      icon:ChartCandlestick,
      text:"Position",
      route:"/positions"
    },

    {
      icon:Wallet,
      text:"Holding",
      route:"/holdings"
    },

    {
      icon:UserRound,
      text:"Profile",
      route:"/profile"
    }

  ];

  return(

    <div className="bottom-navbar">

      {

      tabs.map((tab)=>{

        const Icon=tab.icon;

        return(

          <div

            key={tab.text}

            className={
              location.pathname===tab.route
              ?
              "nav-box active-nav"
              :
              "nav-box"
            }

            onClick={()=>
              navigate(tab.route)
            }
          >

            <Icon size={22}/>

            <span>

              {tab.text}

            </span>

          </div>

        )

      })

      }

    </div>

  )

}

export default BottomNav;
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import CheckOutTemplate from "../containers/CheckOutTemplate"
// import HomePage from "../containers/HomeTemplate/HomePage";
// import BuyTickets from "../containers/HomeTemplate/BuyTickets";
// import ListOfMovies from "../containers/HomeTemplate/ListOfMovies";
// import InfoCinema from "../containers/HomeTemplate/InfoCinema"
// import DetailsMovie from "../containers/HomeTemplate/DetailsMoviePage";
// import CheckOut from "../containers/HomeTemplate/CheckOut/CheckOut";


import {lazy} from "react"
const routesHome = [
    {
        exact:true,
        path:"/",
        component:lazy(()=>import("containers/HomeTemplate/HomePage"))
    },
    {
        exact:false,
        path:"/buy-tickets",
        component:lazy(()=>import("containers/HomeTemplate/BuyTickets"))
    },
    {
        exact:false,
        path:"/list-movie",
        component:lazy(()=>import("containers/HomeTemplate/ListOfMovies")),
    },
    {
        exact:false,
        path:"/info-cinema",
        component:lazy(()=>import("containers/HomeTemplate/InfoCinema")),
    },
    {
        exact:false,
        path:"/detail/:maPhim",
        component:lazy(()=>import("containers/HomeTemplate/DetailsMoviePage")),
    },
    {
        exact:false,
        path:"/login",
        component:lazy(()=>import("containers/HomeTemplate/Login")),
    },
    {
        exact:false,
        path:"/register",
        component:lazy(()=>import("containers/HomeTemplate/Register")),
    },
    {
        exact:false,
        path:"/profile",
        component:lazy(()=>import("containers/HomeTemplate/Profile")),
    },
    
]

const routesCheckOut = [
    {
        exact:false,
        path:"/checkout/:maLichChieu",
        component:lazy(()=>import("containers/HomeTemplate/CheckOut/CheckOut")),
    },
]

const routesAdmin = [

]


const renderRoutesHome = () => {
    return routesHome?.map((route, index) => {
        return <HomeTemplate key={index} exact={route.exact} path={route.path} component={route.component}/>
    })
}

const renderRoutesCheckOut = () => {
    return routesCheckOut?.map((route, index) => {
        return <CheckOutTemplate key={index} exact={route.exact} path={route.path} component={route.component}/>
    })
}

const renderRoutesAdmin = () => {
    return routesAdmin?.map((route, index) => {
        return <AdminTemplate key={index} exact={route.exact} path={route.path} component={route.component}/>
    })
}



export { renderRoutesHome, renderRoutesAdmin,renderRoutesCheckOut }
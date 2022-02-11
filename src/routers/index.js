import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import CheckOutTemplate from "../containers/CheckOutTemplate"
// import HomePage from "../containers/HomeTemplate/HomePage";
// import BuyTickets from "../containers/HomeTemplate/BuyTickets";
// import ListOfMovies from "../containers/HomeTemplate/ListOfMovies";
// import InfoCinema from "../containers/HomeTemplate/InfoCinema"
// import DetailsMovie from "../containers/HomeTemplate/DetailsMoviePage";
// import CheckOut from "../containers/HomeTemplate/CheckOut/CheckOut";
// Admin
import DashboardPage from "../containers/AdminTemplate/Dashboard";
import UserPage from "../containers/AdminTemplate/UserPage";
import FilmsPage from "../containers/AdminTemplate/FilmsPage";
import AddNew from "containers/AdminTemplate/FilmsPage/Add new/AddNew";


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
    {
        axact: false,
        path: "/dashboard",
        component: DashboardPage
    },  
    {
        axact: false,
        path: "/users",
        component: UserPage
    },
    {
        axact: false,
        path: "/films",
        component: FilmsPage
    },
    {
        axact: false,
        path: "/add-new-film",
        component: AddNew
    },
]


const renderRoutesHome = () => {
    return routesHome.map((route, index) => {
        return <HomeTemplate key={index} exact={route.axact} path={route.path} component={route.component}/>
    })
}

const renderRoutesCheckOut = () => {
    return routesCheckOut?.map((route, index) => {
        return <CheckOutTemplate key={index} exact={route.exact} path={route.path} component={route.component}/>
    })
}

const renderRoutesAdmin = () => {
    return routesAdmin.map((route, index) => {
        return <AdminTemplate key={index} exact={route.axact} path={route.path} component={route.component}/>
    })
}



export { renderRoutesHome, renderRoutesAdmin,renderRoutesCheckOut }
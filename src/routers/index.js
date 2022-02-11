import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import DashboardPage from "../containers/AdminTemplate/Dashboard";
import UserPage from "../containers/AdminTemplate/UserPage";
import FilmsPage from "../containers/AdminTemplate/FilmsPage";
import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import ListMoviePage from "./../containers/HomeTemplate/ListMoviePage";
import AddNew from "../containers/AdminTemplate/FilmsPage/AddNewFilmPage/AddNew";


const routesHome = [
    {
        axact: true,
        path: "/",
        component: HomePage
    },
    {
        axact: false,
        path: "/about",
        component: AboutPage
    },
    {
        axact: false,
        path: "/list-movie",
        component: ListMoviePage
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

const renderRoutesAdmin = () => {
    return routesAdmin.map((route, index) => {
        return <AdminTemplate key={index} exact={route.axact} path={route.path} component={route.component}/>
    })
}

export { renderRoutesHome, renderRoutesAdmin }
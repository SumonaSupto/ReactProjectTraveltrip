import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

const MainRoutes = createBrowserRouter ([

{
 path:"/",
 element:<MainLayouts/>,

 children:[{

    
 }]

}

])
export default MainRoutes
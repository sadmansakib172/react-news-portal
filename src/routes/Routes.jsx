const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../layouts/Root");
const { default: Home } = require("../pages/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;
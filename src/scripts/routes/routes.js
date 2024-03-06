import Detail from "../views/pages/detail";
import Favorited from "../views/pages/favorited";
import Home from "../views/pages/home";


const routes = {
    '/': Home,
    '/favorited': Favorited,
    '/detail/:id': Detail
}

export default routes
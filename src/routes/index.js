// Page User
import { DefaultLayoutUser } from '~/components/User/Layout';
import Home from '~/pages/User/Home';
import Cart from '~/pages/User/Cart';
//End Page User

// Page Admin
import { DefaultLayoutAdmin } from '~/components/Admin/Layout';
import HomeAd from '~/pages/Admin/Home';
// End Page Admin

const publicRoutes = [
    // Router User
    { path: '/', component: Home, layout: DefaultLayoutUser },
    { path: '/cart', component: Cart, layout: DefaultLayoutUser },
    //End Router User

    // Router Admin
    { path: '/admin', component: HomeAd, layout: DefaultLayoutAdmin },
    // End Router Admin
];

export { publicRoutes };

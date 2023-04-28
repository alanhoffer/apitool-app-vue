// HOMEPAGE components
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ProductView from '../views/ProductView.vue'
import BlogView from '../views/BlogView.vue'

// DASHBOARD components
import AuthView from '@/views/dashboard/AuthView.vue'

export const routes = [

    // HOMEPAGE routes
    {
        path: "/",
        name: "Home",
        component: HomeView,
      },
    {
        path: "/news",
        name: "News",
        component: BlogView,
        props: true,
    },
    {
        path: "/company",
        name: "Company",
        component: CompanyView,
    },
    {
        path: "/products",
        name: "Products",
        component: ProductView,
    },

    // DASHBOARD routes
    {
        path: "/auth",
        name: "Auth",
        component: AuthView,
    },
  ];


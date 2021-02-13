
import { createWebHistory, createRouter } from 'vue-router';
import { getAuthUser, isUserVerified } from '../config/functions'
import Main from '../components/Main.vue';
import Auth from '../components/Auth.vue';
import Features from '../components/Features.vue'
import Pricing from '../components/Pricing.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'
// import ProjectCreate from '../components/ProjectCreate.vue'
import Issues from '../components/Issues.vue'
import EditViewIssue from '../components/EditViewIssue.vue'
import Backlog from '../components/Backlog.vue'
import Todo from '../components/Todo.vue'
import ProfileSettings from '../components/ProfileSettings.vue'
import NotificationsSettings from '../components/NotificationsSettings.vue'
import PreferencesSettings from '../components/PreferencesSettings.vue'
import WorkspaceSettings from '../components/WorkspaceSettings.vue'
import UsersSettings from '../components/UsersSettings.vue'
import IntegrationsSettings from '../components/IntegrationsSettings.vue'
import APISettings from '../components/APISettings.vue'
import PlansSettings from '../components/PlansSettings.vue'
import BillingSettings from '../components/BillingSettings.vue'
import NotFound from '../components/NotFound.vue';



const routes = [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta: {
            title: "LogSnap | Issue Tracking"
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Auth,
        meta: {
            title: "Log in | LogSnap",
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: Auth,
        meta: {
            title: "Sign up | LogSnap",
        }
    },
    {
        path: "/features",
        component: Features,
        redirect: "/",
        meta: {
            title: "Features | LogSnap",
        }
    },
    {
        path: "/pricing",
        component: Pricing,
        meta: {
            title: "Pricing | LogSnap"
        }
    },
    {
        path: "/about",
        component: About,
        meta: {
            title: "About | LogSnap"
        }
    },
    {
        path: "/contact",
        component: Contact,
        meta: {
            title: "Conatact | LogSnap"
        }
    },
    {
        path: "/terms",
        redirect: "/"
    },
    {
        path: "/privacy",
        redirect: "/"
    },
    {
        path: "/docs",
        redirect: "/site"
    },
    // {
    //     path: "/dashboard/issues",
    //     component: Issues,
    //     meta: {
    //         title: "Issues| Dashboard",
    //         requiresAuth: true
    //     },
    // },
    {
        path: "/dashboard/projects/",
        component: Projects,
        meta: {
            title: "Projects | LogSnap",
            requiresAuth: true
        },
    },
    {
        name: "Issues",
        path: "/dashboard/project/issues/:id",
        component: Issues,
        meta: {
            title: "Projects | LogSnap",
            requiresAuth: true
        },
    },
    {
        name: "Backlog",
        path: "/dashboard/project/backlog/:id",
        component: Backlog,
        meta: {
            title: "Backlog | LogSnap",
            requiresAuth: true
        },
    },
    {
        name: "Todo",
        path: "/dashboard/project/todo/:id",
        component: Todo,
        meta: {
            title: "Todo | LogSnap",
            requiresAuth: true
        },
    },
    // {
    //     path: "/dashboard/projects/create",
    //     component: ProjectCreate,
    //     meta: {
    //         title: "Projects | LogSnap",
    //         requiresAuth: true
    //     },
    // },
    {
        name: "Issue",
        path: "/dashboard/issues/:id",
        component: EditViewIssue,
        meta: {
            title: "Issue",
            requiresAuth: true
        },
    },
    // {
    //     path: "/dashboard/backlog",
    //     component: Backlog,
    //     meta: {
    //         title: "Backlog | Dashboard",
    //         requiresAuth: true
    //     }
    // },
    // {
    //     path: "/dashboard/todo",
    //     component: Todo,
    //     meta: {
    //         title: "Todo| Dashboard",
    //         requiresAuth: true
    //     }
    // },
    {
        path: "/settings/account/profile",
        component: ProfileSettings,
        meta: {
            title: "Profile",
            requiresAuth: true
        },
    },
    {
        path: "/settings/account/notifications",
        component: NotificationsSettings,
        meta: {
            title: "Notifications",
            requiresAuth: true
        },
    },
    {
        path: "/settings/account/preferences",
        component: PreferencesSettings,
        meta: {
            title: "Preferences",
            requiresAuth: true
        },
    },
    {
        path: "/settings/workspace",
        component: WorkspaceSettings,
        meta: {
            title: "Workspace",
            requiresAuth: true
        },
    },
    {
        path: "/settings/workspace/users",
        component: UsersSettings,
        meta: {
            title: "Users",
            requiresAuth: true
        },
    },
    {
        path: "/settings/workspace/integrations",
        component: IntegrationsSettings,
        meta: {
            title: "Integrations",
            requiresAuth: true
        },
    },
    {
        path: "/settings/workspace/api",
        component: APISettings,
        meta: {
            title: "API",
            requiresAuth: true
        },
    },
    {
        path: "/settings/workspace/plans",
        component: PlansSettings,
        meta: {
            title: "Plans",
            requiresAuth: true
        },
    },
    {
        path: "/settings/workspace/billing",
        component: BillingSettings,
        meta: {
            title: "Billing",
            requiresAuth: true
        },
    },

    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
        meta: {
            title: "404 | Not Found"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'exact-active',
    routes,
});

router.afterEach((to, from, next) => {
    // if (localStorage.theme === 'dark'  || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.body.classList.add('dark');

    // } else {
    //   document.body.classList.remove('dark');
    // }
    document.title = to.meta.title;
    next
    from
});


router.beforeEach(async(to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth && !await getAuthUser()) {
        next('login')
    }
    else if (requiresAuth && await isUserVerified() === false) {
        next('login')
    }
    else {
        next()
    }
    from
});


export default router;
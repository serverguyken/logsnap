
import { createWebHistory, createRouter } from 'vue-router';
import Main from '../components/Main.vue';
import Auth from '../components/Auth.vue';
import Features from '../components/Features.vue'
import Pricing from '../components/Pricing.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
<<<<<<< HEAD
import Projects from '../components/Projects.vue'
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
=======
import Issues from '../components/Issues.vue'
import EditIssue from '../components/EditIssue.vue'
import Backlog from '../components/Backlog.vue'
import Todo from '../components/Todo.vue'
import Settings from '../components/Settings.vue'
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
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
             title: "Log in | {{site.logsnap.site}}"
         }
     },
     {
         path: '/signup',
         name: 'signup',
         component: Auth,
         meta: {
             title: "Sign up | LogSnap"
         }
     },
     {
         path: "/features",
         component: Features,
         redirect: "/",
         meta: {
             title: "Features | LogSnap"
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
     {
         path: "/dashboard/issues",
         component: Issues,
         meta: {
            title: "Issues| Dashboard"
        },
     },
     {
<<<<<<< HEAD
         path: "/dashboard/projects/",
         component: Projects,
         meta: {
            title: "Projects | LogSnap"
        },
     },
     {
         name: "Issue",
         path: "/dashboard/issues/:id",
         component: EditViewIssue,
=======
         name: "Issue",
         path: "/dashboard/issues/:id",
         component: EditIssue,
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
         meta: {
            title: "Issue"
        },
     },
     {
         path: "/dashboard/backlog",
         component: Backlog,
         meta: {
            title: "Backlog | Dashboard"
        }
     },
     {
         path: "/dashboard/todo",
         component: Todo,
         meta: {
            title: "Todo| Dashboard"
        }
     },
     {
<<<<<<< HEAD
         path: "/settings/account/profile",
         component: ProfileSettings,
         meta: {
            title: "Profile"
        },
     },
     {
         path: "/settings/account/notifications",
         component: NotificationsSettings,
         meta: {
            title: "Notifications"
        },
     },
     {
         path: "/settings/account/preferences",
         component: PreferencesSettings,
         meta: {
            title: "Preferences"
        },
     },
     {
         path: "/settings/workspace",
         component: WorkspaceSettings,
         meta: {
            title: "Workspace"
        },
     },
     {
         path: "/settings/workspace/users",
         component: UsersSettings,
         meta: {
            title: "Users"
        },
     },
     {
         path: "/settings/workspace/integrations",
         component: IntegrationsSettings,
         meta: {
            title: "Integrations"
        },
     },
     {
         path: "/settings/workspace/api",
         component: APISettings,
         meta: {
            title: "API"
        },
     },
     {
         path: "/settings/workspace/plans",
         component: PlansSettings,
         meta: {
            title: "Plans"
        },
     },
     {
         path: "/settings/workspace/billing",
         component: BillingSettings,
         meta: {
            title: "Billing"
        },
     },

=======
         path: "/dashboard/settings",
         component: Settings,
         meta: {
            title: "Settings"
        }
     },
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
     {
         path: "/:pathMatch(.*)*",
         component: NotFound,
         meta: {
             title: "404 | Not Found"
         }
     }
]

const router =  createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'exact-active',
  routes,
});

router.afterEach((to, from) => {
    // if (localStorage.theme === 'dark'  || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.body.classList.add('dark');
      
    // } else {
    //   document.body.classList.remove('dark');
    // }
    document.title = to.meta.title;
<<<<<<< HEAD
    
=======
>>>>>>> 5696b4f01ac4433198711207dde9056e2f4ae783
    from
  })

export default router;
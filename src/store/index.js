import { createStore } from 'vuex'
import { getAuthUser, userDB } from '../config/functions'

const state = {
    user: {
        isLoggedIn: false,
        data: null,
    },
    projectDatas: [],
    getPreviousRoute: "",
    isWorkSpaceName: "",
    issues: [
        {
            id: "IS#1",
            description: "Fix header on pricing page",
            createdAt: "01/31/2021",
            status: "IN PROGRESS",
            priority: "Low",
            statusColor: "text-status-inProgressDark",
            statusBackgroundColor: "bg-status-inProgressLight",
            priorityColor: "text-green-600",
            priorityBackgroundColor: "bg-green-900",
        },
        {
            id: "IS#2",
            description: "Login button not working on mobile",
            createdAt: "02/08/2021",
            status: "DONE",
            priority: "HIGH",
            statusColor: "text-white",
            statusBackgroundColor: "bg-green-400",
            priorityColor: "text-red-600",
            priorityBackgroundColor: "bg-green-900",
        },
        {
            id: "IS#3",
            description: "Trying to see if text the ellipisi will work",
            createdAt: "02/08/2021",
            status: "CANCELLED",
            priority: "MEDIUM",
            statusColor: "text-white",
            statusBackgroundColor: "bg-red-600",
            priorityColor: "text-yellow-400",
            priorityBackgroundColor: "bg-green-900",
        },

    ]
};

const getters = {
    getallIssues: (state) => state.issues,
    getIssue: (state) => (id) => state.issues.filter(issue => {
        return issue.id === id
    }),
    getDoneIssues: (state) => state.issues.filter(issue => {
        return issue.status === "DONE"
    }),
    getUser(state) {
        return state.user
    },
    getUserID(state) {
        return state
    },
    getProjectsDatas: (state) => state.projectDatas,
    deleteProject: (state) => (id) =>  state.projectDatas.filter(project => {
        return project.id === id
    }),
    getPreviousRoute: (state) => state.getPreviousRoute,
    getWorkSpaceName: (state) => state.isisWorkSpaceName
};

const actions = {
    async viewIssue({commit}, id) {
      const issue = await state.issues.filter(issue => {
          return issue.id === id
      })
       commit('viewIssue', issue)
    },
    fetchUser({ commit }, user) {
        commit("SET_ISLOGGED_IN", user !== null);
        if(user) {
            commit("SET_USER", {
                displayName: user.displayName,
                email: user.email
            })
        }
        else {
            commit("SET_USER", null);
        }
    },
    async deleteProject ({commit },path)  {
         await getAuthUser().then(user => {
          const isUserDB = userDB.doc(user.uid)
            isUserDB.collection("projects").doc(path).delete()
            commit('DELETE_PROJECT', path)
        })
      }

};

const mutations = {
    viewIssue: (state, id) =>  state.issues.filter(issue => {
        return issue.id === id
    }),
    SET_ISLOGGED_IN(state, value) {
        state.user.isLoggedIn = value
    },
    SET_USER(state, data) {
        state.user.data = data
    },
    SET_PROJECTS_DATAS (state, datas) {
     state.projectDatas = datas
    },
    SET_PREVIOUS_ROUTE (state, route) {
     state.getPreviousRoute = route 
    },
    DELETE_PROJECT: (state, path) => state.projectDatas = state.projectDatas.filter(project => project.path !== path),
    SET_WORKSPACE_NAME (state, workSpaceName) {
        state.isWorkSpaceName = workSpaceName
    }
};


export default createStore ({
    state,
    getters,
    actions,
    mutations
})
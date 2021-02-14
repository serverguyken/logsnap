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
    issuesData: [],
    getIssue: [],
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
    getWorkSpaceName: (state) => state.isisWorkSpaceName,
    getIssuesDatas: (state) => state.issuesData,
    getIssueData: (state) => state.getIssue,
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
           if(confirm("Areyou sure?")) {
            isUserDB.collection("projects").doc(path).delete()
            commit('DELETE_PROJECT', path)
           }
           else {
               return false
           }
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
    SET_PROJECTS_DATAS (state, data) {
     state.projectDatas = data
    },
    SET_PREVIOUS_ROUTE (state, route) {
     state.getPreviousRoute = route 
    },
    DELETE_PROJECT: (state, path) => state.projectDatas = state.projectDatas.filter(project => project.path !== path),
    SET_WORKSPACE_NAME (state, workSpaceName) {
        state.isWorkSpaceName = workSpaceName
    },
    SET_ISSUES_DATAS (state, data) {
        state.issuesData = data
    },
    SET_ISSUE (state, data) {
         state.getIssue = data
    }
};


export default createStore ({
    state,
    getters,
    actions,
    mutations
})
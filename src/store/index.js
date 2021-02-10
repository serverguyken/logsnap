import { createStore } from 'vuex'

const state = {
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
    })
};

const actions = {
    async viewIssue({commit}, id) {
      const issue = await state.issues.filter(issue => {
          return issue.id === id
      })
       commit('viewIssue', issue)
    }

};

const mutations = {
    viewIssue: (state, id) =>  state.issues.filter(issue => {
        return issue.id === id
    })
};


export default createStore ({
    state,
    getters,
    actions,
    mutations
})
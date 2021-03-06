import { firebase } from './firebase'
import { v4 as uuidv4 } from 'uuid'
import store from '../store'
import router from '../router/routes'

const auth: any = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage


// Auth Functions
export const getAuthUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
}

export const isUserVerified = async () => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    return user ? uuser.emailVerified : false
  })

}

export const sendEmailVerification = (settings: any) => {
  const actionCodeSettings = {
    url: "http://logsnap.app/login",
    handleCodeInApp: true,
  };
  auth.currentUser.sendEmailVerification(settings ? settings : actionCodeSettings)
}
// Auth Functions



// Database Functions
export const userDB = db.collection("users")
export const tenantDB = db.collection("tenants")
export const uploadFile = (path: any, file: any) => {
  return storage().ref(path).put(file)
}

export const getTenant = async (id: any) => {
  const tenant = await tenantDB.doc(id).get();
  return tenant.data() ? tenant.data() : "No tenant found in the database"
}

export const createUser = (id: any, user: any) => {
  return userDB.doc(id).set(user)
}


export const getUser = async (id: any) => {
  const user = await userDB.doc(id).get();
  return user.data() ? user.data() : "No user found in the database"
}

export const updateUser = (id: any, user: any) => {
  return userDB.doc(id).update(user)
}

export const deleteUser = (id: any) => {
  return userDB.doc(id).delete()
}


export const createProject = async (projectData: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    return isUserDB.collection("projects").add(projectData)
  })
}

export const getAllProjects = async () => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").orderBy('name', 'asc').onSnapshot(querySnapshot => {
      let projectDatas: any = []
      querySnapshot.forEach(doc => {
        projectDatas.push(doc.data())
      })
      store.commit('SET_PROJECTS_DATAS', projectDatas)
    })
  })
}

export const createIssue = async (projectPath: any, issueData: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    return isUserDB.collection("projects").doc(projectPath).collection("issues").add(issueData)
  })
}

export const getIssue = async (projectPath: any, id: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("issues").doc(id).get().then(data => {
      store.commit('SET_ISSUE', data.data())
    })
  })
}

export const updateIssue = async (projectPath: any, id: any, data: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("issues").doc(id).update(data)
  })
}


export const deleteIssue = async (projectPath: any, id: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("issues").doc(id).delete()
  })
}

export const getAllIssues = async (projectPath: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("issues").orderBy('timestamp', 'asc').onSnapshot(querySnapshot => {
      let issuesData: any = []
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        issuesData.push(doc.data());
      })
      store.commit('SET_ISSUES_DATAS', issuesData)
    })
  })
}
export const createTodo = async (projectPath: any, todoData: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    return isUserDB.collection("projects").doc(projectPath).collection("todos").add(todoData)
  })
}

export const updateTodo = async (projectPath: any, id: any, data: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("todos").doc(id).update(data)
  })
}

export const deleteTodo = async (projectPath: any, id: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("todos").doc(id).delete()
  })
}

export const getTodos = async (projectPath: any) => {
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects").doc(projectPath).collection("todos").orderBy('timestamp', 'desc').onSnapshot(querySnapshot => {
      let todosData: any = []
      querySnapshot.forEach(doc => {
        todosData.push(doc.data());
      })
      store.commit('SET_TODOS', todosData)
    })
  })
}





export const getProjectPath = async (path: any) => {
  if(path === undefined) {
    throw new Error ("Path not specified")
  }
  if(path === "") {
    throw new Error ("Path cannot be empty")
  }
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    isUserDB.collection("projects")
    .doc(path)
    .get()
    .then((doc: any) => {
      if(!doc.exists) {
        location.href = "/dashboard/projects"
      }
    })
  })
}
export const getPath = async (projectPath: any, path: any, collection: string) => {
  if(projectPath === undefined || path === undefined && collection === undefined) {
    throw new Error ("Path and Collection must be specified")
  }
  if(projectPath === undefined) {
    throw new Error ("ProjectPath not specified")
  }
  if(path === undefined) {
    throw new Error ("Path not specified")
  }
  if(collection === undefined) {
    throw new Error ("Collection not specified")
  }
  if(projectPath === "" && path === "" && collection === "") {
    throw new Error ("Path and Collection cannot be empty")
  }
  if(projectPath === "") {
    throw new Error ("ProjectPath cannot be empty")
  }
  if(path === "") {
    throw new Error ("Path cannot be empty")
  }
  if(collection === "") {
    throw new Error ("Collection cannot be empty")
  }
  return await getAuthUser().then(user => {
    const uuser: any = user
    const isUserDB = userDB.doc(uuser.uid)
    switch (collection) {
      case 'Issues':
        isUserDB.collection("projects")
          .doc(projectPath)
          .collection("issues")
          .doc(path)
          .get()
          .then((doc: any) => {
            if (!doc.exists) {
              location.href = "/dashboard/projects"
            }
          });
        break;
      case 'Todos':
        isUserDB.collection("projects")
          .doc(path)
          .collection("todos")
          .get()
          .then((doc: any) => {
            console.log("checking if todo path is valid ....");
            if (!doc.exists) {
               location.href = "/dashboard/projects"
            }
          });
        break;
    }
  })
}

// Database Functions




// Basic Functions
export const generateUID = () => {
  return uuidv4().split("-")[0]
};

export const getPreviousRoute = () => {
  router.beforeEach((to, from) => {
    to
    store.commit('SET_PREVIOUS_ROUTE', from.fullPath)
  })
}

export {
  auth,
  db,
  storage
}
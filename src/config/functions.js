import { firebase } from './firebase'
import { ref, onUnmounted } from "vue"
import { v4 as uuidv4 } from 'uuid'
import store from '../store'
import router from '../router/routes'

const auth = firebase.auth()
const db = firebase.firestore()



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
    return user ? user.emailVerified : false
  })

}

export const sendEmailVerification = (settings) => {
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

export const getTenant = async id => {
  const tenant = await tenantDB.doc(id).get();
  return tenant.data() ? tenant.data() : "No tenant found in the database"
}

export const createUser = (id, user) => {
  return userDB.doc(id).set(user)
}

export const getUser = async id => {
  const user = await userDB.doc(id).get();
  return user.data() ? user.data() : "No user found in the database"
}

export const updateUser = (id, user) => {
  return userDB.doc(id).update(user)
}

export const deleteUser = id => {
  return userDB.doc(id).delete()
}
export const useLoadUsers = () => {
  const users = ref([])
  userDB.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}

export const createProject = async (projectData) => {
  return await getAuthUser().then(user => {
    const isUserDB = userDB.doc(user.uid)
    return isUserDB.collection("projects").add(projectData)
  })
}

export const getAllProjects = async () => {
  return await getAuthUser().then(user => {
    const isUserDB = userDB.doc(user.uid)
    isUserDB.collection("projects").orderBy('name', 'asc').onSnapshot(querySnapshot => {
      let projectDatas = []
      querySnapshot.forEach(doc => {
        projectDatas.push(doc.data())
      })
      store.commit('SET_PROJECTS_DATAS', projectDatas)
    })
  })
}
// Database Functions



// Basic Functions
export const generateUID = () => {
  return uuidv4().split("-")[0]
};

export const getPreviousRoute = () => {
  router.beforeEach((to,from) => {
    to
    store.commit('SET_PREVIOUS_ROUTE', from.fullPath)
  })
}

export {
  auth
}
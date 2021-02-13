<template>
    <div class="bg-white">
        <Loader v-show="isLoading" />
        <div>
           <div class="_k5o4" v-show="isLogin">
               <Login />
           </div>
          <div class="itk4" v-show="isSignUp">
               <Signup />
          </div>
        </div>
        
    </div>
</template>
<script>
import Loader from './Loader'
import Login from "./Login"
import Signup from "./Signup"
export default {
    name: 'Auth',
    components: {
        Login,
        Signup,
        Loader
    },
    data() {
        return {
            isLogin: false,
            isSignUp: false,
            isLoading: true,
        }
    },
    mounted() {
        setTimeout(() => {
        const routeName = this.$route.name;
        // const query = this.$route.query.method
        // switch(query) {
        //     case "login": 
        //       this.isLogin = true
        //     break;
        // }
        switch (routeName) {
            case "login":
                this.isLogin = true
                break;
            case "signup":
                this.isSignUp = true
                break;
            default:
                break;
        }
            this.isLoading = false;
        },1000)
    },
    watch:{
        $route (to,from) {
            const routeName = to.name;
        switch (routeName) {
            case "login":
                this.isLogin = true
                this.isSignUp = false
                break;
            case "signup":
                this.isSignUp = true
                this.isLogin = false
                break;
            default:
                break;
        }
        from
        }
    }
}
</script>
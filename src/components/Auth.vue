<template>
    <div>
        <div>
           <div class="login-component" v-show="isLogin">
               <Login />
           </div>
          <div class="signup-component" v-show="isSignUp">
               <Signup />
          </div>
        </div>
        
    </div>
</template>
<script>
import Login from "./Login"
import Signup from "./Signup"
export default {
    name: 'Footer',
    data() {
        return {
            isLogin: false,
            isSignUp: false,
        }
    },
    components: {
        Login,
        Signup,
    },
    mounted() {
        const routeName = this.$route.name;
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
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
}
</script>
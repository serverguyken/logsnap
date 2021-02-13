<template>
    <div>
       <Layout>
           <div class="nspddmm bg-main-dark h-screen flex justify-center items-center" id="404_e">
               <div class=" mt-16 text-center">
                   <img src="https://res.cloudinary.com/serveryguken/image/upload/v1613080680/Projects/logsnap/imgs/404_zaabcb.svg" class="w-32 block ml-auto mr-auto">
                    <h1 class="text-white font-semibold pt-5 mb-5 text-6xl">Not Found</h1>
                    <div class="urropw_3pr0">
                   <div class="border border-main-normal p-2 mb-10 text-white">
                       The requested page does not exist: <span class="text-main-normal">{{requestURL}}</span>
                   </div>
               </div>
               </div>
           </div>
       </Layout>
    </div>
</template>
<script>
import Layout from './Layout'
export default {
    name: 'NotFound',
    data() {
        return {
            requestURL: ""
        }
    },
    components: {
        Layout
    },
    mounted() {
        this.requestURL = this.$route.path
    }
}
</script>
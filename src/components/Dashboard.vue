<template>
    <div>
        <div class="loader-comp">
            <Loader v-if="!isLoaded" />
        </div>
        <div id="page-dashboard" v-if="isLoaded">
           <div class="dashboard flex flex-row">
                  <div id="dash-left" class="dash-left" >
                       <LeftSideBar />
                  </div>
                  <div id="dash-middle" class="dash-middle w-4/6 pl-5">
                     <slot></slot> 
                  </div>
                  <div class="preview w-2/6">
                      <Preview />
                  </div>
              </div>
        </div>
    </div>
</template>
<script>
import Loader from './Loader'
import LeftSideBar from './LeftSideBar'
import Preview from './Preview'
export default {
    name: "Dashboard",
    data() {
        return {
            isScrolling: false,
            componetLoaded: false,
            isLoaded: false,
        }
    },
    components: {
        Loader,
        LeftSideBar,
        Preview
    },
    mounted() {
        setTimeout(() => {this.isLoaded = true},1000)
    }
}
</script>
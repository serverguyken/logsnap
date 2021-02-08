<template>
    <div>
        <div id="page-settings">
           <div class="settings flex  flex-row h-screen">
                  <div id="left" class="w-48">
                       <LeftSideBarSettings />
                  </div>
                  <div id="middle" class="flex-auto main left-border h-screen space-mb-sides p-4">
                     <slot></slot> 
                  </div>
              </div>
        </div>
    </div>
</template>
<script>
import LeftSideBarSettings from './LeftSideBarSettings'
export default {
    name: "Dashboard",
    components: {
        LeftSideBarSettings,
    }
}
</script>
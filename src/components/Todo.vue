<template>
    <div>
        <div id="page-todo">
           <div class="all-main">
               <Dashboard>
                <h1>Todo</h1>
             </Dashboard>
           </div>
        </div>
    </div>
</template>
<script>
import Dashboard from './Dashboard'
export default {
    name: "Todo",
    components: {
        Dashboard
    }
}
</script>
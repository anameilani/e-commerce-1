<template>
    <div>
        <navbarCust></navbarCust>
        <div class="row">
            <div class="col-sm-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import navbarCust from '@/components/navbarCust.vue'

export default {
    name: 'catalog',
    components:{
        navbarCust,
    },
    
}
</script>

<style>

</style>

<template>
    <div>   
        <navbarAdmin></navbarAdmin>
        <div class="row">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import navbarAdmin from '@/components/navbarAdmin.vue'
import formAdd from '@/components/formAdd.vue'


export default {
    name: 'addItem-page',
    components:{
        navbarAdmin,
        formAdd
    }
}
</script>

<style>

</style>

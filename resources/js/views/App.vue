<template>
    <div>
        <h1>Lista Post</h1>
        <router-link to="/">Posts</router-link>
        <router-link to="/Contact" class="g">Vai Alla pagina Contatti</router-link>
        <router-view></router-view>



    </div>

</template>

<script>
export default {
    name: 'App'

}
</script>

<style scoped lang="scss">

</style>

<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h2> {{ post.title }} </h2>

        </div>


    </div>

</template>
<script>

export default {
    name: 'DetailPost',
    data() {
        return {
            posts: undefined,
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.loadPage('api/posts/' + id);
    },
    methods: {
        loadPage(url) {
            console.log(url);
            axios.get(url).then((response => {
                this.posts = response.data.resultsS;
                console.log(this.posts);
            }
            ))
        }
    }


}
</script>

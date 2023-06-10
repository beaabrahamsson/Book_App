<template>
    <div class="container">
        <div class="mt-6"></div>
        <!-- page title -->
        <h2 class="title is-2">Böcker i biblioteket</h2>
        <div class="mt-6"></div>
        <!-- list of books -->
        <Books />
    </div>
</template>

<script>
    import Books from "../components/Books.vue"

    export default {
        //components
        components: {
            Books
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        font-size: 2em;
    }

    .container {
        margin: 100px;
    }

    @media screen and (max-width: 640px) {
        .container {
            width: 90%;
            margin: 20px;
        }
    }
</style>
<template>
    <div class="container">
        <div class="mt-6"></div>
        <!-- page title -->
        <h2 class="title is-2">Lägg till bok i biblioteket</h2>
        <!-- form to add book -->
        <AddBook/>
        <div class="mt-6"></div>
    </div>
</template>

<script>
    import AddBook from "../components/AddBook.vue"

    export default {
        //components
        components: {
            AddBook
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
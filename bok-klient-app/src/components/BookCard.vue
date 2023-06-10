<template>
    <div class="column">
        <!-- book card -->
        <div class="card">
            <div class="card-image">
                <figure class="image is-3by4">
                <img :src="title.image" alt="Placeholder image">
                </figure>
            </div>
            </div>
            <div class="card">
            <div class="card-content">
                <div class="content">
                    <h1 class="title is-4">{{title.title}}</h1>
                    <p>{{title.author}}</p>
                </div>
            </div>
            </div>
            <div class="card">
                <footer class="card-footer">
                    <RouterLink class="card-footer-item" :to="'/book/' + title._id">Läs mer</RouterLink>
                </footer>
            </div>
    </div>
</template>

<script>
import { isIntegerKey } from '@vue/shared';

    export default {
        //props
        props: {
            title: Object,
            author: String,
            image: String,
            published: Date,
            pages: Number,
            isbn: Number,
            language: String,
            rating: Number
        }
    }
</script>

<style scoped>
    .card-image {
    width: 250px;
    }

    .card {
    width: 250px;
    }

    .card-content {
    height: 150px;
    }

    .bookCard {
    margin-right: 50px;
    }

    a {
        color: #345457;
    }

    a:hover {
        color: #88A6A8;
    }
</style>
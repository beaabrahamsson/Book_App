<template>
    <!-- book details -->
    <div class="hero-body" v-if="title._id == this.$route.params.id">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-5">
                            <figure class="image is-4by6">
                                <img :src=title.image alt="Description">
                            </figure>
                        </div>
                        <div class="column is-6 is-offset-1">
                            <h1 class="title is-2">{{title.title}}</h1>
                            <h2 class="subtitle is-4">{{title.author}}</h2>
                            <p>ISBN: {{title.isbn}}</p>
                            <p>{{title.pages}} sidor</p>
                            <p>Publicerades första gången {{moment(title.published).format('YYYY-MM-DD')}}</p>
                            <p>Språk: {{title.language}}</p>
                            <p>Mitt betyg: {{title.rating}}/5</p>
                            <br>
                            <p class="has-text-centered">
                                <a class="button is-medium is-outlined">
                                    <RouterLink :to="'/update/' + title._id">Uppdatera bok</RouterLink>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </template>
    
    <script>
    import { isIntegerKey } from '@vue/shared';
    import moment from 'moment'
    
        export default {
            data() {
            return {
                moment: moment
            }
        },
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
        a {
            color: #345457;
        }

        .button {
            border-color: #345457 !important;
        }

        .button:hover {
            border-color: #88A6A8 !important;;
        }

        .column p {
            margin-bottom: 10px;
        }

        .subtitle {
            margin-bottom: 50px;
        }
        
        @media screen and (max-width: 640px) {
            .container {
                width: 90%;
            }

            .image {
                width: 70%;
                margin: auto;
            }
        }
    </style>
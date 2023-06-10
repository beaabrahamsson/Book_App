<template>
    <!-- book details -->
    <BookPage @deleteBook="deleteBook(title._id)" v-for="title in books" :title="title" :key="title.id" />
</template>

<script>
    import Books from "../components/Books.vue"
    import AddBook from "../components/AddBook.vue"
    import BookCard from "../components/BookCard.vue"
    import BookPage from "../components/BookPage.vue"

    export default {
        data() {
            return {
                books: []
            }
        },
        //components
        components: {
            Books,
            AddBook,
            BookCard,
            BookPage
        },
        //methods
        methods: {
            //get books
            async getBooks() {
                const resp = await fetch("http://localhost:3000/api");

                const data = await resp.json();

                this.books = data;
            },
            //delete books
            async deleteBook(id) {
                const resp = await fetch("http://localhost:3000/api/" + id, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }
                });

                const data = await resp.json();

                this.getBooks();
            }
        },
        //mounted
        mounted() {
            this.getBooks();
        }
    }
</script>
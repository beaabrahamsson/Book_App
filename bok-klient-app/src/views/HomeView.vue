<template>
  <div class="mt-6"></div>
  <section>
    <div class="container">
    <div class="columns is-centered is-mobile">
      <BookCard @deleteBook="deleteBook(title._id)" v-for="title in books" :title="title" :key="title.id" />
    </div>
  </div>
  </section>
</template>

<script>
    import Books from "../components/Books.vue"
    import AddBook from "../components/AddBook.vue"
    import BookCard from "../components/BookCard.vue"

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
            BookCard
        },
        //methods
        methods: {
            async getBooks() {
                const resp = await fetch("http://localhost:3000/api");

                const data = await resp.json();

                this.books = data;
            },
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
        mounted() {
            this.getBooks();
        }
    }
</script>

<style scoped>
  h2 {
      text-align: center;
      font-size: 2em;
  }

  .message {
    width: 70%;
    margin: auto;
  }

  .columns {
  flex-wrap: wrap;
  text-align: center;
}

.container {
  margin: auto;
}

@media screen and (max-width: 640px) {
  .container {
    width: 90%;
    margin-left: 100px;
  }
}
</style>
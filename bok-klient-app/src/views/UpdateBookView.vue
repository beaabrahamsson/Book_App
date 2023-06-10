<script>
    import Books from "../components/Books.vue"
    import AddBook from "../components/AddBook.vue"
    import moment from 'moment'

    export default {
        data() {
            return {
                books: [],
                id: "",
                title: "",
                image: "",
                author: "",
                published: "",
                isbn: "",
                pages: "",
                language: "",
                rating: "",
                error: "",
                message:"",
                moment: moment
            }
        },
        //components
        components: {
            Books,
            AddBook,
        },
        //methods
        methods: {
            async updateBook() {
                try {
                    //check title input
                    if(this.title.length !== 0) {

                    let bookBody = {
                            id: this.$route.params.id,
                            title: this.title,
                            image: this.image,
                            author: this.author,
                            published: this.published,
                            isbn: this.isbn,
                            pages: this.pages,
                            language: this.language,
                            rating: this.rating
                        };

                    let id = this.$route.params.id;

                    //patch request
                    const resp = await fetch(`http://localhost:3000/api/${id}`, {
                            method:"PATCH",
                            headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json",
                            },
                            body: JSON.stringify(bookBody)
                        });

                        const data = await resp.json();

                        //check if created
                        if(resp.status == 200) {
                            this.message = "Bok uppdaterad";
                        } else {
                            //if not 200, throw error 
                            throw new Error('Alla fält måste fyllas i');
                        }

                        //empty form
                        this.title = "";
                        this.image = "";
                        this.author = "";
                        this.published = "";
                        this.isbn = "";
                        this.pages = "";
                        this.language = "";
                        this.rating = "";

                        this.getBooks();

                    }
                    } catch (e) {
                        //set error
                        this.error = e;
                    }
                },

                async getBooks() {

                    const resp = await fetch("http://localhost:3000/api", {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json",
                        }
                    });

                    this.books = await resp.json();

                    //get default input value
                    for (let i = 0; i < this.books.length; i++) {
                        if (this.books[i]._id == this.$route.params.id) {
                            this.title = this.books[i].title;
                            this.author = this.books[i].author;
                            this.image = this.books[i].image;
                            this.published = this.books[i].published.split('T')[0];
                            this.pages = this.books[i].pages;
                            this.isbn = this.books[i].isbn;
                            this.language = this.books[i].language;
                            this.rating = this.books[i].rating;
                        }
                    }

                }
        },
        //mounted
        mounted() {
            this.getBooks();
        }


    }
</script>

<template>
    <div class="container">
        <div class="mt-6"></div>
        <!-- form to add product -->
        <form @submit.prevent="updateBook()" id="form">
            <!-- if error message exists, show error message -->
            <article v-if="error" class="message is-danger">
                <div class="message-body">
                    {{error}}
                </div>
            </article>
            <!-- if message exists, show message -->
            <article v-if="message" class="message is-success">
                <div class="message-body">
                    {{message}}
                </div>
            </article>
            <h3 class="title is-3">Uppdatera bok</h3>
            <br>
            <div class="field">
            <label class="label">Titel</label>
            <div class="control">
                <input v-model="title" class="input" type="text" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Författare</label>
            <div class="control">
                <input v-model="author" class="input" type="text" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Bild URL</label>
            <div class="control">
                <input v-model="image" class="input" type="text" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Publiceringsdatum</label>
            <div class="control">
                <input v-model="published" class="input" type="text" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Antal sidor</label>
            <div class="control">
                <input v-model="pages" class="input" type="number" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">ISBN Nummer</label>
            <div class="control">
                <input v-model="isbn" class="input" type="number" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Språk</label>
            <div class="control">
                <input v-model="language" class="input" type="string" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Betyg</label>
            <div class="select">
            <select v-model="rating">
                <option value="" disabled selected hidden>Välj beytyg</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
        </div>
            <div class="mt-5"></div>
            <div class="field">
                <div class="condivol">
                    <input class="button is-light" type="submit" value="Uppdatera">
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .container {
        margin: 100px;
    }

    h3 {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
  .container {
    width: 90%;
    margin: 20px;
  }
}
</style>
<template>
            <!-- form to add book -->
        <form @submit.prevent="addBook()" id="form">
            <br>
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
                    <input v-model="published" class="input" type="text" placeholder="YYYY-MM-DD">
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
                        <input class="button is-light" type="submit" value="Lägg till">
                    </div>
                </div>
        </form>
</template>

<script>
    export default {
        data() {
            return {
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
            }
        },
        //emits
        emits: ["bookAdded"],
        //methods
        methods: {
            async addBook() {
                try {

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

                    //post request
                    const resp = await fetch(`http://localhost:3000/api`, {
                            method:"POST",
                            headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json",
                            },
                            body: JSON.stringify(bookBody)
                        });

                        const data = await resp.json();

                        //check if created
                        if(resp.status == 200) {
                            this.message = "Bok tillagd";
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

                        this.$emit("bookAdded");

                    } catch (e) {
                        //set error
                        this.error = e;

                }
            },

            //method to get books
            async getBooks() {

            const resp = await fetch("http://localhost:3000/api", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });

            this.books = await resp.json();
            }

            },
            //mounted
            mounted() {
            this.getBooks();
            }
            
        }
        
    
</script>
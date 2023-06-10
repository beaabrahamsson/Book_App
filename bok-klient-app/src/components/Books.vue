<template>
    <div class="columns">
            <div class="column">
                <!-- searchbar -->
                <div class="field has-addons">
                    <div class="control">
                        <input v-model="search" class="input" type="text" placeholder="Sök boknamn">
                    </div>
                </div>
                <div class="mt-6"></div>
                <!-- table with books -->
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="click" @click="sort('isbn')">ISBN</th>
                                <th class="click" @click="sort('title')">Titel</th>
                                <th class="click" @click="sort('author')">Författare</th>
                                <th class="click" @click="sort('language')">Språk</th>
                                <th class="click" @click="sort('published')">Utgiven</th>
                                <th class="click" @click="sort('pages')">Antal sidor</th>
                                <th class="click" @click="sort('rating')">Betyg</th>
                                <th>Uppdatera</th>
                                <th>Ta bort</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="title in sortedBooks" :key="title._id">
                            <td>{{title.isbn}}</td>
                            <td><a><RouterLink :to="'/book/' + title._id">{{title.title}}</RouterLink></a></td>
                            <td>{{title.author}}</td>
                            <td>{{title.language}}</td>
                            <td>{{moment(title.published).format('YYYY-MM-DD')}}</td>
                            <td>{{title.pages}}</td>
                            <td>{{title.rating}}</td>
                            <td><a><RouterLink :to="'/update/' + title._id"><i class="fa-solid fa-pen-to-square fa-xl"></i></RouterLink></a></td>
                            <td id="delete" class="delete is-medium" @click="deleteBook(title._id)">Ta bort</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="mt-4"></div>
                    <!-- pagination -->
                    <p>
                    <button class="pagination-previous" @click="prevPage">Föregående sida</button> 
                    <button class="pagination-next" @click="nextPage">Nästa sida</button>
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
    //imports
    import AddBook from "../components/AddBook.vue"
    import moment from 'moment'
    import '@fortawesome/fontawesome-free/css/all.min.css'

    export default {
        data() {
            return {
                books: [],
                currentSort:'title',
                currentSortDir:'asc',
                pageSize:7,
                currentPage:1,
                search: "",
                moment: moment,
            }
        },
        //computed
        computed: {
            sortedBooks() {
                return this.books.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            }).filter((row, index) => {
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
            }).filter(book => book.title.toLowerCase().includes(this.search.toLowerCase()))
            
            
            ;
            },

        },  

        //components
        components: {
            AddBook,
        },
        //methods
        methods: {
            async getBooks() {

                const resp = await fetch("http://localhost:3000/api", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    }
                });

                this.books = await resp.json();

                },

            //sort products
            async sort(s) {
                //if s == current sort, reverse
                if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
                this.currentSort = s;
            },

            //function to show next page (pagination)
            nextPage:function() {
                if((this.currentPage*this.pageSize) < this.books.length) this.currentPage++;
            },
            //function to show previous page (pagination)
            prevPage:function() {
                if(this.currentPage > 1) this.currentPage--;
            },

            //delete product
            async deleteBook(id) {

                //confirmation alert
                if(confirm("Vill du verkligen ta bort boken?")){

                    const resp = await fetch("http://localhost:3000/api/" + id, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json",
                        }
                    });

                    const data = await resp.json();

                    this.getBooks();
                }
            }
        },

        //mounted
        mounted() {
            this.getBooks();
        }
    }
</script>

<style scoped>

    .fa-pen-to-square {
        color: #88A6A8;
        margin-left: 30px;
    }

    .fa-pen-to-square:hover {
        color: #88a6a853;
    }

    #delete {
        margin-top: 10px;
        margin-left: 30px;
    }

    .delete {
        background-color: #88A6A8;;
    }

    .delete:hover {
        background-color: #88a6a853;;
    }

    a {
        color: #345457;
    }

    a:hover {
        color: #88A6A8
    }

    .click {
        cursor: pointer;
    }

    #search {
        background-color: lightgray;
        color: black;
    }

    .pagination-previous {
        cursor: pointer;
    }
    .pagination-next {
        cursor: pointer;
    }

    @media screen and (max-width: 640px) {
  .table {
    width: 90%;
  }
}
</style>
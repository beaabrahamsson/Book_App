import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import UpdateBookView from '../views/UpdateBookView.vue'
import BookPageView from '../views/BookPageView.vue'
import AddBookView from '../views/AddBookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/addbook',
      name: 'addbook',
      component: AddBookView
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateBookView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookPageView
    }
  ]
})

export default router

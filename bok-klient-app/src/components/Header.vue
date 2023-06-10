<template>
    <!-- header -->
    <header>
        <section class="hero">
        <div class="hero-body">
            <figure class="image">
                <img src="../assets/READING.png">
            </figure>
        </div>
        </section>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item"><RouterLink to="/">Start</RouterLink></a>
                <a class="navbar-item"><RouterLink to="/books">Böcker</RouterLink></a>
                <a class="navbar-item"><RouterLink to="/addbook">Ny bok</RouterLink></a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    //import
    import { RouterLink } from 'vue-router'
    export default {
        //components
        components: {
            RouterLink
        }
    }

    //mobile navigation
    document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    });
    });

    });
</script>

<style scoped>
    .navbar {
        padding: 10px;
        background-color: #88A6A8;
    }
    .navbar-item {
        font-size: large;
        padding-right: 20px;
    }
    .navbar-item a {
        color: black;
    }

    .hero {
        background-color: #345457;
    }

    img {
        max-width: 300px;
    }

    .image img {
        margin: auto !important;
    }
    
</style>
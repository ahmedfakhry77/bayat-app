<template>
  <nav class="navbar navbar-expand-lg fixed-top py-3">
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand" href="#">
        <img class="logo" src="@/assets/images/logo.png" width="70px" style="border-radius:50%" />
      </a>

      <!-- MOBILE NAV BUTTON -->
      <button
        @click="show = !show"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >

      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
       <!-- <span class="navbar-toggler-icon"></span> -->
      </button>

      <!-- NAV ITEMS -->
      <div class="collapse navbar-collapse" :class="{ 'show': show }" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" dir="rtl">
          <li class="nav-item active menu-active">
            <a v-if="$route.path == '/'" v-scroll-to="'#home'" class="nav-link" href="/">الرئيسية</a>
            <a v-else class="nav-link" href="/">الرئيسية</a>
          </li>
          <li class="nav-item">
            <a v-if="$route.path == '/'" v-scroll-to="'#about'" class="nav-link" href="/#about">عن التطبيق</a>
            <a v-else class="nav-link" href="/#about">عن التطبيق</a>
          </li>
          <li class="nav-item">
            <a v-if="$route.path == '/'" v-scroll-to="'#features'" class="nav-link" href="/#features">المميزات</a>
            <a v-else class="nav-link" href="/#features">المميزات</a>
          </li>
          <li class="nav-item">
            <a v-if="$route.path == '/'" v-scroll-to="'#screens'" class="nav-link" href="/#screens">صور من التطبيق</a>
            <a v-else class="nav-link" href="/#screens">صور من التطبيق</a>
          </li>
          <li class="nav-item">
            <a v-if="$route.path == '/'" v-scroll-to="'#contact'" class="nav-link" href="#contact">تواصل معنا</a>
            <a v-else class="nav-link" href="#contact">تواصل معنا</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/terms">الشروط والأحكام</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'navbar',

  data: function () {
    return {
      show: false
    }
  }
}
</script>

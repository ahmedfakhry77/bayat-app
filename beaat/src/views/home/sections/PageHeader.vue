<template>
  <section class="home">
    <div class="container pt-md-5 mt-md-4">
      <div class="row" dir="rtl">
        <div class="col-lg-12 col-12 mt-lg-0 text-center">
          <img class="home-image" src="@/assets/images/home.png" alt="home" />
        </div>

        <div
          class="col-lg-12 col-12 d-flex align-items-center justify-content-center"
        >
          <div class="text-lg-left text-center">
            <h1 class="text-center">تطبيق بيعات</h1>
            <br />
            <div class="text-center">
              <div class="d-inline-block">
                <a
                  href="https://apps.apple.com/us/app/efrag/"
                  target="_blank"
                >
                  <img
                    class="download-app-btn"
                    src="@/assets/images/app-store.svg"
                    alt="download on app store"
                  />
                </a>
              </div>
              <div class="d-inline-block mx-2">
                <a href="https://play.google.com/store/apps/details?id=com.alexApps.ifrag" target="_blank">
                  <img
                    class="download-app-btn"
                    src="@/assets/images/google-play.png"
                    alt="download on google-play"
                  />
                </a>
              </div>
            </div>

            <p class="mt-4 text-center mb-0">
             ماهو تطبيق بيعات ؟
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'page-header'
}
</script>
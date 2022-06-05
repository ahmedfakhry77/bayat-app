<template>
  <div>
    <!-- CONTACT US -->
    <section id="contact" class="section contact gradient-background">
      <div class="container">
        <h2 class="text-center mb-5 light">تواصل معنا</h2>

        <div class="justify-content-center">
          <!-- SOCIAL LINKS -->
          <div class="social-links d-flex justify-content-center mb-4">
            <a target="_blank" href="https://wa.me/966111111111" class="mx-2 whatsapp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
            <a target="_blank" href="https://twitter.com/efragkw?s=21" class="mx-2 twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100071925625402"
              class="mx-2 facebook"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a target="_blank" href="https://instagram.com/efragkw?utm_medium=copy_link" class="mx-2 instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>

          <!-- CONTACT US FORM -->
          <div class="form" dir="rtl">
            <form action method="post" role="form" class="contactForm">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  placeholder="الاسم"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  v-model="form.email"
                  placeholder="الإيميل"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  v-model="form.message"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="الرسالة"
                ></textarea>
                <div class="validation"></div>
              </div>

              <!-- RESULT MESSAGE -->
              <div v-if="message.text" :class="`alert alert-${message.success ? 'success' : 'danger'}`">
                {{ message.text }}
              </div>

              <div class="text-center">
                <a class="btn btn-light" :href="mailToLink">ارسال</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p class="text-center m-0 py-2 text-white">الادارة كويتية 100%</p>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'contact-us',


  data: function () {
    return {
      form: {},
      loading: false,

      message: {
        text: '',
        success: null,
      }
    }
  },


  computed: {
    mailToLink() {
      const email = 'anbaty';

      let link = `mailto:${email}?`;
      link += `subject=تطبيق الانباطي | الموقع التعريفي`;
      link += '&body=';

      if (this.form.name) link += `Name: ${this.form.name} %0D%0A`;
      if (this.form.email) link += `Email: ${this.form.email} %0D%0A`;
      if (this.form.message) link += `Message: ${this.form.message.replaceAll('\n', '%0D%0A')} %0D%0A`;

      return link;  
    }
  },


  methods: {
    send(form) {
      this.loading = true;

      this.axios.post('/app/contact-us', form)
        .then(() => {
          this.message.success = true;
          this.message.text = 'تم ارسال الرسالة بنجاح';
          this.form = {}
        })
        .catch(() => {
          this.message.success = false;
          this.message.text = 'خطا اثناء ارسال الرسالة';
        })
        .finally(() => {
          this.loading = false; 
        })
    }
  }
}
</script>
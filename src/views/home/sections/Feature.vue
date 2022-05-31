<template>
  <section id="features" class="section features grey">
    <div class="container px-md-5">
      <h2 class="text-center mb-5">المميزات</h2>
      <div class="row pt-4" dir="rtl">
        <div
          :key="index"
          v-for="(feature, index) in features"
          class="col-md-4 col-12 feature text-center"
        >
          <div class="mb-4" style="height: 10em">
            <img :src="feature.image" alt="img" class="img-fluid" />
          </div>
          <p class="separator" style="color: #888888">
            {{ feature.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'feature-section',

  data: function () {
    return {
      features: [
        {
          image: require('@/assets/images/features/search-categories.svg'),
          text: 'عرض اقسام جديده من السلع والخدمات تطرح لأول مره لتلبي كافة الإحتياجات بشمولية'
        },
        {
          image: require('@/assets/images/features/hover-click.svg'),
          text: 'سهولة استخدامه والتنقل بين صفحاته وسهولة رفع الإعلان فيه'
        },
        {
          image: require('@/assets/images/features/marketing-agency.svg'),
          text: ' الشركات والمؤسسات الراغبه في الإعلان في تطبيق بيعات تحصل على عروض إعلانات مميزه جداً'
        },
      ]
    }
  }
};
</script>
<style>

</style>
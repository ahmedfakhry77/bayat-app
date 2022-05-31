<template>
  <v-container fill-height fluid justify-center align-center wrap class="partial-page">
    <v-col class="text-center">
      <p class="partial-label">
        الصفحة غير موجودة - 
        <span class="secondary--text">404</span>
      </p>

      <v-btn color="primary" class="mt-2" outlined @click="$router.back();">رجوع</v-btn>
    </v-col>
  </v-container>
</template>
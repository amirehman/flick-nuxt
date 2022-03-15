<template>
  <div class="site-wrapper">

  <div class="flex items-start justify-between">

      <Sidebar />

    <div class="main-site w-full h-full">

      <Header />


      <div class="content-area w-full p-10">

        <div class="inner text-theme-black">

          <!-- <app-messages></app-messages> -->

          <nuxt />

        </div>
        <!-- inner -->
      </div>
      <!-- content area -->


    </div>
    <!-- main site -->
  </div>


</div>
<!-- site wrapper -->

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

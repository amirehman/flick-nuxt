<template>
  <div>
    <div class="login-container">
        <div class="mb-10 border-b border-gray-300 pb-3">
          <h1 class="text-xl font-semibold text-gray-700"> Profile </h1>
        </div>

        <form class="space-y-5">

          <div class="form-element">
            <label>
              <span class="text-sm font-medium text-gray-700 block">Name</span>
              <input type="email" formControlName="name" class="block mt-2 rounded w-96 border border-gray-400 px-3 p-1 focus:outline-none active:outline-none focus:border-gray-700">
            </label>
          </div>
          <!-- form element -->

          <div class="form-element">
            <label>
              <span class="text-sm font-medium text-gray-700 block">Email</span>
              <button type="email" disabled class="bg-gray-200 text-left block mt-2 rounded w-96 border border-gray-400 px-3 p-1 focus:outline-none active:outline-none focus:border-gray-700"> amir@icon-ad.com </button>
            </label>
          </div>
          <!-- form element -->

          <div class="form-element">
            <label>
              <span class="text-sm font-medium text-gray-700 block">Phone</span>
              <input type="text" formControlName="phone" class="block mt-2 rounded w-96 border border-gray-400 px-3 p-1 focus:outline-none active:outline-none focus:border-gray-700">
            </label>
          </div>
          <!-- form element -->

          <div class="form-element">
              <button type="submit" class="block mt-7 rounded w-auto border border-gray-400 px-5 py-1 focus:outline-none active:outline-none focus:border-gray-700 hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100 transition-all tracking-wider">Update</button>
          </div>
          <!-- form element -->

        </form>
      </div>
      <!-- login container -->

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>

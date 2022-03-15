<template>
  <div class="flex items-center justify-center h-screen">
    <div class="login-container">
      <form class="space-y-5" @submit.prevent="userLogin">

        <div class="form-element">
          <label>
            <span class="text-sm font-medium text-gray-700 block">Email</span>
            <input type="email" v-model="login.email" class="block mt-2 rounded w-96 border border-gray-400 px-3 p-1 focus:outline-none active:outline-none focus:border-gray-700">
          </label>
        </div>
        <!-- form element -->

        <div class="form-element">
          <label>
            <span class="text-sm font-medium text-gray-700 block">Password</span>
            <input type="password" v-model="login.password" class="block mt-2 rounded w-96 border border-gray-400 px-3 p-1 focus:outline-none active:outline-none focus:border-gray-700">
          </label>
        </div>
        <!-- form element -->

        <div class="form-element">
            <button type="submit" class="block mt-2 rounded w-auto border border-gray-400 px-5 py-1 focus:outline-none active:outline-none focus:border-gray-700 hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100 transition-all tracking-wider">Login</button>
        </div>
        <!-- form element -->

      </form>
    </div>
    <!-- login container -->

  </div>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      login: {
        email: 'operation@gobutton.me',
        password: 'secret'
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

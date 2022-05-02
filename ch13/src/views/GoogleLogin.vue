<template>
  <div>
    <div
      id="google-signin-btn"
      style="display: flex; justify-content: center; align-items: center"
    ></div>
    <br />
    <button type="button" @click="signOut()">로그아웃</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    window.gapi.signin2.render('google-signin-btn', {
      onsuccess: this.onSignIn
    })
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())

      const idToken = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + idToken)
    },
    signOut() {
      window.gapi.auth2.getAuthInstance().disconnect()
      console.log('로그아웃됨')
    }
  }
}
</script>

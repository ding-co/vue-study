<template>
  <div>
    <a id="kakao-login-btn" @click="kakaoLogin()">
      <button>카카오 로그인</button>
    </a>
    <br />
    <br />
    <a id="kakao-logout-btn" @click="kakaoLogout()">
      <button>카카오 로그아웃</button>
    </a>
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
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account
          // console.log(kakaoAccount)
          const nickname = kakaoAccount.profile.nickname
          const email = kakaoAccount.email
          console.log('nickname', nickname)
          console.log('email', email)

          alert('로그인 성공!')
        },
        fail: (error) => {
          console.log(error)
        }
      })
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="naverLogout">로그아웃</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      naverLogin: null
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'cVMMmNdsYXM2DqJcKkl8',
      callbackUrl: 'http://localhost:8080/naverlogin',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60
      }
    })
    this.naverLogin.init()
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        const email = this.naverLogin.user.getEmail()
        if (email === undefined || email === null) {
          alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요.')
          this.naverLogin.reprompt()
        }
      } else {
        console.log('callback 처리에 실패하였습니다.')
      }
    })
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    naverLogout() {
      const accessToken = this.naverLogin.accessToken.accessToken
      console.log(accessToken)
      const url = `/oauth2.0/token?grant_type=delete&client_id=cVMMmNdsYXM2DqJcKkl8&client_secret=UGcv01i7HM&access_token=${accessToken}&service_provider=NAVER`
      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

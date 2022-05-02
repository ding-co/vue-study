<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sold Out</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              >제품 리스트</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detail"
              >제품 상세 페이지</router-link
            >
          </li>
          <li v-if="user.email" class="nav-item">
            <router-link class="nav-link" to="/sales"
              >제품 등록 페이지</router-link
            >
          </li>
          <li v-if="!user.email">
            <button class="btn btn-danger" type="button" @click="kakaoLogin">
              로그인
            </button>
          </li>
          <li v-else>
            <button class="btn btn-danger" type="button" @click="kakaoLogout">
              로그아웃
            </button>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.$currencyFormat(50000, '#,###'))
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image, account_email',
        success: this.getProfile
      })
    },
    getProfile(authObj) {
      console.log(authObj)
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account
          console.log(kakaoAccount)
          this.login(kakaoAccount)
          alert('로그인 성공!')
        }
      })
    },
    async login(kakaoAccount) {
      // await this.$api('/api/login', {
      //   param: [
      //     {
      //       email: kakaoAccount.email,
      //       nickname: kakaoAccount.profile.nickname
      //     },
      //     { nickname: kakaoAccount.profile.nickname }
      //   ]
      // })
      this.$store.commit('user', kakaoAccount)
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response)
        this.$store.commit('user', {})
        alert('로그아웃')
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

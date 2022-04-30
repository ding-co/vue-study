<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>제품 가격</th>
          <th>제품 카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="product.product_name.toString()"
          v-for="product in productList"
        >
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from '../mixins'
export default {
  mixins: [ApiMixin],
  components: {},
  data() {
    return {
      productList: []
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  async mounted() {
    this.productList = await this.$callAPI(
      'https://e27dc21d-1a3b-4ac1-850e-3726efc18e9e.mock.pstmn.io/list',
      'get'
    )
    console.log(this.productList)
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 1rem;
}
</style>

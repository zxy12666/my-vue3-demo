<template>
  <div id="app">
    <van-cell-group class="item-list">
      <van-cell is-link icon="points" title="我的积分" />
      <van-cell is-link icon="gift" title="我收到的礼物" />
    </van-cell-group>
      <p>{{this.$store.user.get('name')}}</p>
      <button @click="changeName('李磊')">hhh</button>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant'
import store from '@/store'

export default {
  store: store,
  name: 'home',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  },
  methods: {
    changeName () {
      this.$store.user.commit('name', 'someone')
    },
    changeAllow () {
      this.$store.user.commit('load.allow', false)
    }
  },
  created () {
    console.log(this.$store.user.get('name'))
  }
}
</script>

<style>
  body {
    background-color: #f8f8f8;
  }

  .van-cell__title .van-icon {
    font-size: 18px;
  }
</style>

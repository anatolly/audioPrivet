<template>
  <div class="greeting-table">
    <img src="@/assets/logo.svg" class="logo"/>

    <div v-if="greetings.count == 0">НЕТ ДАННЫХ</div>
    <div v-else>
      <div class="row greeting-table-row py-2">
        <div class="col">Категории</div>
        <div class="col-1"><i class="fa-solid fa-arrow-up"></i></div>
        <div class="col-1"><i class="fa-solid fa-play"></i></div>
        <div class="col-1"><i class="fa-solid fa-arrow-up-long"></i></div>
      </div>

      <GreetingsTableItem
        class="item"
        v-for="(child, index) in greetings.items"
        :key="index"
        :item="child"
        :lvl="0">
      </GreetingsTableItem>

      <div class="row greeting-table-bottom-row py-2">
        <div class="col">Итого</div>
        <div class="col-1">{{totals.countView}}</div>
        <div class="col-1">{{totals.countPlay}}</div>
        <div class="col-1">{{totals.countSend}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import GreetingsTableItem from './GreetingsTableItem.vue'

export default {
  components: {
    GreetingsTableItem
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'greetings'
    ]),

    totals: function () {
      let ret = {
        countView: 0,
        countPlay: 0,
        countSend: 0
      }

      function calcChildrenTotals (item) {
        if (item.children && item.children.length) {
          item.children.forEach((item) => calcChildrenTotals(item))
        } else {
          ret.countView += item.countView
          ret.countPlay += item.countPlay
          ret.countSend += item.countSend
        }
      }

      this.greetings.items.forEach((item) => calcChildrenTotals(item))
      return ret
    }
  },

  created: function () {
    this.greetingsGetFromServer()
    .then(() => {
    })
    .catch((error) => {
      alert('Ошибка при попытке обратиться к серверу: ' + error.code + ': ' + error.message)
    })
  },

  methods: {
    ...mapActions([
      'greetingsGetFromServer'
    ])
  }
}
</script>

<style>
.logo {
  width: 180px;
  margin: 5px;
}

.greeting-table {
  font-size: 10px;
  margin-bottom: 10px;
}

.greeting-table-row {
  border-bottom: solid #ccc 1px;
}

.greeting-table-bottom-row {
  background: #ccc;
}
</style>

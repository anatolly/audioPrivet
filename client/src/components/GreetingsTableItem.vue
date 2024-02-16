<template>
  <div>
    <div class="row greeting-table-row py-2">
      <div class="col" :class="['greeting-table-title-lvl-' + lvl]"
        @click="toggle">
        <span v-if="isFolder" class="px-2">
          <i v-if="isOpen" class="fa-solid fa-chevron-down"></i>
          <i v-else class="fa-solid fa-chevron-right"></i>
        </span>
        <span v-else :class="{'greeting-table-not-folder-title': !isFolder}">
        </span>
        {{ item.title }}
      </div>
      <div class="col-1">
        {{ item.countView }}
      </div>
      <div class="col-1">
        {{ item.countPlay }}
      </div>
      <div class="col-1">
        {{ item.countSend }}
      </div>
    </div>

     <div v-if="isFolder && isOpen">
       <GreetingsTableItem
         class="item"
         v-for="(child, index) in item.children"
         :key="index"
         :item="child"
         :lvl="lvl + 1">
       </GreetingsTableItem>
     </div>
  </div>
</template>

<script>
export default {
  name: 'GreetingsTableItem',

  props: {
    item: Object,
    lvl: Number
  },

  data: function() {
    return {
      isOpen: false
    };
  },

  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }
  },

  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
  }
}
</script>

<style scoped>
.greeting-table-not-folder-title {
  margin-left: 25px;
}

.greeting-table-title-lvl-0 {
  padding-left: 25px;
}

.greeting-table-title-lvl-1 {
  padding-left: 50px;
}

.greeting-table-title-lvl-2 {
  padding-left: 75px;
}

.greeting-table-title-lvl-3 {
  padding-left: 100px;
}
</style>

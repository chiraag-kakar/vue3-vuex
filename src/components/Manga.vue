<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Manga Books List</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid aperiam
          dignissimos dolor
          doloribus dolorum est facere ipsam, laborum molestiae molestias numquam, quis tempore ut, veritatis voluptates
          voluptatum.</p>
      </div>
    </div>
  </div>
  {{books}}
  <div v-if="datas.loading" class="container">
    <div class="row">
      <div class="col">
        <Spinner/>
      </div>
    </div>
  </div>

  <div v-if="!datas.loading && datas.errorMessage" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ datas.errorMessage }}</p>
      </div>
    </div>
  </div>
  <!-- <div>
   Here there will be two nested pagination rows each generated by looping data and it's internal object respectively
  </div> -->
  <!-- <div class="d-flex justify-content-center" v-for="(todo, index) in books" :key="index">
   <button color="primary">hello</button>
  </div> -->
</template>
  
<script>
// import { mapGetters } from "vuex";
import { mapState } from 'vuex';
import Spinner from "@/components/Spinner";
import { ref, defineComponent } from 'vue';

export default defineComponent ({
  name: "MangaComponent",
  components: { Spinner},
  beforeMount() {
    this.$store.dispatch("mangaModule/getBooks")
  },
  setup() {
    return {
      c : '',
      d: {},
      e: {},
      current: ref(3),
    }
  },
  methods:{},
  // computed: {
  //   ...mapGetters({
  //   datas: "getMangaState"
  // })
  // }
  computed: {
    ...mapState({
      datas: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        const e = d.mangaModule.bookList
        return e
      },
      books: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        const e = d.mangaModule.bookList.books.data
        return e
      }
    })
  },
})
</script>
  
<style scoped>

</style>
  
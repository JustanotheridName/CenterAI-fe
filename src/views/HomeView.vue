<template>
  <div class="home">
    <ShortenLinkCard/>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShortenLinkCard from '@/components/ShortenLinkCard/ShortenLinkCard.vue';

@Component({
  components: {
    ShortenLinkCard
  }
})
export default class HomeView extends Vue {
}
</script>

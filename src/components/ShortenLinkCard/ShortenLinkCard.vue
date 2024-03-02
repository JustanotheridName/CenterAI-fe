<template>
  <div class="shorten-link-card">
    <img class="shorten-link-card__logo" src="@/assets/Logo.svg">
    <div class="shorten-link-card__content">
      <div class="shorten-link-card__title">Short link</div>
      <LinkInput ref="LinkInputRef" :is_error="error"/>
      <BaseButton :callback="onShortenLinkClick">
        <template slot="body">
          <button class="shorten-link-card__button">Shorten it</button>
        </template>
      </BaseButton>
      <ClipboardField :clipboard_value="short_link"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';
import LinkInput from '@/components/Shared/LinkInput.vue';
import ClipboardField from '@/components/Shared/ClipboardField.vue'
import BaseButton from '@/components/Shared/BaseButton.vue';
import { ShortenLinkCardActions, ShortenLinkCardGetters } from '@/store/ShortenLinkCard/types'

@Component({
  components: {
    LinkInput,
    ClipboardField,
    BaseButton
  }
})
export default class ShortenLinkCard extends Vue {
  @Ref('LinkInputRef') LinkInputRef!: LinkInput;
  
  get short_link() { return this.$store.getters[ShortenLinkCardGetters.CONVERTED_LINK] }

  private error = false;

  private onShortenLinkClick() {
    this.error = !this.LinkInputRef.isValid;
    if (this.error) return;
    this.$store.dispatch(ShortenLinkCardActions.CONVERT_LINK, this.LinkInputRef.value)
  }

}
</script>

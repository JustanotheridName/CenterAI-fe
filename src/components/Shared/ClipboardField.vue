<template>
  <div class="clipboard-field">
    <div class="clipboard-field__value">{{clipboard_value}}</div>
      <BaseButton :callback="onCopyClick" :fluid="false">
        <template slot="body">
            <img class="clipboard-field__icon" src="@/assets/icon_copy.svg"/>
        </template>
      </BaseButton>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseButton from '@/components/Shared/BaseButton.vue';

@Component({
    components: {
        BaseButton
    }
})
export default class ClipboardField extends Vue {
    @Prop({required: true, type: String}) clipboard_value!: string;

    private onCopyClick() {
        navigator.clipboard.writeText(this.clipboard_value)
        .then(() => console.log('saved to clipboard'))
        .catch(() => console.warn('clipboard error'))
    }

}
</script>


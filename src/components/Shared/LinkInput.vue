<template>
  <div class="link-input">
    <div class="link-input__label">{{$t('link_input_label')}}</div>
    <input v-model="input_value" class="link-input__input" :placeholder="$t('link_input_placeholder')" type="text">
    <div class="link-input__underline" :class="{'link-input__underline--error': is_error}"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class LinkInput extends Vue {
    @Prop({required: false, default: () => false, type: Boolean}) is_error!: boolean

    private input_value = '';

    public get value(): string {
        return this.input_value
    }

    public get isValid(): boolean {
        const https_index = this.input_value.search('https:');
        const http_index = this.input_value.search('http:');
        return https_index === 0 || http_index == 0;
    }

}
</script>

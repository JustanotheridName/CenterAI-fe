<template>
  <div class="link-input">
    <div class="link-input__label">Link to shortcut</div>
    <input v-model="input_value" class="link-input__input" placeholder="Enter link" type="text">
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
        const str_index = this.input_value.search('https:');
        return str_index === 0;
    }

}
</script>

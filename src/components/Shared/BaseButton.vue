<template>
  <div @click="onClick" class="base-button" :class="{'base-button--fluid': fluid}">
    <slot name="body"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseButton extends Vue {
    @Prop({required: true, type: Function}) callback!: () => void
    @Prop({required: false, default: () => true}) fluid!: boolean;

    private onClick() {
        this.callback();
    }
}
</script>


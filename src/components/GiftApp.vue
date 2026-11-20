<script lang="ts" setup>
import GiftInput from "./GiftInput.vue";
import GiftBox from "./GiftBox.vue";
import {ǃ, ಠ_ಠ} from "../data/crypto.obfuscated";

import { computed, ref } from 'vue';

const input = ref("");
const open = computed(() => !!ǃ(input.value));
const name = computed(() => {
  if (!open.value) return "???";
  return ಠ_ಠ(input.value);
});
</script>

<template>
  <GiftBox :open="open" :name="name"/>
  <GiftInput v-model="input"/>
</template>

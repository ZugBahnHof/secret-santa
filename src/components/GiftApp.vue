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
  <div class="app-wrapper">
    <GiftBox :open="open" :name="name" class="fade-in" />
    <GiftInput v-model="input" class="fade-in" />
  </div>
</template>

<style scoped>
  .app-wrapper {
    display: contents;
  }
  .fade-in:first-of-type {
    opacity: 0;
    animation: fade-in 0.5s ease 1s forwards;
    animation-delay: 0.5s;
  }
  .fade-in:last-of-type {
    opacity: 0;
    animation: fade-in 0.5s ease 1.5s forwards;
  }

  @keyframes fade-in {
	0% {
		opacity: 0;
    transform: scale(0);
	}

	12% {
		opacity: 0.11;
    transform: scale(0.11);
	}

	24% {
		opacity: 0.44;
    transform: scale(0.44);
	}

	36% {
		opacity: 0.98;
    transform: scale(0.98);
	}

	54% {
		opacity: 0.75;
    transform: scale(0.75);
	}

	74% {
		opacity: 0.98;
    transform: scale(0.98);
	}

	82% {
		opacity: 0.94;
    transform: scale(0.94);
	}

	92% {
		opacity: 0.99;
    transform: scale(0.99);
	}

	96% {
		opacity: 0.98;
    transform: scale(0.98);
	}

	100% {
		opacity: 1;
    transform: scale(1);
	}

}
</style>
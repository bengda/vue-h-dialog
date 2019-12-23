<template>
  <div style="text-align:center;padding:20px;">
    <div v-html="usage"></div>
  </div>
</template>

<script>
import { transpileMarkdown } from '@/marked';
import UsageMd from '../../docs/html/2.md';

export default {
  data() {
    return {
      usage: transpileMarkdown(UsageMd),
    };
  },
}
</script>

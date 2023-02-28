<template>
  <div v-html="formattedString"></div>
</template>

<script>
export default {
  props: {
    inputString: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedString() {
      // 替换字符串中的换行符和花括号
      const replacedString = this.inputString
          .replace(/\n/g, '<br>')
          .replace(/{/g, '&#123;')
          .replace(/}/g, '&#125;');

      // 在字符串两端添加<pre>和</pre>标签，以保留空格和格式
      return `<pre>${replacedString}</pre>`;
    },
  },
};
</script>

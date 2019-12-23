<template>
  <div class="doc-table_wrap">
    <table class="doc-table">
      <colgroup>
        <col width="15%">
        <col width="15%">
        <col width="20%">
        <col width="50%">
      </colgroup>
      <thead>
        <tr>
          <th v-for="(column, columnIdx) in header" :key="columnIdx">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(column, columnIdx) in data" :key="columnIdx">{{ column }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DocTable',
  props: ['data', 'header'],
}
</script>

<style lang="less">
  .doc-table_wrap {
    margin-bottom: 20px;
    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #ddd;
      color: #303133;
      thead {
        background-color: #eaeaea;
      }
      th, td {
        padding: 8px;
        text-align: center;
      }
      th {
        font-size: 16px;
      }
      td {
        font-size: 14px;
      }
    }
  }
</style>

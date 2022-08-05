<!--
 * @Description: 
 * @Date: 2022-08-05 22:21:18
 * @LastEditTime: 2022-08-05 22:59:05
 * @FilePath: \vue2-review\src\components\slotTest\current-user.vue
-->
<template>
  <div>
    <div>
      <slot name="header" :user="userName">{{ userName.lastName }}</slot>
    </div>
    <div>
      <slot :user2="userName">{{ userName.lastName }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: {
        firstName: "小",
        lastName: "明",
      },
    };
  },
};
</script>

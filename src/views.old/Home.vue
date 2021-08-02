<template>

</template>

<script>
import Kute from "kute.js"


export default {
  name: 'Home',
  mounted() {

    const line1 = Kute.allFromTo("#l1",
        {draw: "0% 0%"},
        {draw: "0% 100%"},
        {duration: 500}
    )
    const line2 = Kute.allFromTo("#l2-1, #l2-2",
        {draw: "0% 0%"},
        {draw: "0% 100%"},
        {delay: 500, prepareStart: true}
    )

    line2.start()
    line1.start()


  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
}

.top-container {
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-container-hr {
    width: 100%;
    max-width: 600px;
  }
}


.line {
  background-color: #fff;
}

.line-vertical {
  width: 4px;
  height: 100%;
}

.line-horizontal {
  height: 4px;
  width: 100%;

}
</style>

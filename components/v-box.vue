<template>
  <div class="wrap">
    <div class="animated-border"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.wrap {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated-border {
  width: 150px;
  height: 150px;
  border: 2px solid $primaryDarkestColor;
  position: relative;
}

.animated-border::before,
.animated-border::after {
  position: absolute;
  content: "";
  width: 25px;
  height: 25px;
  transition: all 300ms ease-in-out;
}

.animated-border::before {
  top: -10px;
  left: -10px;
  border-top: 1px solid $primaryDarkestColor;
  border-left: 1px solid $primaryDarkestColor;
}

.animated-border::after {
  bottom: -10px;
  right: -10px;
  border-bottom: 1px solid $primaryDarkestColor;
  border-right: 1px solid $primaryDarkestColor;
}

.animated-border:hover::before {
  width: calc(100% + 19px);
  height: calc(100% + 19px);
}

.animated-border:hover::after {
  width: calc(100% + 19px);
  height: calc(100% + 19px);
}

</style>

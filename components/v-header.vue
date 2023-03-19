<template>
  <div :class="['header', {header__active: isShowMenu}]">
    <div class="header__block">
      <nuxt-link to="/" class="header__logo">Butakov<span>Dmitrii</span></nuxt-link>
      <div @click="$emit('clickBurger')" class="header__burger">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VHeader',
  props: {
    isShowMenu: {type: Boolean, required: true}
  }
}
</script>

<style scoped lang="scss">

.header, .header__active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background-color: $primaryLightestColor;
  border-bottom: 1px solid $primaryDarkestColor;

  &__block {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $primaryDarkestColor;
    text-transform: uppercase;
  }

  &__logo {
    font-size: 1.3rem;
  @include slideToLeft;
    span {
      font-size: 2rem;
      margin-left: 5px;
    }
  }

  &__burger {
    height: 50px;
    width: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.header {
  .bar {
    width: 40px;
    height: 1.5px;
    border-radius: 2px;
    background-color: $primaryDarkestColor;
    transition: 0.5s;
    position: relative;

    &::before, &::after {
      content: "";
      position: absolute;
      width: inherit;
      height: inherit;
      transition: 0.5s;
      background-color: $primaryDarkestColor;
    }

    &::before {
      transform: translateY(-9px);
    }

    &::after {
      transform: translateY(9px);
    }
  }
}
.header__active {
  .bar {
    transform: rotate(360deg);
    background-color: transparent;

    &::before {
      transform: translateY(0) rotate(45deg);
    }

    &::after {
      transform: translateY(0) rotate(-45deg);
    }
  }
}

</style>

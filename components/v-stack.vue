<template>
  <section>
    <h2 class="slider__title">My stack</h2>
    <div id="infinite" class="slider">
      <div class="slider__container">
        <ClientOnly>
          <ul class="slider__lane">
            <li v-for="(v, i) in items" class="slider__item" :key="i">
              <fa class="stack__icon" :icon="v"></fa>
            </li>
            <li v-for="(v, i) in items" class="slider__item" :key="i + 10">
              <fa class="stack__icon" :icon="v"></fa>
            </li>
          </ul>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = {
  0: ['fab', 'html5'],
  1: ['fab', 'js'],
  2: ['fab', 'sass'],
  3: ['fab', 'vuejs'],
  4: ['fab', 'react'],
  5: ['fab', 'square-git'],
  6: ['fab', 'node'],
  7: ['fab', 'docker']
}
</script>

<style scoped lang="scss">

.slider {
  width: 100%;

  &__title {
    text-transform: uppercase;
    display: inline-flex;
    border-bottom: 3px double $primaryDarkestColor;
    margin-bottom: 16px;
  }

  &__container {
    overflow: hidden;
    position: relative;
    padding-bottom: 32px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 9;
      width: 80px;
      height: 100%;
    }

    &::before {
      top: 0;
      left: 0;
      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    &::after {
      top: 0;
      right: 0;
      background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }

  &__lane {
    width: calc(180px * 24);
    display: flex;
    height: 100%;
  }

  &__item {
    width: 180px;
    animation: translateinfinite 25s linear infinite;
    font-size: 48px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #343434;
  }
}

@keyframes translateinfinite {
  100% {
    transform: translateX(calc(-180px * 12));
  }
}
</style>


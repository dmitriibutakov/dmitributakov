<template>
  <div :class="['wrapper', {wrapper__active: isShowMenu}]">
    <v-header @clickBurger="toggleMenu" :is-show-menu="isShowMenu"/>
    <div class="wrapper__container">
      <div class="shadow one"></div>
      <div class="shadow two"></div>
      <div @click="isShowMenu = false" class="main">
        <NuxtPage/>
      </div>
    </div>
    <v-menu @clickLink="toggleMenu" :is-show-menu="isShowMenu"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShowMenu: false
  }),
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  &__container {
    position: relative;
    min-height: 100vh;
    height: 100%;

    .main, .shadow {
      position: absolute;
      left: 0;
      top: 0;
      height: calc(100% - 64px);
      overflow-y: scroll;
      width: calc(100% - 16px);
      padding: 64px 8px 0 8px;
      transform-origin: left;
      -webkit-transform-origin: left;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .main {
      transition: .5s ease-out;
      -webkit-transition: .5s ease-out;
      z-index: 2;
      background-color: $primaryLightestColor;
      color: $primaryDarkestColor;
    }

    .shadow {
      transition: .7s ease-out;
      -webkit-transition: .7s ease-out;
      opacity: .4;
      background-color: transparent;
    }
  }

  &__active {
    .shadow {
      border: 1px solid $primaryDarkestColor;
      background-color: $primaryLightColor;
    }

    .main {
      animation: main-animation .5s ease-out;
      -webkit-animation: main-animation .5s ease-out;
      cursor: pointer;
      transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(310px) scale(0.5);
    }

    .shadow.one {
      animation: shadow-one .5s ease-out;
      -webkit-animation: shadow-one .5s ease-out;
      transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(215px) scale(0.5);
    }

    .shadow.two {
      animation: shadow-two .5s ease-out;
      -webkit-animation: shadow-two .5s ease-out;
      transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(120px) scale(0.5);
    }


    .main:hover {
      transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(380px) scale(.5);
    }

    .main:hover + .shadow.two {
      transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(230px) scale(.9);
    }

    .main:hover + .shadow.one {
      transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(230px) scale(.5);
    }
  }
}

@keyframes shadow-one {
  0% {
    transform: translate(0);
  }
  5% {
    transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(310px) scale(0.5);
  }
  100% {
    opacity: .4;
    transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(215px) scale(0.5);
    border: 1px solid $primaryDarkestColor;
  }
}

@keyframes shadow-two {
  0% {
    transform: translate(0);
  }
  20% {
    transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(90px) scale(0.5);
  }
  100% {
    opacity: .4;
    transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(120px) scale(0.5);
    border: 1px solid $primaryDarkestColor;
  }
}

@keyframes main-animation {
  from {
    transform: translate(0);
  }
  to {
    transform: perspective(1300px) rotateY(20deg) translateY(10px) translateZ(310px) scale(0.5);
  }
}
</style>

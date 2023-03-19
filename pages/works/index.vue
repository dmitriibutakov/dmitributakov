<template>
  <section class="works">
    <h2 class="works__title">
      My last works
    </h2>
    <div class="works__tilts">
      <div v-for="(v, i) in blocks" :key="i"
           class="works__tilt tilt"
           @mouseenter="(e) => mouseEnter(e, i)"
           @mouseleave="mouseLeave"
           @mousemove="(e) => mouseMove(e, i)"
           :style="!isNone && i === index ? {
        '-webkit-transform': `rotateY(` + relativeOffsetX + `deg) rotateX(` + relativeOffsetY * -1 + `deg)`,
        '-moz-transform': `rotateY(` + relativeOffsetX + `deg) rotateX(` + relativeOffsetY * -1 + `deg)`,
        '-o-transform': `rotateY(` + relativeOffsetX + `deg) rotateX(` + relativeOffsetY * -1 + `deg)`,
        'transform': `rotateY(` + relativeOffsetX + `deg) rotateX(` + relativeOffsetY * -1 + `deg)`,
        'transition': `.2s ease-out`,
        'box-shadow': (-relativeOffsetX) +`px ` + (-relativeOffsetY) + `px 0 0 rgba(0,0,0,1)`
      } : {
        '-webkit-transform': `none`,
        '-moz-transform': `none`,
        '-o-transform': `none`,
        'transform': `none`,
        'transition': `.2s ease-out`,
        'box-shadow': `initial`
      }">
        <h2 class="tilt__title"><img :src="v.img" alt="img"> {{ v.title }}</h2>
        <p class="tilt__desc">
          {{ v.desc }}
        </p>
        <a @mouseenter="mouseLeave" @mouseleave="(e) => mouseEnter(e, i)" v-if="i === 0" target="_blank"
           href="https://dimpulse.biz" class="tilt__link">Link</a>
        <a @mouseenter="mouseLeave" @mouseleave="(e) => mouseEnter(e, i)" v-else-if="i === 1" target="_blank"
           href="https://opensky.biz" class="tilt__link">Link</a>
      </div>
    </div>
  </section>
</template>

<script>
import opensky from "../../assets/img/opensky.png"
import dimpulse from "../../assets/img/dimpulse.png"

export default {
  name: "VWorks",
  data() {
    return {
      blocks: [
        {
          img: opensky,
          title: 'Opensky charter',
          desc: 'A platform for first class charters. I\'ve been developing the project based on Nuxt/Vue2.'
        },
        {
          img: dimpulse,
          title: 'Dimpulse project',
          desc: 'Expert competence platform, was developed on the Nuxt.js/Vue2'
        }
      ],
      w: 0,
      h: 0,
      ratio: 0.25,
      index: null,
      absoluteOffsetX: 0,
      absoluteOffsetY: 0,
      relativeOffsetX: 0,
      relativeOffsetY: 0,
      isNone: true
    }
  },
  methods: {
    mouseEnter(e, i) {
      this.index = i
      this.isNone = false
      this.w = e.target.clientWidth
      this.h = e.target.clientHeight
    },
    mouseMove(e, i) {
      this.index = i
      this.absoluteOffsetX = e.offsetX - this.w / 2;
      this.absoluteOffsetY = e.offsetY - this.h / 2;
      this.relativeOffsetX = this.absoluteOffsetX * 100 / this.w * this.ratio;
      this.relativeOffsetY = this.absoluteOffsetY * 100 / this.h * this.ratio;
    },
    mouseLeave() {
      this.index = null
      this.isNone = true
    }
  }
}
</script>

<style scoped lang="scss">
.works {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  &__title {
    padding-right: 16px;
    @include h2;
    position: relative;

    &::after, &::before {
      content: '';
      position: absolute;
      right: 0;
      height: 4px;
      width: 4px;
      border: 1px solid $primaryDarkestColor;
    }

    &::after {
      top: 38%;
    }

    &::before {
      bottom: 23%;
    }
  }

  &__tilts {
    padding: -16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .tilt {
      @include slideToRight;
      margin: 16px;
      padding: 24px;
      height: 100%;
      min-height: 205px;
      max-width: 480px;
      border: 1px solid $primaryDarkestColor;
      transform-style: preserve-3d;

      &__title {
        display: flex;
        align-items: center;
        @include h2Pixel;
        margin-bottom: 32px;
      }

      img {
        margin-right: 16px;
        width: 48px;
        height: 48px;
      }

      &__desc {
        @include body-18-400;
        margin-bottom: 16px;
      }

      &__link {
        @include body-32-400;
        position: relative;
        padding-right: 48px;

        &::before {
          content: "";
          position: absolute;
          right: 0;
          top: 1px;
          width: 32px;
          height: 32px;
          background: url("./assets/img/arrow.png") center no-repeat;
          background-size: contain;
        }
      }
    }
  }
}

</style>

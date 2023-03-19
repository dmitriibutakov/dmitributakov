<template>
  <section class="about">
    <div class="about__blocks">
      <div class="about__block">
        <div class="about__img"/>
      </div>
      <div class="about__block">
        <h1 class="about__title">I'm an
          <span class="about__title_big">enthusiastic web developer</span>
          whose career spans 2+ years.
          <br>
          <nuxt-link class="about__title_link" to="works">Learn more about my projects</nuxt-link>
        </h1>
      </div>
    </div>
    <v-blocks :blocks="blocks"/>
    <v-stack/>
  </section>
</template>

<script>
export default {
  name: 'MainPage',
  data: () => ({
    isActive: false,
    blocks: [
      {
        title: 'Previously',
        desc: 'I was creating landing-pages from 2016 for small businesses and startups on pure HTML/CSS/JS.'
      },
      {
        title: 'My Goal',
        desc: 'To reach high level knowledge of building and securing web apps and to increase tech access through skill sharing with other experts.'
      },
      {
        title: 'Currently',
        desc: 'Now I live in Batumi and working on two startup projects in the field of private flights and expert recruitment as a lead front-end developer.'
      }
    ]
  })
}
</script>
<style lang="scss">
.about {
  padding: 0 24px;
  &__blocks {
    display: flex;
    margin-bottom: 32px;
    @media (max-width: 961px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__block {
    display: flex;
    align-items: center;

    &:first-of-type {
      margin: 0 86px 0 0;
      @media (max-width: 961px) {
        margin: 0;
      }
    }
  }

  &__title {
    @include h1;
    @include slideToRight;
    text-align: left;
    margin-top: 24px;

    &_big {
      font-size: 56px;
      letter-spacing: 0.1rem;
      display: flex;
      font-weight: 500;
      width: 100%;
      @include slideToRight;
    }

    &_link {
      @include slideToRight;
      padding-bottom: 4px;
      background: no-repeat bottom, 50% calc(100% - 1px);
      background-size: 0 100%, 100% 100%;
      background-image: linear-gradient(0deg, $primaryDarkestColor 2px, rgba(156, 39, 176, 0) 0), linear-gradient(0deg, $primaryDarkColor 2px, hsla(0, 0%, 82%, 0) 0);

      &:hover {
        background-size: 100% 100%, 100% 100%;
        transition-duration: 0.3s;
        box-shadow: none;
        outline: none;
      }
    }
  }

  &__img {
    position: relative;
    width: 300px;
    height: 300px;
    background: url("./assets/img/me.webp") top no-repeat;
    background-size: cover;
    background-color: white;

    &::after, &::before {
      position: absolute;
      animation: blink 1s ease-in-out;
      content: '';
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: $primaryDarkestColor;
      z-index: -2;
    }

    &::before {
      top: -1px;
      left: -1px;
    }

    &::after {
      right: -1px;
      bottom: -1px;
    }
  }
}

@keyframes blink {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: calc(100% + 1px);
    height: calc(100% + 1px);
  }
}
</style>


<template>
  <transition name="menu-slide">
    <div v-if="isShowMenu"
         :class="['menu', { menu__mobile: isMobile,
         menu__active: isShowMenu && !isMobile,
          menu__mobile_active: isShowMenu && isMobile}]">
      <ul class="menu__list">
        <li v-for="(d, i) in pages" :key="i" class="menu__item">
          <button @click="()=>setActivePage(d)"
                  :class="['menu__link', { menu__link_active: $router.currentRoute.fullPath === `/${d}` ||
                  (d === '/' && $router.currentRoute.fullPath === d)}]"
                  :style="{'--i': 1 - (0.4 + (i * 0.05)) + 's'}">{{ d === '/' ? 'about me' : d }}
          </button>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import isMobile from "@/mixins/isMobile";

export default {
  name: "VMenu",
  mixins: [isMobile],
  props: {
    isShowMenu: {type: Boolean, required: true}
  },
  data() {
    return {
      pages: ['/', 'works', 'contacts', 'portfolio']
    }
  },
  methods: {
   async setActivePage(d) {
      this.$emit('clickLink')
      await this.$router.push(d)
    }
  }
}
</script>

<style scoped lang="scss">
.menu-slide-enter-active,
.menu-slide-enter {
  animation: slide-menu .7s ease-in-out;
}

.menu-slide-leave-active,
.menu-slide-leave-to {
  animation: hide-menu .7s ease-in-out;
}

.menu__mobile {
  z-index: 9;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 100vw;
  background-color: $primaryLightestColor;
}

.menu, .menu__mobile {
  top: 52px;
  right: 0;
  height: calc(100% - 52px);
  position: absolute;
  display: flex;
  align-items: flex-start;
  background-color: $primaryLightestColor;
  border-left: 1px solid $primaryDarkestColor;

  &__list {
    padding: 80px 32px 0 32px;
  }

  &__item {
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }

  &__link {
    color: $primaryDarkerColor;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0;
    border: 1px solid $primaryDarkestColor;

    &_active {
      position: relative;

      &::before {
        content: '';
        animation: slide-color .4s ease-in-out;
        animation-delay: 400ms;
        position: absolute;
        right: 0;
        top: 20%;
        height: 60%;
        width: 100%;
        background-color: rgba(122, 122, 122, 0.13);
        z-index: -1;
      }
    }

    &:hover {
      &::before {
        content: '';
        animation: slide-color .4s ease-in-out;
        position: absolute;
        right: 0;
        top: 20%;
        height: 60%;
        width: 100%;
        background-color: rgba(122, 122, 122, 0.13);
        z-index: -1;
      }
    }

  }
}

.menu__active, .menu__mobile_active {
  .menu__link {
    animation: appear .3s forwards ease var(--i);
  }
}

@keyframes slide-menu {
  from {
    right: -100%;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
}

@keyframes hide-menu {
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes slide-color {
  from {
    right: -200%;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
}
</style>

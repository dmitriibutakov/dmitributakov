<template>
  <section class="contacts">
    <h2 class="contacts__title">Fill out the form below <br> and I'll get back to you <span>:)</span></h2>
    <div class="contacts__form">
      <v-input v-for="(v, i) in form" :value="v" @customChange="(n, d) => form[n] = d" :name="i" :placeholder="i"
               :key="i"/>
      <v-btn :disabled="Object.values(form).some((el) => el.length < 1)" :title="'send'"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactsPage",
  data() {
    return {
      form: {
        Email: '',
        Name: '',
        Phone: '',
        Comment: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contacts {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    @include h2;
    margin-bottom: 24px;

    span {
      font-family: 'VT323', sans-serif;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>

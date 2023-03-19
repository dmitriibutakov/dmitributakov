<template>
  <div class="input__block">
    <input :id="placeholder"
           v-if="!isComment"
           :autocomplete="false"
           :value="value"
           :type="name === 'Password' && 'password'"
           :class="{input__body_active: value}"
           @input="handlerChange"
    />
    <textarea v-else
              :id="placeholder"
              :value="value"
              :class="{input__body_active: value}"
              @input="handlerChange"
    />
    <label :for="placeholder">
      {{ placeholder }}
    </label>
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    placeholder: String,
    value: [String, Number],
    name: {type: String, required: true},
    isComment: {type: Boolean, default: false}
  },
  methods: {
    handlerChange(event) {
      this.$emit("customChange", this.name, event.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.input__block {
  max-width: 375px;
  width: 100%;
  display: flex;
  height: 100%;
  min-height: 50px;
  z-index: 0;
  position: relative;

  label {
    font-family: 'VT323', sans-serif;
    position: absolute;
    font-size: 32px;
    padding-right: 16px;
    color: $primaryDarkestColor;
    bottom: 12px;
    left: 12px;
    top: 6%;
    transition: top .2s linear;
  }

  input, textarea {
    color: $primaryDarkestColor;
    width: 100%;
    padding: 0 12px;
    background-color: transparent;
    z-index: 2;
  }

  textarea {
    padding: 24px 12px 12px 12px;
    resize: none;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 90%;
      width: 6px;
      background-color: $primaryLightestColor;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $primaryDarkestColor;
    }
  }

  input:focus + label,
  textarea:focus + label,
  .input__body_active + label {
    font-size: 20px;
    z-index: 3;
    height: 14px;
    color: $primaryDarkerColor;
    top: 0;
  }

  input:focus,
  .input__body_active {
    padding-top: 21px;
    box-shadow: 3px 3px 16px $primaryLighterColor;
  }

  ::-webkit-input-placeholder {
    opacity: 0;
  }

  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  input, textarea {
    border: 1px solid $primaryDarkestColor;

    &:hover, &:focus {
      border: 1px solid $primaryDarkestColor;
    }
  }
}
</style>

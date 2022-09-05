<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <img :src="Logo" class="logo" alt="Logo" />
      <span class="text">Mushroom Admin</span>
    </slot>
  </a>
</template>

<script>

import Logo from '@/assets/logo.png';

export default {
  data() {
    return {
      Logo
    }
  },
};
</script>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  height: 30px;
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>

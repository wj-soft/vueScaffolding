<template>
  <div class="app-wrapper">
    <h1>LayOUT</h1>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

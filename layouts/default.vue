<template>
  <div class="default-wrapper flex-column min-h-screen d-flex bg-primary-tint">
    <PageHeader class="fixed-top" />
    <main>
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped>
.default-wrapper > main {
  overflow-x: hidden;
  flex: 1;
}
</style>

<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.

const route = useRoute()

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
})

//const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>

<template>
  <div class="relative py-8">
    
    <div
      class="container relative max-w-2xl xl:max-w-screen-lg mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>
            <slot name="header"></slot>
        </h1>
      </header>
      
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
            <slot>
            </slot>
        </div>
      </main>
      
      <footer class="py-6 text-sm text-center text-gray-700">
        <p> &copy; 2022-{{thisYear}}.
          <template v-if="BUILD_DATE"> Site built {{ BUILD_DATE.toLocaleDateString() }}. </template>
          <template v-else> Development mode. </template>
        </p>
      </footer>
      
    </div>
  </div>
</template>

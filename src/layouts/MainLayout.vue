<template>
  <v-app>
    <v-app-bar
      v-if="$route.name !== 'document-view'"
      app
      flat
      absolute
      color="white"
    >
      <v-tabs centered>
        <v-tab
          exact
          to="/"
        >home</v-tab>
        <v-tab to="/document">Invoice Generator</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main style="background-color: #f4f5fa">
      <router-view />
    </v-main>
  </v-app>
</template>
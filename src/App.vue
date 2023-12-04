<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      dark
      padless
      class="transparent text-center"
      id="contact"
    >
        <v-flex>
          <v-card-title class="d-block">You can contact me here</v-card-title>
        </v-flex>
        <v-card-text>
          <v-btn
            v-for="(item,key) in icons"
            :key="key"
            class="mx-4 white--text"
            text
          >
            <v-icon size="24px">
              {{ item.icon }} 
            </v-icon>
            <span class="text-lowercase">&nbsp;{{item.username}}</span>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong>Rafael Owen G. Arela</strong>
        </v-card-text>

    </v-footer>
    <v-speed-dial
          v-model="fab"
          bottom
          right
          fixed
        >
          <template v-slot:activator>
            <v-btn
              v-model="fab"
              color="blue darken-2"
              dark
              fab
            >
              <v-icon v-if="fab">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-cog-outline
              </v-icon>
            </v-btn>
          </template>


          <v-tooltip left v-for="(item,key) in actions" :key="`actions_${key}`">
            <template v-slot:activator="{on,attrs}">
              <v-btn
              fab
              dark
              small
              v-on="on"
              v-bind="attrs"
              :href="'#' +item.id"
              @click="fab = !fab"
              >
              <v-icon>{{item.icon}}</v-icon>
              </v-btn>
            </template>
            <span>{{item.text}}</span>
          </v-tooltip>

        </v-speed-dial>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      icons: [
        {
          icon: 'mdi-facebook',
          username: 'owenarela'
        },
        {
          icon: 'mdi-linkedin',
          username: 'rafael-owen-arela'
        },
        {
          icon: 'mdi-gmail',
          username: 'arelaowen@gmail.com'
        },
        {
          icon: 'mdi-instagram',
          username: 'owenarela'
        },
        {
          icon: 'mdi-phone',
          username: '09272286606'
        }
      ],
      actions: [
        {
          icon: 'mdi-home-account',
          id: 'home',
          text: 'Home'
        },
        {
          icon: 'mdi-account-outline',
          id: 'aboutme',
           text: 'About Me'
        },
        {
          icon: 'mdi-account-hard-hat-outline',
          id: 'work',
          text: 'Work Experience'
        },
        {
          icon: 'mdi-folder-outline',
          id: 'project',
          text: 'Projects'
        },
        {
          icon: 'mdi-phone',
          id: 'contact',
          text: 'Contact Me'
        }
      ]
    }),
};
</script>

<style>
html{
  scroll-behavior:smooth
}
</style>
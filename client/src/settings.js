const appSettings = {
  appName: 'АудиоПривет!',

  server: {
    host: 'http://localhost:1337/',
    greetings: 'greetings'
  }
}

export default {
  state: {
    appSettings: appSettings
  },
  getters: {
    appSettings: state => state.appSettings
  }
}

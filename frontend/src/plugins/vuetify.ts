// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa,
      }
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

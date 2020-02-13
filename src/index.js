
import galite from 'ga-lite'
import ReactPixel from 'react-facebook-pixel'
import picoapp from 'picoapp'

import '@/src/styles/main.css'
import form from '@/src/js/form.js'

window.feature = {
  touch: !!(("ontouchstart" in window) || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch)
}

const app = picoapp({
  form
})

/**
 * init
 */
app.mount()

export default app
galite('create', 'PIXEL', 'auto')
galite('send', 'pageview')
ReactPixel.init('PIXEL')
ReactPixel.pageView()
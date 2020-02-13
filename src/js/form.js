import { component } from 'picoapp'

import subscribe from "klaviyo-subscribe"

export default component(({node}) => {
  console.log('node?', node)
  node.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = node.elements.email

    subscribe("asdf", email.value, {})
      .then(response => {
        currentFrom.reset()
        console.log('response', response)
      })
  })
})
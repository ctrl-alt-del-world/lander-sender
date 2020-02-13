import React from 'react'
import App from '@/src/components/App.js'
import { Newsletter } from '@/src/components/Newsletter.js'

export const pathname = '/'

export function load () {
  return {
    state: require('@/data.js')
  }
}

export function view (props) {
  return (
    <App meta={props.meta}>
      <div className="x ac f jcc aic y">
        <div>
          <h1>{props.content.headline}</h1>
          <p>{props.content.subText}</p>
          <Newsletter placeholder={props.content.emailPlaceholder} />
        </div>
      </div>
    </App>
  )
}

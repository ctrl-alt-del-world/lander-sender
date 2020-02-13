import React from 'react'
import cx from 'classnames'

import subscribe from "klaviyo-subscribe"

export const Newsletter = ({ placeholder }) => {
  return (
    <React.Fragment>
      <form className="newsletter" data-component="form">
        <input required className="p1 x container--s" type="email" name="email" placeholder={placeholder} />
        <button type="submit" className="m1">
          Submit fam
        </button>
      </form>
    </React.Fragment>
  )
}
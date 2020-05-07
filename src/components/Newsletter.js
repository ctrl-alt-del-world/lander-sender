import React from 'react'

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
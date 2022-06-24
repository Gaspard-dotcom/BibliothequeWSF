import React from 'react'
import data from './db.json'
import Livre from './Livre'



function Livres() {
    const spaces = data.map((obj) => {
        const name = obj.name
        const address = obj.address
        const images = obj.images
        return (
          <Livre
            name={name}
            address={address}
            image={images[0]}
          />
        )
      })
    
      return (
        <div className="POPOSList">
          { spaces }
        </div>
      )
  }


export default Livres
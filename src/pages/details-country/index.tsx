import React from 'react'
import { useParams } from 'react-router-dom'

function DetailsCountry() {
    const params = useParams()


    
    return (
    <div>
        {params.country_id}
    </div>
  )
}

export default DetailsCountry
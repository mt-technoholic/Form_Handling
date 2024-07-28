import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Components from '@/components'

const Properties = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Components.Button handler={() => navigate('new')}>
        Add property
      </Components.Button>
    </div>
  )
}

export default Properties;
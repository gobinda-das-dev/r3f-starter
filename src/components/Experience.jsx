import { OrbitControls } from '@react-three/drei'
import React from 'react'
import RotatingBox from './RotatingBox'

const Experience = () => {
  return (
    <>
      <RotatingBox />

      <OrbitControls />
    </>
  )
}

export default Experience

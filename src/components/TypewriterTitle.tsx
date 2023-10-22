"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
    options={{loop:true}}
    onInit={(typewriter) => {
        typewriter.typeString('Supercharged Productivity')
        .pauseFor(1000)
        .deleteAll()
        .typeString('AI-Powered Insights')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Effortless Data Management')
        .pauseFor(1000)
        .deleteAll()
        .start()
    }} 
    />
  )
}

export default TypewriterTitle
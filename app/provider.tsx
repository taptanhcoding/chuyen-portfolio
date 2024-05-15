'use client'

import React, { ReactNode } from 'react'

import {ThemeProvider} from "next-themes"
import { AOSInit } from './_app'
interface providerProp {
    children: ReactNode
}
export default function Provider({children}:providerProp) {
  return (<ThemeProvider attribute='class' defaultTheme='system' enableSystem >
    <AOSInit/>
    {children}
  </ThemeProvider>
  )
}

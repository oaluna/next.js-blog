import React from 'react'
import styled from 'styled-components'
import Layout, { Root, getHeader, getDrawerSidebar } from '@mui-treasury/layout'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'

const SideBarTrigger = getSideBarTrigger(styled)
const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)

const scheme = Layout()

scheme.configureHeader((builder) => {
  builder
    .registerConfig('xs', {
      position: 'sticky'
    })
    .registerConfig('md', {
      position: 'relative' // won't stick to top when scroll down
    })
})

scheme
  .configureEdgeSidebar((builder) => {
    builder
      .create('unique_id', { anchor: 'left' })
      .registerTemporaryConfig('xs', {
        width: '100%' // 'auto' is only valid for temporary variant
      })
  })
  .registerPermanentConfig('md', {
    width: 300, // px, (%, rem, em is compatible)
    collapsible: true,
    collapsedWidth: 64
  })

const App = () => {
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header>
        <Toolbar>
          <SideBarTrigger id='unique_id' />
          Header
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={'unique_id'}>
        sidebar id is required sidebar content
      </DrawerSidebar>
    </Root>
  )
}

export default App

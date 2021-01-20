import React from 'react'
import { AppBackgroundImage } from './components/app_beckground'
import { DateTime } from "./components/date_component"
import { SearchInput } from "./components/search"
import { Bookmarks } from "./components/bookmarks"
import styled from 'styled-components'

const AppStyled = styled.div`
  position: relative
`

function App () {
  return (
    <AppBackgroundImage>
      <AppStyled>
        <Bookmarks/>
        <SearchInput/>
        <DateTime/>
      </AppStyled>
    </AppBackgroundImage>
  )
}

export default App

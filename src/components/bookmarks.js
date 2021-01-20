import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import bookmarkSvg from '../assets/bookmarks.svg'

const LAST_ITEMS_COUNT = 5

const BookmarkItem = (item) => {
  return (
    <BookmarksItemWrapper key={item.dateAdded}>
      <BookmarksCount>{item.index + 1}</BookmarksCount>
      <BookmarksLint href={item.url}>{item.title}</BookmarksLint>
    </BookmarksItemWrapper>
  )
}

export const Bookmarks = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    window.chrome.bookmarks.getRecent(LAST_ITEMS_COUNT, (e) => {
      setItems(e)
    })
  })

  return <BookmarksWrapper>
    <BookmarksItemWrapper>
      <Img src={bookmarkSvg} alt={'bookmarks'}/>
    </BookmarksItemWrapper>
    {items.map((item, index) => <BookmarkItem {...item} index={index}/>)}
  </BookmarksWrapper>

}

const BookmarksWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 96px;
  justify-content: center;
  align-items: center;
  top: 8%;
  left: 1%;
`

const BookmarksItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
`

const BookmarksCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
`

const BookmarksLint = styled.a`
  text-align: center;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 96px;
  display: inline-block;
  line-height: 20px;
  white-space: pre;
`

const Img = styled.img`
  margin-bottom: 30px;
`

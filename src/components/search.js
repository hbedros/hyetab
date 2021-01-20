import React, { useState, useRef } from "react"
import styled from "styled-components"
import searchIcon from '../assets/search.svg'


const SearchWrapper = styled.div`
  left: 15%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.barOpened ? "16.25rem" : "2rem")};
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding-top: 25px;
  margin-left: 30px;
  height: 36px;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: white;
  width: 100%;
  height: 36px;
  padding-left: 10px;
  padding-right: 55px;
  border: none;
  border-radius: 36px;
  color: black;
  opacity: ${props => (props.barOpened ? "0.5" : "0")};
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  position: absolute;
  right: ${props => (props.barOpened ? "20px" : "0")};
  bottom: 1px;
`

export const SearchInput = () => {
  const [input, setInput] = useState("")
  const [barOpened, setBarOpened] = useState(false)
  const formRef = useRef()
  const inputFocus = useRef()

  const onFormSubmit = e => {
    e.preventDefault()
    window.location.replace(`https://www.google.com/search?q=${input}`);
    setInput("")
    setBarOpened(false)
  }

  return (
    <SearchWrapper>
      <Form
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true)
          inputFocus.current.focus()
        }}
        onFocus={() => {
          setBarOpened(true)
          inputFocus.current.focus()
        }}
        onBlur={() => {
          setBarOpened(false)
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Input
          onChange={e => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Search..."
        />
        <Button type="submit" barOpened={barOpened}>
          <img src={searchIcon} alt='search input'/>
        </Button>
      </Form>
    </SearchWrapper>
  )
}

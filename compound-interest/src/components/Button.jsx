import styled from 'styled-components'

const Button = styled.button.attrs({ type: "submit" })`
  border: none;
  display: block;
  background-color: #28d;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;

  &:hover{
    background-color: #28b
  }

`
export default Button

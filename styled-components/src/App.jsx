
import styled, { keyframes } from "styled-components"

const P = styled.p`
  font-size: 32px;
  color: blue;
`

const Content = styled.div`
  padding: 20px 15px;
  background-color: #bbb;
`

const Button = styled.button`
  padding: 15px 10px;
  color: ${props => props.back ? "blue" : "white"};
  background-color: ${props => props.back ? "white" : "blue"};
  cursor: pointer;
  border: 2px solid blue;
  border-radius: 8px;
  margin-right: 20px;

  &:hover {
    box-shadow: 2px 5px 15px rgb(0,0,0,0.2)
  }

  &.button-red {
    background-color: red;
    color: white;
    border: 2px solid red;
  }

  .font{
    font-size: 32px;
  }
  
`

const BlockButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
`

const Link = ({ className, ...props }) => {
  return (
    <a className={className} {...props}></a>
  )
}


const StyledLink = styled(Link)`
  color: blue;
`

const Input = styled.input.attrs(props => ({
  type: "text",
  count: 2,
  color: props.color || "green"
}))`
  border: 2px solid blue;
  color: ${props => props.count > 2 ? props.color : "pink"}

`

const Password = styled(Input).attrs({
  type: "password"
})``


const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`

function App() {

  return (
    <Content>
      <P> Parrafo con styled components</P>
      <Button>Accept</Button>
      <Button back>Accept</Button>

      <Button back className="button-red">Accept</Button>

      <Button back><p className="font">Font increase </p></Button>

      <BlockButton back>Enviar </BlockButton>
      <BlockButton >Enviar </BlockButton>
      <BlockButton as="a" href="#">Page Two </BlockButton>

      <br />
      <Link>Link</Link>
      <br />
      <StyledLink> Styled link </StyledLink>
      <br />

      <Input />
      <br />
      <Input color="red" count={8} />

      <br />
      <Password />
      <br />

      <Rotar>#---/---#</Rotar>

    </Content>
  )
}

export default App

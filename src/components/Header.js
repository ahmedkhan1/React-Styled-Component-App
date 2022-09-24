import React from 'react'
import {StyledHeader, Nav, Logo} from "./styles/Header.styled";
import {Container} from './styles/Container.styled';
import { Button } from './styles/Button.stlyed';
import { Flex } from './styles/Flex.styled';
import { Image } from './styles/Header.styled';

export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started for free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

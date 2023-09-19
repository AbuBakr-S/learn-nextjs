import React from 'react';
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboeard!</Preview>
      <Tailwind>
        <Body className="bg-slate-400">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href='https://www.youtube.com'>www.youtube.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
import React from 'react';
import { Header } from './components/Header';
import { LastNews } from './components/LastNews'
import { Content  } from './components/Content/Content'
import './styles/global.scss';

export function App() {
  return (
      <>
        <Header />
        <LastNews />
        <Content />
        
      </>
  );
}

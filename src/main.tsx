import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@atlaskit/css-reset';
import Example from './example.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Example />
  </StrictMode>,
)

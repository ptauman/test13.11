import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Container } from '@mui/material';


createRoot(document.getElementById('root')!).render(
  <Container >
  
  <Provider store={store}>
    <App />
  </Provider>
  </Container>
)

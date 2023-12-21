import 'global.css'
import { Loader } from '@react-three/drei'
import ReactDOM from 'react-dom/client'
import { App } from '@/app'

const root = ReactDOM.createRoot(document.querySelector('#root')!)

root.render(
  <>
    <App />
    <Loader />
  </>,
)

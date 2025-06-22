
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { LanguageProviderr } from './Language.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageProviderr>
    <App />
  </LanguageProviderr>
)

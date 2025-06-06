import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from '@/shared/providers/Providers.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>
)

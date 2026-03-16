import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ColorModeScript, UIProvider } from '@workspaces/ui'
import { config } from '@workspaces/theme'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <>
      <ColorModeScript defaultValue={config.defaultColorMode} />
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
    </>
  )
}

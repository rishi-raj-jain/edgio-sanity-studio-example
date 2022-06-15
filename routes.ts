// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from "@layer0/core/router"

export default new Router()
  .static("dist", ({ cache }) => {
    cache({
       browser: {
         maxAgeSeconds: 0,
         serviceWorkerSeconds: 60 * 60 * 24 * 365,
       },
       edge: {
         maxAgeSeconds: 60 * 60 * 24 * 365,
       }
    })
  })
  .fallback(({ appShell }) => {
    appShell("dist/index.html")
  })

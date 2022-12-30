import { Router } from '@edgio/core'
import { sanityRoutes } from '@edgio/sanity-studio'

export default new Router({ indexPermalink: false }).use(sanityRoutes)

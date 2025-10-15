import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, studioUrl} from '@/sanity/lib/api'
import {token} from './token'

// Create client with fallback values to prevent build failures
const clientConfig = {
  projectId: projectId || 'ihhaqh4s',
  dataset: dataset || 'production',
  apiVersion: apiVersion || '2025-09-25',
  useCdn: true,
  perspective: 'published' as const,
  token: token || 'skd5mOSfEIBA3IdGmiiDp00cSuWLXQTp1xMw048oC5NHYIyjioiONX3EGHRUS0lJ6a9gM6ZvwWrgEayBXTDr09N3PfpkimZKcUKSn9m54U5XGxZPwL3IoYFEngrbYPxmWuFFW2rk9sgaD1tKUkqjghhYVq9yrqEB5MsqKVdjmGM03ScqY6RR',
  stega: {
    studioUrl: studioUrl || 'http://localhost:3333',
    // Set logger to 'console' for more verbose logging
    // logger: console,
    filter: (props: any) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    },
  },
}

export const client = createClient(clientConfig)

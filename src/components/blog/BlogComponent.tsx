import React from 'react'
import { BlogContextProvider } from 'src/context/blogContext'
import { BlogRouter } from './BlogRouter'
import type { Keys } from 'src/utils/types/types'

export const BlogComponent = ({ keys }: { keys: Keys }) => {
  return (
    <div className="page-wrap">
      <BlogContextProvider>
        <BlogRouter keys={keys} />
      </BlogContextProvider>
    </div>
  )
}

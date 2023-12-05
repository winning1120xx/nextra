/* eslint typescript-sort-keys/interface: error */

export type SearchResult = {
  id: string
  data: () => Promise<PagefindResult>
}

export type PagefindResult = {
  url: string
  raw_url: string
  meta: {
    title: string
  }
  excerpt: string
}

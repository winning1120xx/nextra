/* eslint typescript-sort-keys/interface: error */

export type SearchResult = {
  data: () => Promise<PagefindResult>
  id: string
}

export type PagefindResult = {
  excerpt: string
  meta: {
    title: string
  }
  raw_url: string
  url: string
}

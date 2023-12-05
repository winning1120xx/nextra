declare namespace globalThis {
  import { SearchResult } from './types'
  var pagefind: {
    search: (query: string) => Promise<{
      results: SearchResult[]
    }>
  }
}

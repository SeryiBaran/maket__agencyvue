export interface Card {
  icon: string
  title: string
  description: string
  link: string
}

export interface Review {
  title: string
  description: string
  user: {
    avatar: number // because view Index05Reviews.vue
    name: string
    description: string
    site: string
  }
}

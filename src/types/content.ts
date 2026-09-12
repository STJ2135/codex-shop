export type DishCategory = 'starter' | 'main' | 'dessert'
export type DishFilter = 'all' | DishCategory
export type DishLabelTone = 'clay' | 'dark' | 'olive'

export interface Dish {
  id: number
  category: DishCategory
  name: string
  price: string
  description: string
  image: string
  alt: string
  attributes: string[]
  time: string
  label?: string
  labelTone?: DishLabelTone
}

export interface MenuCategory {
  id: DishFilter
  label: string
}

export interface Review {
  id: number
  content: string
  name: string
  initial: string
  source: string
  featured?: boolean
}

export interface BookingFormState {
  date: string
  time: string
  guests: string
  name: string
  phone: string
  note: string
}

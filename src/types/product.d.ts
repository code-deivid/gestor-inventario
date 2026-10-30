import type { TypeCategory } from './category.d.ts'

export interface IProduct {
  id: number
  name: string
  price: number
  stock: number
  category: TypeCategory
  image: string
}

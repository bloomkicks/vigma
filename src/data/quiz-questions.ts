import { front, body } from './materials'

import kitchen from "./categories/kitchen"
import closet from "./categories/closet"
import childish from "./categories/childish"
import bathroom from "./categories/bathroom"
import shop from "./categories/shop"
import office from "./categories/office"

[closet, childish, bathroom, shop, office].forEach(category => category.push(...[{ front }, { body }]))

export type FlatQuestion<T> = { [question: string]: (string | T)[] }
export type FlatQuestions<T> = Array<FlatQuestion<T>>
export type Questions<T> = FlatQuestions<T | FlatQuestion<T>>

const categories: { [category: string]: Questions<string> } = {
  kitchen, closet, childish, bathroom, shop, office
}


export default categories
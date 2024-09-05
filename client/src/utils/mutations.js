import { gql } from '@apollo/client';
export const emove_Item = gql`
  removeItem(itemId: $itemId) {
    _id
    name
  }
  }
`

export const ADD_ITEM = gql`
 mutation Mutation($name: String!, $img: String, $cost: Int, $calories: Int) {
  addItem(name: $name, img: $img, cost: $cost, calories: $calories) {
    _id
    calories
    cost
    img
    name
  }
    }
`;
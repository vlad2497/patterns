import { ComponentType, FC } from 'react'
import { MovieModel } from 'store/slices/movie/models'

type Props = {
  items: MovieModel[]
  ItemComponent: ComponentType<{
    title: string
  }>
}

const List: FC<Props> = ({ items, ItemComponent }) => {
  return (
    <>
      {items.map((listItem) => (
        <ItemComponent key={listItem.getId()} title={listItem.getTitle()} />
      ))}
    </>
  )
}

export default List

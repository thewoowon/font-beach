import { FontListItemType } from '@/types/fonts'
import Image from 'next/image'

function FontListItem({
  id,
  author,
  name,
  description,
  image,
  createdAt,
  commerce,
}: FontListItemType) {
  return (
    <div>
      <Image
        alt="temp"
        src={image}
        width={200}
        height={200}
        unoptimized={true}
      ></Image>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  )
}

export default FontListItem

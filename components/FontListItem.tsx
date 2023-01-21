import { ListItem } from '@/pages'
import Image from 'next/image'

function FontListItem({ id, name, description, image }: ListItem) {
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

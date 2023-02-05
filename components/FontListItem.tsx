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
    <div className="flex justify-center items-center bg-blue-500 my-5 rounded-full p-6">
      <div className="w-full bg-white rounded-full px-20 py-5">
        <div className="flex justify-between">
          <div>{`${author}님의 ${name} 폰트`}</div>
          <div>{`${createdAt} ${
            commerce ? '상업적 용도 사용 가능' : '상업적 용도 사용 불가'
          }`}</div>
        </div>
        <div className="flex justify-between items-center">
          <Image
            alt="temp"
            src={image}
            width={200}
            height={200}
            unoptimized={true}
          ></Image>
          <div className="flex gap-5">
            <button className="px-4 py-2 bg-blue-500 rounded-lg text-white">
              사진
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded-lg text-white">
              추가
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded-lg text-white">
              클라우드
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FontListItem

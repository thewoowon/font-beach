import styled from '@emotion/styled'

export default function ImageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ImageFill src="/assets/beach.jpeg" className="flex">
      {children}
    </ImageFill>
  )
}

const ImageFill = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
`

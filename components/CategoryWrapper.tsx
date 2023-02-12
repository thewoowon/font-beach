export default function CategoryWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center w-full rounded-full shadow-md py-5 my-5">
      {children}
    </div>
  )
}

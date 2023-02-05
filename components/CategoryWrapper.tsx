export default function CategoryWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center w-full rounded-full bg-zinc-50 border-2 border-blue-500 py-10 my-5">
      {children}
    </div>
  )
}

export default function FilterWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center w-full rounded-full bg-zinc-50 border-2 border-blue-500 py-5 my-5 px-10">
      {children}
    </div>
  )
}

export default function FilterWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center w-full rounded-lg shadow-md py-5 my-5 px-10 dark:bg-white">
      {children}
    </div>
  )
}

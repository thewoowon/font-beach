import React from 'react'

function FontListBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen shadow-lg rounded-xl p-5 dark:bg-white">
      {children}
    </div>
  )
}

export default FontListBox

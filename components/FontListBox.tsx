import React from 'react'

function FontListBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen border-2 border-blue-500 rounded-xl p-5">
      {children}
    </div>
  )
}

export default FontListBox

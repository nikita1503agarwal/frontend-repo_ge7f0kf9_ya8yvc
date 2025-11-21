import React from 'react'

function Header({ onSeed }) {
  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <span className="text-blue-300 font-bold">♯♭</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Master Jazz Pianist</h1>
            <p className="text-blue-200/80 text-sm">Chord encyclopedia • Progressions • Lessons • Favorites</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onSeed} className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors">
            Load demo data
          </button>
          <a href="/test" className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-blue-100 text-sm transition-colors">Check backend</a>
        </div>
      </div>
    </header>
  )
}

export default Header

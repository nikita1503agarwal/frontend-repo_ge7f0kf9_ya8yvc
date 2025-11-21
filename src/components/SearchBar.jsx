import React from 'react'

function SearchBar({ q, setQ, onSearch }) {
  return (
    <div className="flex gap-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search chords (e.g., maj7, G7, Dm9)"
        className="w-full px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-blue-100 placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={onSearch} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">Search</button>
    </div>
  )
}

export default SearchBar

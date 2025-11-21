import React from 'react'

function Sidebar({ progressions, lessons }) {
  return (
    <aside className="space-y-6">
      <section>
        <h4 className="text-blue-200 font-semibold mb-2">Progressions</h4>
        <ul className="space-y-2">
          {progressions?.length ? progressions.map(p => (
            <li key={p._id} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
              <div className="text-white text-sm font-medium">{p.name}</div>
              <div className="text-blue-300/80 text-xs">{p.roman_numerals?.join(' – ')} • {p.chords?.join(' – ')}</div>
            </li>
          )) : <li className="text-blue-200/70 text-sm">No progressions yet.</li>}
        </ul>
      </section>

      <section>
        <h4 className="text-blue-200 font-semibold mb-2">Lessons</h4>
        <ul className="space-y-2">
          {lessons?.length ? lessons.map(l => (
            <li key={l._id} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
              <div className="text-white text-sm font-medium">{l.title}</div>
              <div className="text-blue-300/80 text-xs">Level: {l.level}</div>
            </li>
          )) : <li className="text-blue-200/70 text-sm">No lessons yet.</li>}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar

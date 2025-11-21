import React from 'react'

function Pill({ children }) {
  return <span className="px-2 py-0.5 rounded-full bg-slate-700/60 text-blue-200 text-xs border border-slate-600">{children}</span>
}

function ChordCard({ chord, onFav }) {
  return (
    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-blue-500/40 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">{chord.name} <span className="text-blue-300/80">({chord.symbol})</span></h3>
        <button onClick={() => onFav(chord)} className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-400/40 hover:bg-blue-500/30">Favorite</button>
      </div>
      <div className="text-sm text-blue-200/90 mb-2">Root: {chord.root} • Quality: {chord.quality}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        <Pill>Notes: {chord.notes?.join(' ')}</Pill>
        {chord.extensions?.length ? <Pill>Ext: {chord.extensions.join(' ')}</Pill> : null}
      </div>
      {chord.voicings?.length ? (
        <div className="text-xs text-blue-300/80">
          <div className="mb-1">Voicings:</div>
          <ul className="list-disc list-inside space-y-1">
            {chord.voicings.slice(0,3).map((v, i) => (
              <li key={i}>{v.join(' – ')}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

function ChordList({ chords, onFav }) {
  if (!chords?.length) {
    return <div className="text-blue-200/70 text-sm">No chords yet. Try loading demo data.</div>
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {chords.map((c) => (
        <ChordCard key={c._id} chord={c} onFav={onFav} />
      ))}
    </div>
  )
}

export default ChordList

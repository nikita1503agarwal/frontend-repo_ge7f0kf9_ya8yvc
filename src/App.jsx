import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ChordList from './components/ChordList'
import Sidebar from './components/Sidebar'

function App() {
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
  const [q, setQ] = useState('')
  const [chords, setChords] = useState([])
  const [progressions, setProgressions] = useState([])
  const [lessons, setLessons] = useState([])
  const [clientId] = useState(() => {
    const existing = localStorage.getItem('mjp_client_id')
    if (existing) return existing
    const id = Math.random().toString(36).slice(2)
    localStorage.setItem('mjp_client_id', id)
    return id
  })

  const loadAll = async (searchQ = '') => {
    const [chRes, prRes, leRes] = await Promise.all([
      fetch(`${baseUrl}/chords${searchQ ? `?q=${encodeURIComponent(searchQ)}` : ''}`),
      fetch(`${baseUrl}/progressions`),
      fetch(`${baseUrl}/lessons`)
    ])
    if (chRes.ok) setChords(await chRes.json())
    if (prRes.ok) setProgressions(await prRes.json())
    if (leRes.ok) setLessons(await leRes.json())
  }

  useEffect(() => {
    loadAll()
  }, [])

  const onSearch = () => loadAll(q)

  const onFav = async (chord) => {
    try {
      await fetch(`${baseUrl}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: clientId, kind: 'chord', ref: chord.symbol })
      })
    } catch (e) {
      // noop
    }
  }

  const onSeed = async () => {
    await fetch(`${baseUrl}/seed`, { method: 'POST' })
    await loadAll(q)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]"></div>

      <div className="relative min-h-screen p-6 md:p-10">
        <Header onSeed={onSeed} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-6">
            <SearchBar q={q} setQ={setQ} onSearch={onSearch} />
            <ChordList chords={chords} onFav={onFav} />
          </div>
          <div className="lg:col-span-4">
            <Sidebar progressions={progressions} lessons={lessons} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'

export type RepoCard = {
  name: string
  description?: string
  stars?: number
  forks?: number
  prMerged?: number
  openIssues?: number
  goodFirstIssues?: number
}

type Props = {
  name: string
  description?: string
  stars?: number
  forks?: number
  prMerged?: number
  openIssues?: number
  goodFirstIssues?: number
  sizes: { body: number; caption: number }
}

export default function RepoCard({
  name,
  description,
  stars = 0,
  forks = 0,
  prMerged = 0,
  openIssues = 0,
  goodFirstIssues = 0,
  sizes,
}: Props) {
  return (
    <div className="block w-full rounded-xl bg-white shadow border border-black/10 p-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold" style={{ fontSize: sizes.body }}>{name}</div>
        <div className="text-black/60" style={{ fontSize: sizes.caption }}>
          ⭐ {stars} · 🍴 {forks}
        </div>
      </div>
      {description && (
        <div className="mt-2 text-black/80" style={{ fontSize: sizes.caption }}>
          {description}
        </div>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-3" style={{ fontSize: sizes.caption }}>
        <div className="flex items-center gap-2">
          <span className="badge merged-prs" style={{ fontSize: sizes.caption }}>merged prs</span>
          <strong>{prMerged}</strong>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge open-issues" style={{ fontSize: sizes.caption }}>open issues</span>
          <strong>{openIssues}</strong>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge good-first-issues" style={{ fontSize: sizes.caption }}>good first issues</span>
          <strong>{goodFirstIssues}</strong>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { platformSizes, type PlatformKey } from '@/lib/platformSizes'
import Hacktoberfest, { type RepoCard } from '@/templates/hacktoberfest'
import EventPromo, { type Speaker } from '@/templates/event-promo'
import ExportButton from '@/components/ExportButton'
import { Button } from '@/components/ui/button'
import ScaledPreview from '@/components/ScaledPreview'

const templates = [
  { key: 'hacktoberfest', label: 'Hacktoberfest Update' },
  { key: 'event-promo', label: 'Event Promotion' },
] as const

const platforms: { key: PlatformKey; label: string }[] = Object.entries(platformSizes).map(([k, v]) => ({ key: k as PlatformKey, label: v.label }))

type TemplateKey = typeof templates[number]['key']

export default function Home() {
  const [template, setTemplate] = useState<TemplateKey>('hacktoberfest')
  const [platform, setPlatform] = useState<PlatformKey>('instagram-post')

  // Hacktoberfest state
  const [repos, setRepos] = useState<RepoCard[]>([
    { name: '🤖volunteer-telegram-bot', description: 'Telegram bot for volunteer management for Women Devs SG', stars: 12, forks: 13 },
    { name: '🍼bibsnbub', description: 'An app to help parents find childcare facilities in Singapore!', stars: 11, forks: 14 },
    { name: '👩‍💻womendevssg', description: 'Website for womendevssg', stars: 14, forks: 18 },
  ])
  const [hackTitleText, setHackTitleText] = useState('Hacktoberfest🎉')
  const [hackSubtitleText, setHackSubtitleText] = useState('📅1–31 October')
  const [hackLinkText, setHackLinkText] = useState('👉github.com/orgs/Women-Devs-SG👈')

  // Event promotion state
  const [eventName, setEventName] = useState('AI Workshop')
  const [eventSubtitle, setEventSubtitle] = useState('What are LLMs?')
  const [eventDescription, setEventDescription] = useState('Join us for a panel and networking session on building inclusive tech communities.')
  const [eventDateTime, setEventDateTime] = useState('Thu, 24 Oct · 7:00 PM')
  const [eventVenue, setEventVenue] = useState('Somewhere, Singapore')
  const [speakerCount, setSpeakerCount] = useState<1 | 2 | 3>(1)
  const [speakers, setSpeakers] = useState<Speaker[]>([
    { name: 'Aisha Lee', title: 'Senior Engineer, ACME', imageUrl: '' },
    { name: 'Mei Chen', title: 'Developer Advocate, Foo', imageUrl: '' },
    { name: 'Anita S.', title: 'Product Engineer, Bar', imageUrl: '' },
  ])
  const [audienceType, setAudienceType] = useState<'Women only' | 'Allies welcome' | ''>('Allies welcome')
  const [facilities, setFacilities] = useState<string[]>(['Private nursing room', 'Parents & kids welcome'])
  const [partnerLogos, setPartnerLogos] = useState<string[]>(['', ''])
  const [ctaText, setCtaText] = useState('Sign up on Meetup')
  const [eventLinkText, setEventLinkText] = useState('👉meetup.com/women-devs-sg/👈')
  const [decorVariant, setDecorVariant] = useState<'playful' | 'tech' | 'games' | 'women'>('playful')

  // Logo customization (applies to all templates)
  type RootColor = 'teal' | 'coral' | 'yellow' | 'navy' | 'offwhite' | 'black'
  type LogoColor = 'teal' | 'coral' | 'yellow' | 'navy' | 'offwhite'
  const colorBgClass: Record<RootColor, string> = {
    teal: 'bg-brand-teal',
    coral: 'bg-brand-coral',
    yellow: 'bg-brand-yellow',
    navy: 'bg-brand-navy',
    offwhite: 'bg-brand-offwhite',
    black: 'bg-black',
  }
  const [logoColors, setLogoColors] = useState<{ women: LogoColor; devs: LogoColor; singapore: LogoColor }>({ women: 'navy', devs: 'navy', singapore: 'navy' })

  // Color customizations
  const [hackBgColor, setHackBgColor] = useState<RootColor>('yellow')
  const [hackCtaColor, setHackCtaColor] = useState<RootColor>('coral')
  const [hackTitleColor, setHackTitleColor] = useState<RootColor>('teal')
  const [eventBgColor, setEventBgColor] = useState<RootColor>('offwhite')
  const [eventCtaColor, setEventCtaColor] = useState<RootColor>('coral')
  const [eventTitleColor, setEventTitleColor] = useState<RootColor>('navy')
  const [alliesBadgeColor, setAlliesBadgeColor] = useState<RootColor>('navy')
  const [nursingBadgeColor, setNursingBadgeColor] = useState<RootColor>('navy')
  const [parentsBadgeColor, setParentsBadgeColor] = useState<RootColor>('navy')

  const fileBase = `${template}-${platform}`
  const palette: LogoColor[] = ['teal','coral','yellow','navy','offwhite']
  const hackOtherOptions: LogoColor[] = palette.filter((c) => c !== hackBgColor)
  const eventOtherOptions: LogoColor[] = palette.filter((c) => c !== eventBgColor)
  const hackLogoOptions: LogoColor[] = palette.filter((c) => c !== hackBgColor)
  const eventLogoOptions: LogoColor[] = palette.filter((c) => c !== eventBgColor)

  // Ensure dependent colors never match the selected background color
  useEffect(() => {
    if (hackCtaColor === hackBgColor && hackOtherOptions.length) {
      setHackCtaColor(hackOtherOptions[0])
    }
    if (hackTitleColor === hackBgColor && hackOtherOptions.length) {
      setHackTitleColor(hackOtherOptions[0])
    }
  }, [hackBgColor])

  useEffect(() => {
    if (eventCtaColor === eventBgColor && eventOtherOptions.length) {
      setEventCtaColor(eventOtherOptions[0])
    }
    if (eventTitleColor === eventBgColor && eventOtherOptions.length) {
      setEventTitleColor(eventOtherOptions[0])
    }
    if (alliesBadgeColor === eventBgColor && eventOtherOptions.length) {
      setAlliesBadgeColor(eventOtherOptions[0])
    }
    if (nursingBadgeColor === eventBgColor && eventOtherOptions.length) {
      setNursingBadgeColor(eventOtherOptions[0])
    }
    if (parentsBadgeColor === eventBgColor && eventOtherOptions.length) {
      setParentsBadgeColor(eventOtherOptions[0])
    }
  }, [eventBgColor])

  // Keep logo colors from matching the current template background
  useEffect(() => {
    const currentBg = template === 'hacktoberfest' ? hackBgColor : eventBgColor
    const options = template === 'hacktoberfest' ? hackLogoOptions : eventLogoOptions
    setLogoColors((cur) => {
      const next = { ...cur }
      if (next.women === currentBg && options.length) next.women = options[0]
      if (next.devs === currentBg && options.length) next.devs = options[0]
      if (next.singapore === currentBg && options.length) next.singapore = options[0]
      return next
    })
  }, [template, hackBgColor, eventBgColor])

  return (
    <>
      <Head>
        <title>Women Devs SG Content Generator</title>
      </Head>

      <main className="container py-8">
        <h1 className="text-3xl font-bold">Women Devs SG Content Generator</h1>
        <p className="mt-1 text-gray-700">Create on-brand visuals for social and community platforms.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Template</div>
            <div className="mt-2 flex flex-col gap-2">
              {templates.map((t) => (
                <Button key={t.key} variant={template === t.key ? 'default' : 'outline'} onClick={() => setTemplate(t.key)}>
                  {t.label}
                </Button>
              ))}
            </div>

            <div className="mt-4 font-semibold">Platform</div>
            <div className="mt-2 grid grid-cols-1 gap-2">
              {platforms.map((p) => (
                <Button key={p.key} variant={platform === p.key ? 'default' : 'outline'} onClick={() => setPlatform(p.key)}>
                  {p.label}
                </Button>
              ))}
            </div>

            <div className="mt-4 font-semibold">Background Decor</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {([
                { key: 'playful', label: 'Shapes' },
                { key: 'tech', label: 'Tech Emojis' },
                { key: 'games', label: 'Game Emojis' },
                { key: 'women', label: 'Women Emojis' },
              ] as const).map((opt) => (
                <Button key={opt.key} variant={decorVariant === opt.key ? 'default' : 'outline'} onClick={() => setDecorVariant(opt.key)}>
                  {opt.label}
                </Button>
              ))}
            </div>

            {template === 'hacktoberfest' && (
              <div className="mt-6">
                <div className="font-semibold">Hacktoberfest</div>
                <input className="mt-2 w-full rounded border px-2 py-1" placeholder="👨‍💻Hacktoberfest🎉"
                  value={hackTitleText}
                  onChange={(e) => setHackTitleText(e.target.value)} />
                <input className="mt-2 w-full rounded border px-2 py-1" placeholder="📅1–31 October"
                  value={hackSubtitleText}
                  onChange={(e) => setHackSubtitleText(e.target.value)} />
                <input className="mt-2 w-full rounded border px-2 py-1" placeholder="👉github.com/orgs/Women-Devs-SG👈"
                  value={hackLinkText}
                  onChange={(e) => setHackLinkText(e.target.value)} />
                <div className="mt-3 grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="font-semibold">Background</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {(['teal','coral','yellow','navy','offwhite'] as RootColor[]).map((c) => (
                        <button key={c} type="button" onClick={() => setHackBgColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${hackBgColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">CTA</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {hackOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setHackCtaColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${hackCtaColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Title</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {hackOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setHackTitleColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${hackTitleColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Logo</div>
                    <div className="mt-1 grid grid-cols-3 gap-2">
                      <div>
                        <div>WOMEN color</div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {hackLogoOptions.map((c) => (
                            <button key={c} type="button" onClick={() => setLogoColors((cur) => ({ ...cur, women: c }))} className={`flex items-center gap-2 rounded border px-2 py-1 ${logoColors.women===c?'border-black':'border-gray-300'}`}>
                              <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                              <span>{c}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>DEVS color</div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {hackLogoOptions.map((c) => (
                            <button key={c} type="button" onClick={() => setLogoColors((cur) => ({ ...cur, devs: c }))} className={`flex items-center gap-2 rounded border px-2 py-1 ${logoColors.devs===c?'border-black':'border-gray-300'}`}>
                              <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                              <span>{c}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>SINGAPORE color</div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {hackLogoOptions.map((c) => (
                            <button key={c} type="button" onClick={() => setLogoColors((cur) => ({ ...cur, singapore: c }))} className={`flex items-center gap-2 rounded border px-2 py-1 ${logoColors.singapore===c?'border-black':'border-gray-300'}`}>
                              <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                              <span>{c}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 font-semibold">Repos</div>
                <div className="mt-2 flex flex-col gap-3">
                  {repos.map((r, idx) => (
                    <div key={idx} className="rounded-lg border p-3">
                      <div className="grid grid-cols-1 gap-2">
                        <input className="w-full rounded border px-2 py-1" placeholder="Name" value={r.name}
                          onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, name: e.target.value } : it))} />
                      </div>
                      <textarea className="mt-2 w-full rounded border px-2 py-1" placeholder="Description" value={r.description || ''}
                        onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, description: e.target.value } : it))} />
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <input type="number" className="w-full rounded border px-2 py-1" placeholder="Stars" value={r.stars ?? 0}
                          onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, stars: Number(e.target.value) } : it))} />
                        <input type="number" className="w-full rounded border px-2 py-1" placeholder="Forks" value={r.forks ?? 0}
                          onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, forks: Number(e.target.value) } : it))} />
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <input type="number" className="w-full rounded border px-2 py-1" placeholder="PRs merged" value={r.prMerged ?? 0}
                          onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, prMerged: Number(e.target.value) } : it))} />
                        <input type="number" className="w-full rounded border px-2 py-1" placeholder="Open issues" value={r.openIssues ?? 0}
                          onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, openIssues: Number(e.target.value) } : it))} />
                        <input type="number" className="w-full rounded border px-2 py-1" placeholder="Good first issues" value={r.goodFirstIssues ?? 0}
                          onChange={(e) => setRepos((prev) => prev.map((it, i) => i === idx ? { ...it, goodFirstIssues: Number(e.target.value) } : it))} />
                      </div>
                      <div className="mt-2 flex justify-end">
                        <Button variant="outline" size="sm" onClick={() => setRepos((prev) => prev.filter((_, i) => i !== idx))}>Remove</Button>
                      </div>
                    </div>
                  ))}
                  <Button size="sm" onClick={() => setRepos((prev) => [...prev, { name: 'new-repo', description: '', stars: 0, forks: 0 }])}>Add Repo</Button>
                </div>
              </div>
            )}

            {template === 'event-promo' && (
              <div className="mt-6 space-y-3">
                <div className="font-semibold">Event Details</div>
                <input className="w-full rounded border px-2 py-1" placeholder="Event name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                <input className="w-full rounded border px-2 py-1" placeholder="Event subtitle (optional)" value={eventSubtitle} onChange={(e) => setEventSubtitle(e.target.value)} />
                <textarea className="w-full rounded border px-2 py-1" placeholder="Event description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
                <input className="w-full rounded border px-2 py-1" placeholder="Date and time" value={eventDateTime} onChange={(e) => setEventDateTime(e.target.value)} />
                <input className="w-full rounded border px-2 py-1" placeholder="Venue" value={eventVenue} onChange={(e) => setEventVenue(e.target.value)} />

                <div className="pt-2 grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="font-semibold">Background</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {(['teal','coral','yellow','navy','offwhite'] as RootColor[]).map((c) => (
                        <button key={c} type="button" onClick={() => setEventBgColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${eventBgColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">CTA</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {eventOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setEventCtaColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${eventCtaColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Title</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {eventOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setEventTitleColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${eventTitleColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Badges: Allies</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {eventOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setAlliesBadgeColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${alliesBadgeColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Badges: Nursing Room</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {eventOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setNursingBadgeColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${nursingBadgeColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Badges: Parents & Kids</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {eventOtherOptions.map((c) => (
                        <button key={c} type="button" onClick={() => setParentsBadgeColor(c)} className={`flex items-center gap-2 rounded border px-2 py-1 ${parentsBadgeColor===c?'border-black':'border-gray-300'}`}>
                          <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Logo</div>
                    <div className="mt-1 grid grid-cols-3 gap-2">
                      <div>
                        <div>WOMEN color</div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {eventLogoOptions.map((c) => (
                            <button key={c} type="button" onClick={() => setLogoColors((cur) => ({ ...cur, women: c }))} className={`flex items-center gap-2 rounded border px-2 py-1 ${logoColors.women===c?'border-black':'border-gray-300'}`}>
                              <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                              <span>{c}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>DEVS color</div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {eventLogoOptions.map((c) => (
                            <button key={c} type="button" onClick={() => setLogoColors((cur) => ({ ...cur, devs: c }))} className={`flex items-center gap-2 rounded border px-2 py-1 ${logoColors.devs===c?'border-black':'border-gray-300'}`}>
                              <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                              <span>{c}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>SINGAPORE color</div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {eventLogoOptions.map((c) => (
                            <button key={c} type="button" onClick={() => setLogoColors((cur) => ({ ...cur, singapore: c }))} className={`flex items-center gap-2 rounded border px-2 py-1 ${logoColors.singapore===c?'border-black':'border-gray-300'}`}>
                              <span className={`inline-block h-4 w-4 rounded ${colorBgClass[c]}`} />
                              <span>{c}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-semibold">Speakers</div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span>Count:</span>
                    {[1,2,3].map((n) => (
                      <Button key={n} size="sm" variant={speakerCount === n ? 'default' : 'outline'} onClick={() => {
                        setSpeakerCount(n as 1|2|3)
                        setSpeakers((prev) => {
                          const next = [...prev]
                          next.length = n
                          for (let i=0;i<n;i++) if (!next[i]) next[i] = { name: `Speaker ${i+1}`, title: '', imageUrl: '' }
                          return next
                        })
                      }}>{n}</Button>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    {Array.from({ length: speakerCount }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-3">
                        <div className="grid grid-cols-3 gap-2">
                          <input className="rounded border px-2 py-1" placeholder="Image URL" value={speakers[i]?.imageUrl || ''}
                            onChange={(e) => setSpeakers((prev) => prev.map((s, idx) => idx === i ? { ...s, imageUrl: e.target.value } : s))} />
                          <input className="rounded border px-2 py-1" placeholder="Name" value={speakers[i]?.name || ''}
                            onChange={(e) => setSpeakers((prev) => prev.map((s, idx) => idx === i ? { ...s, name: e.target.value } : s))} />
                          <input className="rounded border px-2 py-1" placeholder="Title" value={speakers[i]?.title || ''}
                            onChange={(e) => setSpeakers((prev) => prev.map((s, idx) => idx === i ? { ...s, title: e.target.value } : s))} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold">Audience</div>
                  <div className="mt-2 flex gap-2">
                    {['Women only', 'Allies welcome'].map((v) => (
                      <Button key={v} size="sm" variant={audienceType === v ? 'default' : 'outline'} onClick={() => setAudienceType(v as 'Women only' | 'Allies welcome')}>{v}</Button>
                    ))}
                    <Button size="sm" variant={audienceType === '' ? 'default' : 'outline'} onClick={() => setAudienceType('')}>None</Button>
                  </div>
                </div>

                <div>
                  <div className="font-semibold">Facilities</div>
                  <div className="mt-2 grid grid-cols-1 gap-2 text-sm">
                    {['Private nursing room', 'Parents & kids welcome'].map((f) => (
                      <label key={f} className="flex items-center gap-2">
                        <input type="checkbox" checked={facilities.includes(f)} onChange={(e) => setFacilities((prev) => e.target.checked ? [...prev, f] : prev.filter((x) => x !== f))} />
                        <span>{f}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold">Partner Logos</div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {partnerLogos.map((url, i) => (
                      <input key={i} className="w-full rounded border px-2 py-1" placeholder={`Logo ${i+1} URL`} value={url}
                        onChange={(e) => setPartnerLogos((prev) => prev.map((u, idx) => idx === i ? e.target.value : u))} />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold">CTA</div>
                  <div className="mt-2 grid grid-cols-1 gap-2">
                    <input className="w-full rounded border px-2 py-1" placeholder="CTA text" value={ctaText} onChange={(e) => setCtaText(e.target.value)} />
                  </div>
                </div>
              </div>
            )}


            <div className="mt-6">
              <ExportButton targetId="canvas" fileName={fileBase} />
            </div>
          </div>

          <div className="md:col-span-2 rounded-xl border bg-white p-4">
            <ScaledPreview width={platformSizes[platform].width} height={platformSizes[platform].height}>
              {template === 'hacktoberfest' && (
                <Hacktoberfest platform={platform} repos={repos} titleText={hackTitleText} subtitleText={hackSubtitleText} bgColor={hackBgColor} ctaColor={hackCtaColor} titleColor={hackTitleColor} linkText={hackLinkText} logoColors={logoColors} decorVariant={decorVariant} />
              )}
              {template === 'event-promo' && (
                <EventPromo
                  platform={platform}
                  eventName={eventName}
                  eventSubtitle={eventSubtitle}
                  eventDescription={eventDescription}
                  speakers={speakers.slice(0, speakerCount)}
                  eventDateTime={eventDateTime}
                  eventVenue={eventVenue}
                  audienceType={audienceType || undefined}
                  facilities={facilities}
                  partnerLogos={partnerLogos.filter(Boolean)}
                  ctaText={ctaText}
                  bgColor={eventBgColor}
                  ctaColor={eventCtaColor}
                  titleColor={eventTitleColor}
                  linkText={eventLinkText}
                  alliesBadgeColor={alliesBadgeColor}
                  nursingBadgeColor={nursingBadgeColor}
                  parentsBadgeColor={parentsBadgeColor}
                  logoColors={logoColors}
                  decorVariant={decorVariant}
                />
              )}
            </ScaledPreview>
          </div>
        </div>
      </main>
    </>
  )
}

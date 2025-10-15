import React, { useEffect, useState } from 'react'
import Logo from '@/components/Logo'
import ShapeDecor from '@/components/ShapeDecor'
import styles from './event-promo.module.css'
import { platformSizes, PlatformKey } from '@/lib/platformSizes'
import { getTypeScale } from '@/lib/typography'

export type Speaker = { imageUrl?: string; name: string; title?: string }
type RootColor = 'teal'|'coral'|'yellow'|'navy'|'offwhite'|'black'

type Props = {
  platform: PlatformKey
  speakers: Speaker[]
  eventName: string
  eventSubtitle?: string
  eventDescription?: string
  eventDateTime: string
  eventVenue: string
  audienceType?: 'Women only' | 'Allies welcome'
  facilities?: string[]
  partnerLogos?: string[]
  ctaText?: string
  ctaHref?: string
  linkText?: string
  bgColor?: RootColor
  ctaColor?: RootColor
  titleColor?: RootColor
  logoColors?: { women?: 'teal'|'coral'|'yellow'|'navy'|'offwhite'; devs?: 'teal'|'coral'|'yellow'|'navy'|'offwhite'; singapore?: 'teal'|'coral'|'yellow'|'navy'|'offwhite' },
  alliesBadgeColor?: RootColor,
  nursingBadgeColor?: RootColor,
  parentsBadgeColor?: RootColor,
  womenBadgeColor?: RootColor,
}

export default function EventPromo({
  platform,
  speakers,
  eventName,
  eventSubtitle,
  eventDescription,
  eventDateTime,
  eventVenue,
  audienceType,
  facilities,
  partnerLogos = [],
  ctaText = 'Sign up on Meetup',
  ctaHref = 'https://www.meetup.com/women-devs-sg/',
  bgColor = 'offwhite',
  ctaColor = 'coral',
  titleColor = 'navy',
  logoColors,
  alliesBadgeColor = 'navy',
  nursingBadgeColor = 'teal',
  parentsBadgeColor = 'yellow',
  womenBadgeColor = 'coral',
  linkText = '👉meetup.com/women-devs-sg/👈',
}: Props) {
  const size = platformSizes[platform]
  const type = getTypeScale(platform)
  const isIG = platform === 'instagram-post'
  const isStory = platform === 'instagram-story'
  const isMeetup = platform === 'meetup-banner'
  const isLinkedIn = platform === 'linkedin-cover'

  const bgClass: Record<RootColor, string> = {
    teal: 'bg-brand-teal',
    coral: 'bg-brand-coral',
    yellow: 'bg-brand-yellow',
    navy: 'bg-brand-navy',
    offwhite: 'bg-brand-offwhite',
    black: 'bg-black',
  }
  const textClass: Record<RootColor, string> = {
    teal: 'text-brand-teal',
    coral: 'text-brand-coral',
    yellow: 'text-brand-yellow',
    navy: 'text-brand-navy',
    offwhite: 'text-brand-offwhite',
    black: 'text-black',
  }

  // CSS variable mapping for inline styles to override .badge defaults in globals.css
  const colorVar: Record<RootColor, string> = {
    teal: 'var(--wdsg-teal)',
    coral: 'var(--wdsg-coral)',
    yellow: 'var(--wdsg-yellow)',
    navy: 'var(--wdsg-navy)',
    offwhite: 'var(--wdsg-offwhite)',
    black: '#000000',
  }
  const textOnBg = (c: RootColor) => (c === 'offwhite' || c === 'yellow' ? '#212121' : '#FFFFFF')

  const darkBg = bgColor === 'teal' || bgColor === 'navy' || bgColor === 'coral'
  const palette: RootColor[] = ['teal','coral','yellow','navy','offwhite']
  const badgeOptions = palette.filter((c) => c !== bgColor)
  const [alliesColor, setAlliesColor] = useState<RootColor>(alliesBadgeColor)
  const [nursingColor, setNursingColor] = useState<RootColor>(nursingBadgeColor)
  const [parentsColor, setParentsColor] = useState<RootColor>(parentsBadgeColor)
  const cycle = (current: RootColor): RootColor => {
    const idx = badgeOptions.indexOf(current)
    return badgeOptions[(idx + 1) % badgeOptions.length] || current
  }

  // Keep badge colors from matching the background when bgColor changes
  useEffect(() => {
    if (alliesColor === bgColor && badgeOptions.length) setAlliesColor(badgeOptions[0])
    if (nursingColor === bgColor && badgeOptions.length) setNursingColor(badgeOptions[0])
    if (parentsColor === bgColor && badgeOptions.length) setParentsColor(badgeOptions[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgColor])

  // Sync internal colors when external props (sidebar toggles) change
  useEffect(() => {
    console.log('Prop change: alliesBadgeColor ->', alliesBadgeColor)
    setAlliesColor(alliesBadgeColor)
  }, [alliesBadgeColor])
  useEffect(() => {
    console.log('Prop change: nursingBadgeColor ->', nursingBadgeColor)
    setNursingColor(nursingBadgeColor)
  }, [nursingBadgeColor])
  useEffect(() => {
    console.log('Prop change: parentsBadgeColor ->', parentsBadgeColor)
    setParentsColor(parentsBadgeColor)
  }, [parentsBadgeColor])

  return (
    <div className="flex flex-col gap-3">
      <div
        id="canvas"
        style={{ width: size.width, height: size.height }}
        className={`relative overflow-hidden rounded-2xl border ${bgClass[bgColor]}`}
      >
        <ShapeDecor />
        
        <div className={`absolute inset-0 z-20 p-6 flex flex-col pointer-events-auto ${isStory ? 'justify-center' : ''}`}>
          <div className="mt-4 flex items-start gap-4">
            <h1 className={`font-bold ${textClass[titleColor]} flex-1 min-w-0`} style={{ fontSize: type.headline, lineHeight: '1' }}>{eventName}</h1>
            <div className={`reset-logo-margin ${isStory ? 'overflow-hidden scale-75 origin-top-left' : isIG ? 'overflow-hidden scale-90 origin-top-right' : ''}`}>
              <Logo colors={logoColors} />
            </div>
          </div>
          {eventSubtitle && (
            <p className={`mt-1 ${darkBg ? 'text-white' : 'text-gray-800'}`} style={{ fontSize: type.body }}>{eventSubtitle}</p>
          )}
          {eventDescription && <p className={`mt-2 max-w-prose ${darkBg ? 'text-white' : 'text-gray-800'}`} style={{ fontSize: type.caption }}>{eventDescription}</p>}

          <div className="mt-4 flex gap-4">
            <div className="flex-1 min-w-0 flex">
              <div className="flex-1 flex flex-col justify-center">
                <div className={`grid grid-cols-1 gap-3`}>
                  {speakers.map((s: Speaker, i: number) => (
                    <div key={i} className={`${styles.speaker} w-full max-w-full`}>
                      <div className={`${speakers.length === 1 ? 'flex items-center p-2' : 'flex items-center'} gap-3 w-full`}>
                        {s.imageUrl ? (
                          <img
                            src={s.imageUrl}
                            alt={s.name}
                            className={`${speakers.length === 1 ? 'w-[250px] h-[250px]' : 'w-[130px] h-[130px]'} object-cover rounded-lg shrink-0`}
                          />
                        ) : (
                          <div className={`${speakers.length === 1 ? 'w-[200px] h-[200px]' : 'h-32 w-32'} rounded-lg bg-gray-200 shrink-0`} />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold break-words whitespace-normal" style={{ fontSize: type.body }}>{s.name}</div>
                          {s.title && <div className="text-gray-600 break-words whitespace-normal" style={{ fontSize: type.caption }}>{s.title}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[min(40%)] flex flex-col items-end text-right gap-3">
              <div className={`${darkBg ? 'text-white' : 'text-gray-800'}`} style={{ fontSize: type.body }}>
                <div className="font-semibold">📅{eventDateTime}</div>
                <div className={`${darkBg ? 'text-white' : 'text-gray-800'}`}>📍{eventVenue}</div>
              </div>
              <div className="flex flex-wrap justify-end items-center gap-2 pointer-events-auto">
                {audienceType === 'Women only' && (
                  <span
                    className={`inline-block px-[10px] py-[4px] m-[2px] rounded-full text-[25px] select-none`}
                    style={{ backgroundColor: colorVar[womenBadgeColor], color: textOnBg(womenBadgeColor), opacity: 1 }}
                  >
                    Women Only 👩‍💻
                  </span>
                )}
                {audienceType === 'Allies welcome' && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = cycle(alliesColor)
                      console.log('Allies badge click', { current: alliesColor, next })
                      setAlliesColor(next)
                    }}
                    className={`inline-block px-[10px] py-[4px] m-[2px] rounded-full text-[25px] cursor-pointer pointer-events-auto`}
                    style={{ backgroundColor: colorVar[alliesColor], color: textOnBg(alliesColor), opacity: 1 }}
                  >
                    Allies: Bring a 👩 Friend
                  </button>
                )}
                {facilities?.includes('Private nursing room') && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = cycle(nursingColor)
                      console.log('Nursing badge click', { current: nursingColor, next })
                      setNursingColor(next)
                    }}
                    className={`inline-block px-[10px] py-[4px] m-[2px] rounded-full text-[25px] cursor-pointer pointer-events-auto`}
                    style={{ backgroundColor: colorVar[nursingColor], color: textOnBg(nursingColor), opacity: 1 }}
                  >
                    Nursing Room Available 🍼
                  </button>
                )}
                {facilities?.includes('Parents & kids welcome') && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = cycle(parentsColor)
                      console.log('Parents badge click', { current: parentsColor, next })
                      setParentsColor(next)
                    }}
                    className={`inline-block px-[10px] py-[4px] m-[2px] rounded-full text-[25px] cursor-pointer pointer-events-auto`}
                    style={{ backgroundColor: colorVar[parentsColor], color: textOnBg(parentsColor), opacity: 1 }}
                  >
                    Parents & Kids Welcome 👨‍👩‍👧‍👦
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* CTA below the speaker cards */}
          <div className="mt-6 flex flex-col items-center">
            <a href={ctaHref} className={`rounded-full ${bgClass[ctaColor]} ${isIG || isStory ? 'px-10 py-5 text-2xl' : isLinkedIn ? 'px-7 py-3 text-lg' : isMeetup ? 'hidden' : 'px-8 py-4 text-xl'} text-white font-semibold`}>
              {ctaText}
            </a>
            <div className={`mt-2 ${darkBg ? 'text-white' : 'text-gray-800'} text-base text-xl`}>{linkText}</div>
          </div>

          <div className="mt-auto flex items-end justify-start absolute bottom-4 right-0 pointer-events-none">
            {partnerLogos.length > 0 && (
              <div className="flex items-center justify-start gap-3">
                {partnerLogos.map((src, i) => (
                  <img key={i} src={src} alt="partner logo" className="h-20 w-auto object-contain" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

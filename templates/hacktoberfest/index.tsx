import React from 'react'
import Logo from '@/components/Logo'
import ShapeDecor from '@/components/ShapeDecor'
import RepoCard from '@/components/RepoCard'
import { Github } from 'lucide-react'
import { platformSizes, PlatformKey } from '@/lib/platformSizes'
import { getTypeScale } from '@/lib/typography'

export type RepoCard = {
  name: string
  description?: string
  stars?: number
  forks?: number
  prMerged?: number
  openIssues?: number
  goodFirstIssues?: number
}

type RootColor = 'teal'|'coral'|'yellow'|'navy'|'offwhite'|'black'

type Props = {
  platform: PlatformKey
  repos: RepoCard[]
  titleText?: string
  subtitleText?: string
  bgColor?: RootColor
  ctaColor?: RootColor
  titleColor?: RootColor
  linkText?: string
  logoColors?: { women?: 'teal'|'coral'|'yellow'|'navy'|'offwhite'; devs?: 'teal'|'coral'|'yellow'|'navy'|'offwhite'; singapore?: 'teal'|'coral'|'yellow'|'navy'|'offwhite' }
  decorVariant?: 'playful' | 'tech' | 'games' | 'women'
}

export default function Hacktoberfest({ platform, repos, titleText = 'Hacktoberfest🎉', subtitleText = '📅1–31 October', bgColor = 'yellow', ctaColor = 'coral', titleColor = 'teal', linkText = '👉github.com/orgs/Women-Devs-SG👈', logoColors, decorVariant = 'playful' }: Props) {
  const size = platformSizes[platform]
  const type = getTypeScale(platform)

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

  // Layout rules by platform
  const isIG = platform === 'instagram-post'
  const isStory = platform === 'instagram-story'
  const isMeetup = platform === 'meetup-banner'
  const isLinkedIn = platform === 'linkedin-cover'

  const repoContainer = (() => {
    if (isIG || isStory) return 'flex flex-col gap-3'
    if (isMeetup) return 'grid grid-cols-3 gap-3'
    if (isLinkedIn) return 'flex flex-col gap-2'
    return 'grid grid-cols-2 gap-3'
  })()

  const darkBg = bgColor === 'teal' || bgColor === 'navy' || bgColor === 'coral'

  return (
    <div className="flex flex-col gap-3">
      <div
        id="canvas"
        style={{ width: size.width, height: size.height }}
        className={`relative overflow-hidden rounded-2xl border border-black/10 ${bgClass[bgColor]}`}
      >
        {isStory ? (
          <div className="absolute inset-0 z-0 flex flex-col">
            <div className="h-1/2">
              <ShapeDecor absolute={false} variant={decorVariant} />
            </div>
            <div className="h-1/2">
              <ShapeDecor absolute={false} variant={decorVariant} />
            </div>
          </div>
        ) : (
          <ShapeDecor variant={decorVariant} />
        )}
        <div className={`absolute inset-0 z-10 ${isLinkedIn ? 'p-2' : 'p-6'} ${isStory ? 'flex flex-col justify-center p-10' : ''}`}>
          {/* Header */}
          <div className={`${isStory ? 'flex flex-col items-start gap-4' : `flex ${isLinkedIn ? 'items-center' : 'items-start'} justify-between`}`}>
            <div className={`reset-logo-margin ${isStory ? 'overflow-hidden scale-75 origin-top-left' : isIG ? 'overflow-hidden scale-90 origin-top-left' : ''}`}>
              <Logo colors={logoColors} />
            </div>
            <div className={`${isStory ? 'text-left w-full' : 'text-right'}`} style={{ fontSize: type.caption }}>
              <div className={`font-semibold ${textClass[titleColor]} ${isStory ? 'w-full' : ''}`} style={{ fontSize: isStory ? '110px' : '70px' }}>{titleText}</div>
              <div className={`${darkBg ? 'text-white' : 'text-gray-800'}`} style={{ fontSize: isStory ? type.body : type.body }}>{subtitleText}</div>
            </div>
          </div>


          {/* Body layout */}
          <div className={`${isLinkedIn ? 'mt-2' : 'mt-6'} ${isLinkedIn ? 'flex' : ''} ${isLinkedIn ? 'gap-4' : ''}`}>
            {isLinkedIn && (
              <div className="flex-1" />
            )}

            <div className={`${isLinkedIn ? 'w-[50%]' : 'w-full'} ${repoContainer}`}>
              {repos.map((r) => (
                <RepoCard
                  key={r.name}
                  name={r.name}
                  description={r.description}
                  stars={r.stars}
                  forks={r.forks}
                  prMerged={r.prMerged}
                  openIssues={r.openIssues}
                  goodFirstIssues={r.goodFirstIssues}
                  sizes={{ body: type.body, caption: type.caption }}
                />
              ))}
            </div>
          </div>

          {/* CTA placement */}
          {isIG || isStory ? (
            <div className="mt-6 flex flex-col items-center">
              <div className={`rounded-full ${bgClass[ctaColor]} ${isStory ? 'text4xl' : 'text2xl' } ${ctaColor==='offwhite' ? 'text-gray-800' : 'text-white'} ${isStory ? 'gap-3 px-20 py-5' : 'px-10 py-5'} font-semibold inline-flex items-center`} style={{ fontSize: isStory ? type.body : undefined }}>
                <span>Start Contributing on GitHub</span>
                <Github className="ml-3" size={isStory ? 50 : 24} strokeWidth={isStory ? 2.5 : 2} />
              </div>
            <div className={`${isStory ? 'mt-10' : 'mt-2'} ${darkBg ? 'text-white' : 'text-gray-800'} text-3xl`} style={{ fontSize: isStory ? type.body : undefined }}>{linkText}</div>
            </div>
          ) : isMeetup ? (
            <div className="mt-6 flex flex-col items-center">
              <div className={`rounded-full ${bgClass[ctaColor]} px-10 py-5 ${ctaColor==='offwhite' ? 'text-gray-800' : 'text-white'} text-2xl font-semibold`}>Start Contributing</div>
              <div className={`mt-2 ${darkBg ? 'text-white' : 'text-gray-800'} text-lg`}>{linkText}</div>
            </div>
          ) : isLinkedIn ? (
            <div className="mt-2 flex flex-col items-end">
              <div className={`rounded-full ${bgClass[ctaColor]} px-7 py-3 ${ctaColor==='offwhite' ? 'text-gray-800' : 'text-white'} text-lg font-semibold`}>Start Contributing</div>
              <div className={`mt-2 ${darkBg ? 'text-white' : 'text-gray-800'} text-base`}>{linkText}</div>
            </div>
          ) : null}
          <style>{`
            :global(.reset-logo-margin .logo) { margin-left: 0 !important; }
          `}</style>
        </div>
      </div>
    </div>
  )
}

export type PlatformKey = 'instagram-post' | 'instagram-story' | 'meetup-banner' | 'linkedin-cover'

export const platformSizes: Record<PlatformKey, { width: number; height: number; label: string }> = {
  'instagram-post': { width: 1080, height: 1080, label: 'Instagram Post (1080×1080)' },
  'instagram-story': { width: 1080, height: 1920, label: 'Instagram Story (1080×1920)' },
  'meetup-banner': { width: 1200, height: 675, label: 'Meetup Banner (1200×675)' },
  'linkedin-cover': { width: 1128, height: 191, label: 'LinkedIn Cover (1128×191)' },
}

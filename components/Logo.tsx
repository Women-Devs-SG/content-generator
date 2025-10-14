type RootColor = 'teal' | 'coral' | 'yellow' | 'navy' | 'offwhite'

type Props = {
  colors?: { women?: RootColor; devs?: RootColor; singapore?: RootColor }
}

export default function Logo({ colors = { women: 'navy', devs: 'navy', singapore: 'navy' } }: Props) {
  const womenColor = `var(--wdsg-${colors.women ?? 'navy'})`
  const devsColor = `var(--wdsg-${colors.devs ?? 'navy'})`
  const singaporeColor = `var(--wdsg-${colors.singapore ?? 'navy'})`

  return (
    <div className="logo">
      <div className="women" style={{ color: womenColor }}>WOMEN</div>
      <div className="devs" style={{ color: devsColor }}>DEVS</div>
      <div className="singapore" style={{ color: singaporeColor }}>SINGAPORE</div>
    </div>
  )
}

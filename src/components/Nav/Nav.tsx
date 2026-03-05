import { useRouter } from '@tanstack/react-router'
import { ArrowLeft, House } from 'lucide-react'
import { Button } from '@components/Button/Button'
import { LinkButton } from '@components/Button/LinkButton'
import { nav } from './nav.css'

export function Nav() {
  const router = useRouter()

  return (
    <nav className={nav}>
      <Button variant="ghost" size="sm" onPress={() => router.history.back()}>
        <Button.Icon><ArrowLeft size={14} /></Button.Icon>
        <Button.Label>Back</Button.Label>
      </Button>
      <LinkButton href="/" variant="ghost" size="sm">
        <Button.Icon><House size={14} /></Button.Icon>
        <Button.Label>Home</Button.Label>
      </LinkButton>
    </nav>
  )
}

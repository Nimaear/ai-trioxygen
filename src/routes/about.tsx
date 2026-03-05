import { Inline } from '@components/layout/Inline'
import { Stack } from '@components/layout/Stack'
import { Container } from '@components/layout/Container'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <Container>
          <Stack>
            <Inline>Yo</Inline>
          </Stack>
        </Container>
      </section>
    </main>
  )
}

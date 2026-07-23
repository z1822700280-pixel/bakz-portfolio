import { projects } from '@/data/projects'
import ProjectDetailClient from '@/components/ProjectDetailClient'

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ProjectDetailClient id={id} />
}

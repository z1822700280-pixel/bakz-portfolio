import { NextResponse } from 'next/server'
import { projects as staticProjects } from '@/data/projects'

export const dynamic = 'force-static'

export async function GET() {
  try {
    // Try to fetch from TinaCMS if configured
    if (process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN) {
      try {
        // Dynamic import to avoid errors when TinaCMS is not configured
        const { default: client } = await import('@/tina/__generated__/client')
        const projectsResponse = await client.queries.projectConnection()
        const projects = projectsResponse.data.projectConnection.edges?.map((edge) => edge?.node) || []
        
        if (projects.length > 0) {
          return NextResponse.json(projects)
        }
      } catch (tinaError) {
        console.warn('TinaCMS fetch failed, falling back to static data:', tinaError)
      }
    }

    // Fall back to static data
    return NextResponse.json(staticProjects)
  } catch (error) {
    console.error('Error in projects API:', error)
    return NextResponse.json(staticProjects)
  }
}

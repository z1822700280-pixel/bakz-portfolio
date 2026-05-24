import { NextResponse } from 'next/server'
import { galleryItems as staticGallery } from '@/data/gallery'

export async function GET() {
  try {
    // Try to fetch from TinaCMS if configured
    if (process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN) {
      try {
        // Dynamic import to avoid errors when TinaCMS is not configured
        const { default: client } = await import('@/tina/__generated__/client')
        const galleryResponse = await client.queries.galleryConnection()
        const galleryItems = galleryResponse.data.galleryConnection.edges?.map((edge) => edge?.node) || []
        
        if (galleryItems.length > 0) {
          return NextResponse.json(galleryItems)
        }
      } catch (tinaError) {
        console.warn('TinaCMS fetch failed, falling back to static data:', tinaError)
      }
    }

    // Fall back to static data
    return NextResponse.json(staticGallery)
  } catch (error) {
    console.error('Error in gallery API:', error)
    return NextResponse.json(staticGallery)
  }
}

import { NextResponse } from 'next/server'
import { gallerySeries as staticGallery } from '@/data/gallery'

export async function GET() {
  return NextResponse.json(staticGallery)
}

export interface GalleryItem {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  category: 'poster' | 'photography' | 'aigc'
  tags: string[]
  year: number
  image: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'poster-1',
    title: { zh: '海报设计 1', en: 'Poster Design 1' },
    description: { zh: '创意海报设计', en: 'Creative poster design' },
    category: 'poster',
    tags: ['海报', '设计'],
    year: 2024,
    image: '/images/placeholder.jpg',
  },
  {
    id: 'photo-1',
    title: { zh: '摄影作品 1', en: 'Photography 1' },
    description: { zh: '艺术摄影', en: 'Art photography' },
    category: 'photography',
    tags: ['摄影'],
    year: 2024,
    image: '/images/placeholder.jpg',
  },
  {
    id: 'aigc-1',
    title: { zh: 'AIGC 视觉 1', en: 'AIGC Visual 1' },
    description: { zh: 'AI 生成视觉作品', en: 'AI-generated visual work' },
    category: 'aigc',
    tags: ['AIGC', 'AI'],
    year: 2024,
    image: '/images/placeholder.jpg',
  },
]

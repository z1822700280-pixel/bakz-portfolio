export interface Project {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  category: 'game' | 'video'
  tags: string[]
  year: number
  thumbnail: string
  images: string[]
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 'ue-scene-1',
    title: { zh: 'UE5 场景项目 1', en: 'UE5 Scene Project 1' },
    description: { zh: '沉浸式空间体验设计', en: 'Immersive spatial experience design' },
    category: 'game',
    tags: ['UE5', '场景搭建'],
    year: 2024,
    thumbnail: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    tools: ['Unreal Engine 5'],
  },
  {
    id: 'unity-game-1',
    title: { zh: 'Unity 独立游戏 1', en: 'Unity Indie Game 1' },
    description: { zh: '独立游戏开发与设计', en: 'Indie game development and design' },
    category: 'game',
    tags: ['Unity', '独立游戏'],
    year: 2024,
    thumbnail: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    tools: ['Unity'],
  },
  {
    id: 'aigc-video-1',
    title: { zh: 'AIGC 视频项目 1', en: 'AIGC Video Project 1' },
    description: { zh: 'AI 生成视频创作', en: 'AI-generated video creation' },
    category: 'video',
    tags: ['AIGC', '视频制作'],
    year: 2024,
    thumbnail: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    tools: ['Stable Diffusion', 'After Effects'],
  },
  {
    id: 'ui-design-1',
    title: { zh: 'EGORGO UI 设计', en: 'EGORGO UI Design' },
    description: { zh: '动态 UI 设计与交互', en: 'Dynamic UI design and interaction' },
    category: 'video',
    tags: ['UI设计', 'Figma'],
    year: 2024,
    thumbnail: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    tools: ['Figma'],
  },
]

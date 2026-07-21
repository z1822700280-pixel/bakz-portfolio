export interface GallerySeries {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  category: 'aigc' | '3d' | 'ui' | 'illustration'
  tags: string[]
  year: number
  cover: string
  images: string[]
}

const base = '/images/gallery'

export const gallerySeries: GallerySeries[] = [
  {
    id: 'ai-creations',
    title: { zh: 'AI 创作图', en: 'AI Creations' },
    description: {
      zh: 'AI 辅助生成的系列视觉作品，探索数字艺术的风格化表达与色彩实验。',
      en: 'AI-assisted visual creations exploring stylized digital art expression and color experimentation.',
    },
    category: 'aigc',
    tags: ['AIGC', '数字艺术', '风格探索'],
    year: 2025,
    cover: `${base}/ai-creations/img-0.png`,
    images: [
      `${base}/ai-creations/img-0.png`,
      `${base}/ai-creations/img-1.png`,
      `${base}/ai-creations/img-2.png`,
      `${base}/ai-creations/img-3.png`,
      `${base}/ai-creations/img-4.png`,
      `${base}/ai-creations/img-5.png`,
    ],
  },
  {
    id: 'creative-poster',
    title: { zh: '创意海报', en: 'Creative Posters' },
    description: {
      zh: '自主设计的概念海报，注重视觉冲击力与版式构成的创意表达。',
      en: 'Original concept posters focusing on visual impact and creative layout composition.',
    },
    category: 'aigc',
    tags: ['海报设计', '创意', '版式'],
    year: 2024,
    cover: `${base}/creative-poster/img-0.png`,
    images: [
      `${base}/creative-poster/img-0.png`,
      `${base}/creative-poster/img-1.png`,
    ],
  },
  {
    id: 'yingjing-poster-series',
    title: { zh: '荥经黑砂系列海报', en: 'Yingjing Black Sand Poster Series' },
    description: {
      zh: '非遗文化传承系列海报，参加全国职业技能大赛作品（银奖），以荥经黑砂传统工艺为视觉主题。',
      en: 'Intangible cultural heritage poster series, National Vocational Skills Competition entry (Silver Award), featuring Yingjing black sand traditional craftsmanship.',
    },
    category: 'aigc',
    tags: ['海报设计', '非遗文化', '全国大赛', '银奖'],
    year: 2024,
    cover: `${base}/yingjing-poster/img-0.jpg`,
    images: [
      `${base}/yingjing-poster/img-0.jpg`,
      `${base}/yingjing-poster/img-1.jpg`,
    ],
  },
  {
    id: 'early-modeling',
    title: { zh: '早期建模', en: 'Early 3D Modeling' },
    description: {
      zh: 'Maya 建模入门阶段的练习作品，涵盖基础造型、硬表面建模与场景搭建。',
      en: 'Entry-level Maya modeling practice works covering basic shapes, hard-surface modeling, and scene building.',
    },
    category: '3d',
    tags: ['Maya', '建模', '3D'],
    year: 2024,
    cover: `${base}/early-modeling/img-0.jpg`,
    images: [
      `${base}/early-modeling/img-0.jpg`,
      `${base}/early-modeling/img-1.jpg`,
      `${base}/early-modeling/img-2.jpg`,
      `${base}/early-modeling/img-3.jpg`,
      `${base}/early-modeling/img-4.jpg`,
      `${base}/early-modeling/img-5.jpg`,
      `${base}/early-modeling/img-6.jpg`,
      `${base}/early-modeling/img-7.jpg`,
    ],
  },
  {
    id: 'pt-material',
    title: { zh: 'PT 材质练习', en: 'Substance Painter Material Practice' },
    description: {
      zh: 'Substance Painter 材质制作练习，探索不同质感表现与纹理细节的工艺。',
      en: 'Substance Painter material practice exploring various texture expressions and detail craftsmanship.',
    },
    category: '3d',
    tags: ['Substance Painter', '材质', '纹理'],
    year: 2024,
    cover: `${base}/pt-material/img-0.png`,
    images: [
      `${base}/pt-material/img-0.png`,
      `${base}/pt-material/img-1.png`,
      `${base}/pt-material/img-2.jpg`,
      `${base}/pt-material/img-3.jpg`,
      `${base}/pt-material/img-4.png`,
    ],
  },
  {
    id: 'model-render',
    title: { zh: '建模材质渲染', en: 'Modeling & Material Rendering' },
    description: {
      zh: 'Maya 建模搭配材质渲染的完整练习作品，综合展示模型精度与光影表现力。',
      en: 'Complete practice works combining Maya modeling with material rendering, showcasing model precision and lighting expressiveness.',
    },
    category: '3d',
    tags: ['Maya', '材质', '渲染', '3D'],
    year: 2024,
    cover: `${base}/model-render/img-0.png`,
    images: [
      `${base}/model-render/img-0.png`,
      `${base}/model-render/img-1.png`,
      `${base}/model-render/img-2.png`,
      `${base}/model-render/img-3.png`,
    ],
  },
  {
    id: 'illustration',
    title: { zh: '插画作品', en: 'Illustrations' },
    description: {
      zh: '原创插画作品，探索不同风格与媒介的绘画表达。',
      en: 'Original illustrations exploring various styles and artistic expressions.',
    },
    category: 'illustration',
    tags: ['插画', '原创', '绘画'],
    year: 2024,
    cover: `${base}/illustration/img-0.jpg`,
    images: [
      `${base}/illustration/img-0.jpg`,
      `${base}/illustration/img-1.png`,
    ],
  },
]

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

const base = 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/gallery'

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
    title: { zh: '创意海报 · 非遗文化', en: 'Creative Posters · Heritage' },
    description: {
      zh: '自主设计的概念海报与非遗文化传承系列，含全国职业技能大赛银奖作品，注重视觉冲击力与版式构成的创意表达。',
      en: 'Original concept posters and intangible cultural heritage series, including National Skills Competition Silver Award work, focusing on visual impact and creative layout composition.',
    },
    category: 'aigc',
    tags: ['海报设计', '创意', '非遗文化', '全国大赛', '银奖'],
    year: 2024,
    cover: `${base}/creative-poster/img-0.png`,
    images: [
      `${base}/creative-poster/img-0.png`,
      `${base}/creative-poster/img-1.png`,
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
    id: 'ui-design-archive',
    title: { zh: 'UI 界面设计', en: 'UI Interface Design' },
    description: {
      zh: '购物软件整套 UI 界面设计，Figma 搭建，含完整组件规范与交互动效。',
      en: 'Full shopping app UI design built with Figma, including complete component specifications and interactive animations.',
    },
    category: 'ui',
    tags: ['UI设计', 'Figma', '移动端', '交互原型'],
    year: 2024,
    cover: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/thumbnail.jpg',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-0.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-1.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-2.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-3.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-4.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-6.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-8.jpg',
    ],
  },
]

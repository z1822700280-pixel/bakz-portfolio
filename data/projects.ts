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
  // UE Scene Projects
  {
    id: 'ue-scene-1',
    title: { zh: '废墟图书馆', en: 'Ruined Library' },
    description: {
      zh: '后启示录风格的废弃图书馆场景，融合自然侵蚀与人工建筑的对比美学。动态光影系统营造沉浸式氛围。',
      en: 'Post-apocalyptic abandoned library scene, blending natural erosion with architectural contrast. Dynamic lighting system creates an immersive atmosphere.',
    },
    category: 'game',
    tags: ['UE5', '场景搭建', '灯光设计'],
    year: 2024,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    tools: ['Unreal Engine 5', 'Substance Painter'],
  },
  {
    id: 'ue-scene-2',
    title: { zh: '霓虹雨巷', en: 'Neon Rain Alley' },
    description: {
      zh: '赛博朋克风格的城市雨巷场景，实时反射与体积雾效打造未来都市的潮湿质感。',
      en: 'Cyberpunk-style rainy city alley, real-time reflections and volumetric fog create a damp futuristic urban texture.',
    },
    category: 'game',
    tags: ['UE5', '赛博朋克', '天气系统'],
    year: 2024,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    tools: ['Unreal Engine 5', 'Houdini'],
  },
  {
    id: 'ue-scene-3',
    title: { zh: '浮空神殿', en: 'Floating Temple' },
    description: {
      zh: '东方幻想风格的浮空建筑群，云海翻涌间若隐若现的古代神殿，探索空间叙事的可能性。',
      en: 'Eastern fantasy-style floating architecture, ancient temples emerging through rolling clouds, exploring spatial narrative possibilities.',
    },
    category: 'game',
    tags: ['UE5', '东方美学', '关卡设计'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    tools: ['Unreal Engine 5', 'World Creator'],
  },

  // Unity Indie Games
  {
    id: 'unity-game-1',
    title: { zh: '纸鹤旅途', en: 'Paper Crane Journey' },
    description: {
      zh: '以折纸为核心机制的叙事冒险游戏。玩家操控纸鹤穿越手工质感的世界，体验关于离别与重逢的故事。',
      en: 'Narrative adventure game with origami mechanics. Players guide a paper crane through a handcrafted world, experiencing a story of parting and reunion.',
    },
    category: 'game',
    tags: ['Unity', '独立游戏', '叙事设计'],
    year: 2024,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    tools: ['Unity', 'Photoshop'],
  },
  {
    id: 'unity-game-2',
    title: { zh: '回声迷宫', en: 'Echo Labyrinth' },
    description: {
      zh: '基于声音定位的解谜游戏。在黑暗迷宫中，玩家依靠回声判断方向与障碍，探索听觉交互的设计边界。',
      en: 'Sound-based puzzle game. In dark mazes, players rely on echoes to navigate obstacles, pushing the boundaries of auditory interaction design.',
    },
    category: 'game',
    tags: ['Unity', '独立游戏', '声音设计'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    tools: ['Unity', 'FMOD'],
  },

  // UI Design Projects
  {
    id: 'ui-design-1',
    title: { zh: 'EGORGO 动态界面', en: 'EGORGO Dynamic Interface' },
    description: {
      zh: '概念化动态 UI 系统设计，探索界面元素的运动语言与情感表达，打造具有生命力的交互体验。',
      en: 'Conceptual dynamic UI system design, exploring motion language and emotional expression of interface elements to create living interactions.',
    },
    category: 'video',
    tags: ['UI设计', '动态设计', 'Figma'],
    year: 2024,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Figma', 'After Effects'],
  },
  {
    id: 'ui-design-2',
    title: { zh: 'Zenith 音乐播放器', en: 'Zenith Music Player' },
    description: {
      zh: '以声波可视化为核心的音乐播放器 UI 概念设计，界面随音乐节奏实时变化，让视觉与听觉同步律动。',
      en: 'Music player UI concept centered on sound wave visualization, where the interface transforms in sync with musical rhythm.',
    },
    category: 'video',
    tags: ['UI设计', '音乐可视化', '原型设计'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Figma', 'Lottie'],
  },

  // AIGC Video Projects
  {
    id: 'aigc-video-1',
    title: { zh: '梦境漫游', en: 'Dreamscape Drift' },
    description: {
      zh: '利用 AI 生成技术构建的超现实梦境短片，融合真实影像与 AI 想象，探索意识流叙事的视觉可能。',
      en: 'Surreal dream short film built with AI generation, blending real footage with AI imagination to explore stream-of-consciousness visual narrative.',
    },
    category: 'video',
    tags: ['AIGC', '短片', '超现实'],
    year: 2024,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Stable Diffusion', 'After Effects', 'DaVinci Resolve'],
  },
  {
    id: 'aigc-video-2',
    title: { zh: '水墨山水 · AI 重绘', en: 'Ink Landscape · AI Repaint' },
    description: {
      zh: '将传统水墨山水画通过 AI 技术动态化呈现，古典意境与现代算法的碰撞，赋予千年画卷新的生命力。',
      en: 'Animating traditional Chinese ink landscapes through AI — a collision of classical aesthetics and modern algorithms, breathing new life into ancient art.',
    },
    category: 'video',
    tags: ['AIGC', '中国风', '动态艺术'],
    year: 2024,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Midjourney', 'Runway', 'Premiere Pro'],
  },
  {
    id: 'aigc-video-3',
    title: { zh: '城市变奏曲', en: 'Urban Variations' },
    description: {
      zh: '以成都城市景观为素材，通过 AI 图像生成实现四季更替与风格转换的视觉实验，展现城市肌理的多面性。',
      en: 'A visual experiment using Chengdu cityscapes as source material, achieving seasonal shifts and style transfers through AI to reveal urban texture.',
    },
    category: 'video',
    tags: ['AIGC', '城市', '风格迁移'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['ComfyUI', 'AnimateDiff', 'After Effects'],
  },
]

export interface Project {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  category: 'game' | 'ai-visual' | 'post-production'
  tags: string[]
  year: number
  thumbnail: string
  images: string[]
  tools: string[]
}

export const projects: Project[] = [
  // ── ① 游戏与交互设计 ──
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

  // ── ② AI 视觉与数字艺术 ──
  {
    id: 'aigc-video-1',
    title: { zh: '梦境漫游', en: 'Dreamscape Drift' },
    description: {
      zh: '利用 AI 生成技术构建的超现实梦境短片，融合真实影像与 AI 想象，探索意识流叙事的视觉可能。',
      en: 'Surreal dream short film built with AI generation, blending real footage with AI imagination to explore stream-of-consciousness visual narrative.',
    },
    category: 'ai-visual',
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
    category: 'ai-visual',
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
    category: 'ai-visual',
    tags: ['AIGC', '城市', '风格迁移'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['ComfyUI', 'AnimateDiff', 'After Effects'],
  },
  {
    id: 'concept-design-1',
    title: { zh: '幻境概念设计', en: 'Dreamscape Concept' },
    description: {
      zh: 'AI 生成的概念设计系列，探索超现实梦境中的空间结构与色彩情绪，为虚拟世界构筑视觉基调。',
      en: 'AI-generated concept design series exploring spatial structures and color moods in surreal dreamscapes, building visual foundations for virtual worlds.',
    },
    category: 'ai-visual',
    tags: ['AIGC', '概念设计', '超现实'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Midjourney', 'Photoshop'],
  },
  {
    id: 'character-design-1',
    title: { zh: '机械共生', en: 'Mechanical Symbiosis' },
    description: {
      zh: 'AI 驱动的角色设计项目，将有机生物形态与机械结构融合，创造未来主义风格的原创角色概念。',
      en: 'AI-driven character design project blending organic biological forms with mechanical structures, creating futuristic original character concepts.',
    },
    category: 'ai-visual',
    tags: ['AIGC', '角色设计', '未来主义'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Midjourney', 'ComfyUI', 'Photoshop'],
  },

  // ── ③ 影视后期与视觉设计 ──
  {
    id: 'goldfish-chamber',
    title: { zh: '金鱼房间', en: 'The Goldfish Chamber' },
    description: {
      zh: '《金鱼房间》是一部聚焦当代青年毕业困境的短片，讲述了刚毕业的主人公阿藤在出租屋内通过五通电话串联起的内心挣扎。影片以面试失败为起点，经历母亲的担忧、经济拮据的窘迫、恋情的结束，最终迎来复试机会，传递出"人生如巧克力"的哲思。\n\n本片在视觉语言上强调隐喻与象征：四个猫眼镜头窥探外界，映射阿藤对社会生活的不适应与逃避心理；金鱼作为情绪载体，象征阿藤被束缚的自我；西装男作为幻想人格出现，代表内心成长与直面困境的勇气。全片采用特写镜头传递人物情绪，以克制的影像风格营造沉浸感。\n\n创作过程中，团队历时四天三夜完成拍摄，面临停电、多次NG等挑战，最终通过集体协作完成作品。我们希望借由阿藤的故事，引发对青年群体生存状态的关注与思考。',
      en: 'The Goldfish Room is a short film centering on the predicaments faced by contemporary young graduates. It follows the protagonist Atou, a fresh graduate, and his inner turmoil woven together by five phone calls made inside his rental apartment. Opening with a failed job interview, the story unfolds to depict his mother\'s anxious concern, the strain of financial hardship, and the end of his romantic relationship—before he finally receives an offer for a second-round interview. The film conveys a philosophical reflection that "life is like a box of chocolates."\n\nVisually, the short leans heavily on metaphor and symbolism. Four peephole shots that peer out at the outside world mirror Atou\'s discomfort with social life and his urge to retreat. The goldfish act as a vessel for his emotions, embodying his confined self. A man in a suit appears as his imagined alter ego, representing inner growth and the courage to confront hardships head-on. Tight close-ups are used throughout to convey the character\'s emotions, and a restrained visual style draws viewers into an immersive viewing experience.\n\nThe crew shot the entire film over four days and three nights, overcoming hurdles including power outages and countless retakes. The finished work came to fruition through full teamwork. Through Atou\'s story, we hope to spark greater attention and reflection on the living conditions of young people today.',
    },
    category: 'post-production',
    tags: ['剪辑', '短片'],
    year: 2024,
    thumbnail: '/images/goldfish-chamber/thumbnail.jpg',
    images: [
      // Full film
      '/images/goldfish-chamber/full-film.mov',
      // Content clips
      '/images/goldfish-chamber/clip-0.mov',
      '/images/goldfish-chamber/clip-1.mov',
      // Content images
      '/images/goldfish-chamber/content-0.jpg',
      '/images/goldfish-chamber/content-1.jpg',
      '/images/goldfish-chamber/content-2.jpg',
      '/images/goldfish-chamber/content-3.jpg',
      '/images/goldfish-chamber/content-4.jpg',
      '/images/goldfish-chamber/content-5.jpg',
      '/images/goldfish-chamber/content-6.jpg',
      '/images/goldfish-chamber/content-7.jpg',
      '/images/goldfish-chamber/content-8.jpg',
      '/images/goldfish-chamber/content-9.jpg',
      '/images/goldfish-chamber/content-10.jpg',
      '/images/goldfish-chamber/content-11.jpg',
      '/images/goldfish-chamber/content-12.jpg',
      '/images/goldfish-chamber/content-13.jpg',
      '/images/goldfish-chamber/content-14.jpg',
      '/images/goldfish-chamber/content-15.jpg',
      '/images/goldfish-chamber/content-16.jpg',
    ],
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Sony'],
  },
  {
    id: 'ui-design-2',
    title: { zh: 'Zenith 音乐播放器', en: 'Zenith Music Player' },
    description: {
      zh: '以声波可视化为核心的音乐播放器 UI 概念设计，界面随音乐节奏实时变化，让视觉与听觉同步律动。',
      en: 'Music player UI concept centered on sound wave visualization, where the interface transforms in sync with musical rhythm.',
    },
    category: 'post-production',
    tags: ['UI设计', '音乐可视化', '原型设计'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Figma', 'Lottie'],
  },
  {
    id: 'edit-project-1',
    title: { zh: '城市记忆', en: 'City Memory' },
    description: {
      zh: '以城市人文为主题的纪实短片，通过剪辑节奏与配乐情绪的交织，记录街头巷尾的真实故事与温度。',
      en: 'A documentary short film on urban humanity, weaving editing rhythm with musical emotion to capture real stories and warmth from the streets.',
    },
    category: 'post-production',
    tags: ['剪辑', '纪实', '城市'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
  },
  {
    id: 'poster-design-1',
    title: { zh: '墨韵', en: 'Ink Rhythm' },
    description: {
      zh: '融合水墨与极简主义的海报设计系列，以留白与笔触的对话传递东方美学的当代诠释。',
      en: 'A poster design series blending ink wash with minimalism, conveying a contemporary interpretation of Eastern aesthetics through the dialogue of negative space and brushstrokes.',
    },
    category: 'post-production',
    tags: ['海报设计', '极简', '东方美学'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'branding-1',
    title: { zh: '森屿咖啡品牌视觉', en: 'Forest Isle Branding' },
    description: {
      zh: '为精品咖啡品牌打造的全套视觉识别系统，包含 logo 设计、包装物料、空间导视及社交媒体视觉规范。',
      en: 'Complete visual identity system for a specialty coffee brand, including logo design, packaging materials, signage, and social media visual guidelines.',
    },
    category: 'post-production',
    tags: ['品牌设计', 'UI设计', '物料设计'],
    year: 2025,
    thumbnail: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    tools: ['Illustrator', 'Photoshop', 'Figma'],
  },
]

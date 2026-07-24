export interface Role {
  zh: string
  en: string
}

export interface ExternalLink {
  label: string
  url: string
}

export interface SnapshotItem {
  label: string
  value: string
}

export interface PipelineStage {
  title: string
  target?: string
  work?: string
  problems?: string
  solutions?: string
}

export interface Challenge {
  question: string
  solutions: string[]
}

export interface OverviewSection {
  title: string
  content: string
}

export interface MediaItem {
  src: string
  type: 'image' | 'video'
  title?: string
  description?: string
}

export interface AIWorkflowItem {
  stage: string
  ai: string
  human: string
}

export interface Project {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  category: 'game' | 'ai-visual' | 'post-production' | 'film' | 'ui-design'
  tags: string[]
  year: number
  thumbnail: string
  images: string[]
  tools: string[]
  role?: Role
  externalLinks?: ExternalLink[]
  reflection?: { zh: string; en: string }
  snapshot?: SnapshotItem[]
  pipeline?: PipelineStage[]
  challenges?: Challenge[]
  overviewSections?: OverviewSection[]
  mediaItems?: MediaItem[]
  aiWorkflow?: AIWorkflowItem[]
}

export const projects: Project[] = [
  // ── ① 游戏与交互设计 ──
  {
    id: 'ue-scene-1',
    title: { zh: '西部世界', en: 'West World' },
    description: {
      zh: '《西部世界》是我独立完成的大学学期游戏引擎实训项目，历时一个月全程自主开发落地。本项目为西部风格写实场景交互 demo，我独立负责场景搭建、主体建模、材质制作、资产整合、动画编辑、蓝图交互与宣传片输出全流程工作，完整实现了从原画参考、模型搭建到引擎交互落地的完整工作链路。\n\n项目前期，我利用 Midjourney 生成大量西部酒馆场景参考图，确立整体视觉风格。主体酒馆建筑由我在 Maya 中分区模块化手工建模，随后导入 Substance Painter 进行材质烘焙、材质球制作与细节纹理调校，最终接入 UE 引擎完成光影适配、材质调试与细节优化。整套制作过程严格遵循标准化分类规范，保证资产整洁、流程可控。\n\n场景内桌椅、摆件等道具资产，我通过筛选高精度外部资源并统一风格调校，使自制主体建筑与外部模型高度融合，整体画面风格统一、质感协调，达到标准化的场景美术审美与制作水准。在模型制作中，我兼顾项目体量与制作效率，合理把控模型精度，在保证整体视觉效果的同时高效推进项目进度。\n\n除场景美术外，我自主完成角色资源导入、动作数据适配与场景动画编辑。同时利用短时间快速自学 UE 蓝图交互逻辑，落地点击开门、物品查看、物理击打等多种基础交互功能，完整实现可互动的写实游戏场景 Demo。在工期紧张的情况下，我快速吸收全新技术知识点，展现出较强的临场学习能力与落地执行力。\n\n项目最终宣传片制作中，我结合 AI 工具辅助优化画面呈现与镜头效果，让成片观感更具表现力，保持了技术与审美同步迭代的创作状态。整段开发过程，我始终保持主动探索的创作状态，熟练融合 AI 辅助创作、传统建模材质流程与引擎交互开发，实现了审美、技术、流程优化的全方位提升。',
      en: 'West World is my independently completed university semester game engine training project, developed entirely from scratch over one month. This is a Western-style realistic scene interactive demo. I independently handled the entire pipeline—scene building, core modeling, material creation, asset integration, animation editing, Blueprint interaction, and promotional video production—completing a full workflow from concept art reference and model building to engine-based interactive implementation.\n\nIn the early stages, I used Midjourney to generate大量 reference images of Western saloon scenes to establish the visual direction. The main saloon building was hand-modeled in Maya using modular分区 techniques, then imported into Substance Painter for material baking, material球 creation, and detail texture tuning. Finally, it was brought into UE for lighting adaptation, material debugging, and detail optimization. The entire process followed standardized classification norms to keep assets clean and the workflow可控.\n\nFor props like tables, chairs, and decorations, I curated high-precision external assets and unified their style to seamlessly blend self-made core architecture with external models. The overall visual style was cohesive and materially consistent, meeting a standardized level of scene art quality. I balanced project scope with production efficiency, maintaining visual quality while keeping the schedule on track.\n\nBeyond environmental art, I independently handled character asset import, motion data adaptation, and scene animation editing. I also quickly self-taught UE Blueprint interaction logic within a short timeframe, implementing basic interactive functions like door opening on click, item inspection, and physical striking—completing a fully interactive realistic game scene demo. Despite the tight schedule, I rapidly absorbed new technical knowledge, demonstrating strong on-the-spot learning ability and execution.\n\nFor the final promotional video, I used AI tools to optimize visual presentation and shot effects, making the final output more expressive while maintaining a state of continuous iteration between technology and aesthetics. Throughout development, I proactively explored and熟练 integrated AI-assisted creation with traditional modeling, material workflows, and engine interaction development—achieving comprehensive improvement in aesthetics, technology, and workflow optimization.',
    },
    category: 'game',
    tags: ['UE5', '场景搭建', '写实', '交互', '全流程'],
    year: 2025,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/thumbnail.jpg',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/clip-0.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/clip-1.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-0.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-1.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-2.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-3.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-4.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-6.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-7.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-8.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-9.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-10.jpg',
    ],
    tools: ['Unreal Engine 5', 'Maya', 'Substance Painter', 'Midjourney', 'Premiere Pro'],
    role: { zh: '独立开发 / 全流程', en: 'Solo Developer / Full Pipeline' },
    reflection: {
      zh: '本次《西部世界》项目是我全程独立攻坚的游戏引擎实训作品，耗时一月独立完成全流程开发，让我的综合创作与技术落地能力得到极大锻炼。不同于单一的建模或渲染作业，本次项目覆盖美术设计、模型制作、材质调校、引擎交互、动画编辑、后期宣发全链路，对我的统筹能力和快速学习能力是极大的考验。\n\n项目制作中，我摒弃固化的制作思维，灵活结合 AI 工具高效获取视觉参考，搭配标准化的建模、材质制作流程，兼顾了创作效率与画面质感，同时通过统一场景资产风格，让自制模型与外部高精度资产完美融合，也夯实了我的场景审美与画面把控能力。面对工期紧张的问题，我自主突击学习 UE 蓝图交互技术，在短时间内落地多项实用交互功能，高效突破技术难点。\n\n整个创作过程我始终保持积极的探索欲，不局限于基础流程落地，主动融合新兴 AI 工具优化创作链路，与时俱进更新创作方式。这次项目让我清晰掌握游戏场景全流程制作规范，也印证了自己高效的自学能力、扎实的美术审美和独立解决问题的实操能力。',
      en: 'This West World project was a game engine training work that I independently攻坚 over one month, giving my comprehensive creative and technical implementation abilities a major workout. Unlike single modeling or rendering assignments, this project covered the entire chain—art design, modeling, material tuning, engine interaction, animation editing, and post-production promotion—severely testing my coordination and rapid learning skills.\n\nThroughout production, I abandoned rigid thinking patterns and flexibly used AI tools for efficient visual reference, paired with standardized modeling and material workflows to balance efficiency and visual quality. By unifying scene asset styles, self-made models seamlessly integrated with high-precision external assets, solidifying my scene aesthetics and visual control abilities. Facing tight deadlines, I independently突击 learned UE Blueprint interaction technology, implementing multiple practical interactive functions in a short time and efficiently overcoming technical bottlenecks.\n\nI maintained a strong exploratory drive throughout, not limited to basic pipeline execution but actively integrating emerging AI tools to optimize the creative chain and keep pace with evolving methods. This project gave me a clear grasp of the full game scene production workflow and confirmed my efficient self-learning ability, solid artistic aesthetics, and practical problem-solving skills.',
    },
    snapshot: [
      { label: '项目周期', value: '1个月' },
      { label: '项目类型', value: 'UE5交互场景Demo' },
      { label: '我的职责', value: '独立开发 / 全流程' },
      { label: '核心工具', value: 'UE5 / Maya / SP' },
      { label: 'AI参与', value: 'Midjourney前期视觉探索' },
      { label: '项目关键词', value: '场景搭建 / 蓝图交互 / 写实风格' },
    ],
    pipeline: [
      {
        title: '前期调研',
        target: '确立项目整体方向与制作范围',
        work: '分析项目需求，确定西部写实风格方向，规划一个月工期内的制作范围与资产清单',
        problems: '项目周期紧张，需要在有限时间内完成全流程制作',
        solutions: '合理规划自制与外部资产比例，主体建筑手工建模，道具资产筛选高精度外部资源',
      },
      {
        title: '视觉参考探索',
        target: '确定统一的视觉风格与色彩体系',
        work: '利用 Midjourney 生成大量西部酒馆场景参考图，对比不同风格方向',
        problems: '多种风格方向难以取舍，需快速锁定方向',
        solutions: '以"写实西部"为核心方向，统一所有参考图标准，多轮迭代优化提示词',
      },
      {
        title: '资产规划',
        target: '规划模型资产的自制与外部采购方案',
        work: '梳理场景所需全部资产，划分自制范围与外部资源范围',
        problems: '需要在项目体量与制作效率之间找到平衡',
        solutions: '主体酒馆建筑由 Maya 手工建模，桌椅摆件等道具筛选高精度外部资源并统一风格',
      },
      {
        title: '建模制作',
        target: '完成主体建筑与场景模型制作',
        work: 'Maya 中分区模块化手工建模，严格按照标准化分类规范保证资产整洁',
        problems: '模型精度需要兼顾视觉效果与制作效率',
        solutions: '合理把控模型精度，在保证视觉质量的同时高效推进',
      },
      {
        title: '材质制作',
        target: '制作写实质感材质，确保画面统一协调',
        work: '导入 Substance Painter 进行材质烘焙、材质球制作与细节纹理调校',
        problems: '材质与引擎光照的配合需要反复调试',
        solutions: '多轮测试材质参数，确保在 UE 引擎中呈现最佳光影效果',
      },
      {
        title: '场景搭建',
        target: '在 UE 引擎中完成完整场景组装',
        work: '将自制资产与外部资源导入 UE，完成场景布局与氛围统一',
        problems: '自制资产与外部资源的风格统一是最大挑战',
        solutions: '统一材质参数、灯光环境、色彩关系，使整体画面高度融合',
      },
      {
        title: '灯光优化',
        target: '强化场景氛围与画面质感，营造沉浸感',
        work: '调试引擎光照参数，营造黄昏西部氛围',
        problems: '灯光与材质的配合调试复杂',
        solutions: '参考西部电影灯光方案，反复迭代测试实现理想效果',
      },
      {
        title: '交互开发',
        target: '实现可交互的写实游戏场景 Demo',
        work: '短时间快速自学 UE 蓝图交互逻辑，落地多项基础交互功能',
        problems: '需在短期内掌握全新的蓝图交互技术',
        solutions: '从简单案例入手，逐步实现开门触发、物品查看、物理击打等交互',
      },
      {
        title: '宣传片制作',
        target: '制作高质量项目宣传片',
        work: '结合 AI 工具辅助优化画面呈现与镜头效果，后期剪辑与调色',
        problems: '如何让宣传片在有限素材下更具表现力',
        solutions: 'AI 辅助画面增强与镜头优化，配合精细后期调色',
      },
      {
        title: '项目完成',
        target: '项目交付与流程复盘',
        work: '全流程梳理，总结制作经验与技术收获',
      },
    ],
    challenges: [
      {
        question: '如何统一自制资产与外部资产风格？',
        solutions: [
          '统一材质参数——所有资产使用匹配的材质预设',
          '统一灯光环境——同场景光照条件下测试所有资产',
          '统一色彩关系——整体调色确保画面协调一致',
        ],
      },
      {
        question: '如何在短期内掌握全新交互技术？',
        solutions: [
          '从基础案例入手快速入门 UE 蓝图系统',
          '实现三大核心交互功能：点击开门、物品查看、物理击打',
          '边学边做，在实际开发中逐步深入',
        ],
      },
      {
        question: '如何高效确定视觉方向？',
        solutions: [
          '利用 Midjourney 快速探索多种视觉方案',
          '多轮迭代优化提示词，筛选高质量参考图',
          '人工筛选整合，最终设计决策由本人完成',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《西部世界》是我独立完成的大学学期游戏引擎实训项目，历时一个月全程自主开发落地。本项目为西部风格写实场景交互 demo，我独立负责场景搭建、主体建模、材质制作、资产整合、动画编辑、蓝图交互与宣传片输出全流程工作，完整实现了从原画参考、模型搭建到引擎交互落地的完整工作链路。',
      },
      {
        title: '视觉探索与制作流程',
        content: '项目前期，我利用 Midjourney 生成大量西部酒馆场景参考图，确立整体视觉风格。主体酒馆建筑由我在 Maya 中分区模块化手工建模，随后导入 Substance Painter 进行材质烘焙、材质球制作与细节纹理调校，最终接入 UE 引擎完成光影适配、材质调试与细节优化。整套制作过程严格遵循标准化分类规范，保证资产整洁、流程可控。',
      },
      {
        title: '资产整合与场景统一',
        content: '场景内桌椅、摆件等道具资产，我通过筛选高精度外部资源并统一风格调校，使自制主体建筑与外部模型高度融合，整体画面风格统一、质感协调，达到标准化的场景美术审美与制作水准。在模型制作中，我兼顾项目体量与制作效率，合理把控模型精度，在保证整体视觉效果的同时高效推进项目进度。',
      },
      {
        title: '交互开发与功能实现',
        content: '除场景美术外，我自主完成角色资源导入、动作数据适配与场景动画编辑。同时利用短时间快速自学 UE 蓝图交互逻辑，落地点击开门、物品查看、物理击打等多种基础交互功能，完整实现可互动的写实游戏场景 Demo。在工期紧张的情况下，我快速吸收全新技术知识点，展现出较强的临场学习能力与落地执行力。',
      },
      {
        title: '宣传与总结',
        content: '项目最终宣传片制作中，我结合 AI 工具辅助优化画面呈现与镜头效果，让成片观感更具表现力，保持了技术与审美同步迭代的创作状态。\n\n整段开发过程，我始终保持主动探索的创作状态，熟练融合 AI 辅助创作、传统建模材质流程与引擎交互开发，实现了审美、技术、流程优化的全方位提升。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/full-film.mov', type: 'video', title: '项目宣传片', description: '全流程展示西部酒馆场景交互 Demo 最终效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/clip-0.mp4', type: 'video', title: '场景漫游', description: 'UE 引擎实时渲染的西部酒馆完整场景展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/clip-1.mp4', type: 'video', title: '交互功能演示', description: '展示开门触发、物品查看、物理击打等交互功能' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-0.jpg', type: 'image', title: '酒馆主体建筑', description: 'Maya 分区模块化手工建模，用于提高资产复用效率' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-1.png', type: 'image', title: '材质效果展示', description: 'Substance Painter 材质烘焙与纹理调校结果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-2.png', type: 'image', title: '场景全局光照', description: 'UE 引擎中调试完成的光影效果与氛围呈现' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-3.png', type: 'image', title: '灯光测试', description: '调整主光方向，强化黄昏氛围' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-4.png', type: 'image', title: '材质细节', description: '木质纹理与金属质感的精细调校' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-5.jpg', type: 'image', title: '场景局部', description: '酒馆内部道具布置与氛围营造' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-6.jpg', type: 'image', title: '蓝图交互逻辑', description: 'UE 蓝图节点编辑实现的门禁交互系统' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-7.jpg', type: 'image', title: '角色与动画', description: '角色资源导入与动作数据适配' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-8.jpg', type: 'image', title: '画面调色', description: '宣传片后期调色，统一整体视觉风格' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-9.jpg', type: 'image', title: '项目截图', description: '最终交付场景的整体效果展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-1/content-10.jpg', type: 'image', title: '成品展示', description: '项目宣传片关键帧展示' },
    ],
    aiWorkflow: [
      {
        stage: '视觉参考生成',
        ai: 'AI 根据文字描述生成大量西部酒馆场景参考图，快速探索多种视觉方向',
        human: '人工筛选符合项目风格的方向，确立视觉基调，最终设计决策由本人完成',
      },
      {
        stage: '宣传片优化',
        ai: 'AI 辅助优化画面呈现效果，增强镜头表现力',
        human: '剪辑、调色、成片整合，把控最终画面审美与节奏',
      },
    ],
  },
  {
    id: 'ue-scene-2',
    title: { zh: '河滨小镇', en: 'Riverside Town' },
    description: {
      zh: '《河滨小镇》是我在《西部世界》之前完成的 UE 初学实训作业，主要用于熟悉虚幻引擎的基础场景制作流程。项目全程独立完成，依托优质公开资产搭建完整小镇场景，通过大量筛选、比对市面流通模型资源，让我对当下行业主流资产精度、风格类型与制作标准建立了更全面的认知。\n\n制作中，我独立完成整体场景布局、地形整合、资产摆放与氛围统一，并自主制作河水材质球，深度练习材质参数调节、质感表现与引擎光影适配能力。全程依托个人审美进行场景构图、色调把控与氛围营造，在短时间内快速搭建成片完整、视觉舒适的写实小镇场景。\n\n场景制作完成后，我独立完成引擎渲染输出，并在 PR 中完成剪辑、调色与成片整合，完整走完了 UE 场景搭建—材质制作—渲染输出—后期成片的标准制作流程。本次实训充分体现了我的快速上手能力、场景审美能力与高效落地的学习特点，为后续大型场景项目制作打下扎实基础。',
      en: 'Riverside Town is my introductory UE training project completed before West World, primarily used to familiarize myself with the basic scene production workflow of Unreal Engine. The project was independently completed, using high-quality public assets to build a complete小镇 scene. Through extensive筛选 and comparison of commercially available model resources, I developed a broader understanding of current industry-standard asset precision, style types, and production standards.\n\nDuring production, I independently handled overall scene layout, terrain integration, asset placement, and atmosphere unification. I also created custom river water materials, deeply practicing material parameter adjustment, texture expression, and engine lighting adaptation. Relying entirely on personal aesthetics for scene composition, color control, and atmosphere creation, I quickly built a visually comfortable realistic小镇 scene within a short time.\n\nAfter scene production, I independently handled engine rendering output and completed editing, color grading, and final整合 in Premiere Pro—fully completing the standard workflow of UE scene building → material creation → rendering output → post-production. This training project demonstrated my rapid onboarding ability, scene aesthetics, and efficient execution, laying a solid foundation for subsequent large-scale scene projects.',
    },
    category: 'game',
    tags: ['UE5', '场景搭建', '写实', '材质制作', '全流程'],
    year: 2025,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/thumbnail.jpg',
    role: { zh: '独立开发 / 全流程', en: 'Solo Developer / Full Pipeline' },
    tools: ['Unreal Engine 5', 'Premiere Pro'],
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-0.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-1.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-2.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-3.mp4',
    ],
    snapshot: [
      { label: '项目类型', value: 'UE5写实场景实训项目' },
      { label: '项目定位', value: '虚幻引擎入门与场景制作训练' },
      { label: '我的职责', value: '独立完成场景搭建与后期输出' },
      { label: '核心工具', value: 'Unreal Engine 5 / Premiere Pro' },
      { label: '项目重点', value: '资产整合 / 材质制作 / 氛围塑造' },
      { label: '核心能力', value: '快速学习 / 场景审美 / 流程落地' },
    ],
    pipeline: [
      {
        title: '项目规划',
        target: '确定河滨小镇主题方向，规划整体场景结构与视觉风格',
        work: '确定河滨小镇主题方向，规划整体场景结构与视觉风格',
      },
      {
        title: '资产筛选',
        target: '筛选并整理高质量公开资产，研究行业标准',
        work: '筛选并整理高质量公开资产，研究行业主流模型精度、风格标准与资源组织方式',
      },
      {
        title: '场景搭建',
        target: '建立整体空间关系',
        work: '完成道路、建筑、植被与环境资产布局，建立整体空间关系',
      },
      {
        title: '材质制作',
        target: '提升真实感表现',
        work: '独立制作河流水体材质，调试材质参数，提升真实感表现',
      },
      {
        title: '氛围优化',
        target: '调整色彩关系，统一整体氛围',
        work: '调整整体色彩关系、优化场景光影与视觉层次，统一整体氛围',
      },
      {
        title: '镜头设计',
        target: '突出空间关系与环境细节',
        work: '规划场景展示镜头，突出空间关系与环境细节',
      },
      {
        title: '渲染输出',
        target: '完成UE场景渲染输出',
        work: '完成UE场景渲染输出',
      },
      {
        title: '后期剪辑',
        target: '完成剪辑、调色与成片整合',
        work: '在Premiere中完成剪辑、调色与成片整合',
      },
    ],
    challenges: [
      {
        question: '如何快速熟悉UE场景制作工作流？',
        solutions: [
          '通过完整搭建小镇场景实践资产导入、场景组织、材质调校与渲染输出',
          '建立完整工作流认知',
          '为后续项目积累实战经验',
        ],
      },
      {
        question: '如何统一不同来源资产的视觉风格？',
        solutions: [
          '筛选风格一致的模型资源',
          '通过光影、色调与环境设计统一整体表现',
          '用个人审美把控视觉一致性',
        ],
      },
      {
        question: '如何提升场景真实感？',
        solutions: [
          '自主制作河流水体材质',
          '持续调试材质参数与反射效果',
          '增强环境表现力与沉浸感',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《河滨小镇》是我在《西部世界》之前完成的UE初学实训项目，主要用于熟悉虚幻引擎的基础场景制作流程。项目全程独立完成，通过搭建完整小镇场景，系统学习了UE环境制作与资源整合的基本方法。',
      },
      {
        title: '资产整合与场景制作',
        content: '项目过程中，我大量筛选与整理公开模型资源，对市面主流资产的精度标准、风格类型与制作规范进行了深入了解。通过合理组织与搭配不同资源，逐步完成河滨小镇整体场景搭建。',
      },
      {
        title: '材质与氛围塑造',
        content: '制作中独立完成河流水体材质制作，并持续调整材质参数与场景光影关系。结合个人审美进行构图设计、色调控制与氛围统一，构建出完整且舒适的写实场景体验。',
      },
      {
        title: '渲染输出与项目收获',
        content: '项目完成后，我独立完成引擎渲染输出，并在Premiere中完成剪辑、调色与最终成片整合。完整经历了UE场景搭建、材质制作、渲染输出与后期包装流程，为后续更复杂项目制作积累了重要经验。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/full-film.mov', type: 'video', title: '河滨小镇｜完整展示影片', description: 'UE5写实场景搭建项目完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-0.mp4', type: 'video', title: '场景整体漫游', description: '展示河滨小镇整体空间布局与视觉风格' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-1.mp4', type: 'video', title: '建筑区域展示', description: '展示建筑风格与材质表现效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-2.mp4', type: 'video', title: '环境细节展示', description: '展示自然环境与水体材质效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-2/clip-3.mp4', type: 'video', title: '镜头运动展示', description: '展示场景漫游镜头设计与空间关系' },
    ],
    reflection: {
      zh: '《河滨小镇》是我入门虚幻引擎的重要实训项目。通过筛选整合市面各类模型资产，我逐步熟悉了行业主流模型资源的精度标准与制作规范，并建立了对场景搭建流程的整体认知。\n\n制作过程中，我尝试跳出简单的资源堆叠，自主完成河流水体材质调试、光影优化与整体氛围塑造，通过审美判断统一场景视觉风格，在有限时间内高效完成项目落地。\n\n本项目充分锻炼了我的快速学习能力、场景审美能力与流程执行能力，也让我扎实掌握了UE场景搭建、材质调校与后期输出的完整工作流，为后续大型项目制作积累了重要经验。',
      en: 'Riverside Town was an important training project for my entry into Unreal Engine. Through筛选 and integrating various commercial model assets, I gradually familiarized myself with industry-standard model precision and production norms, and established an overall understanding of the scene building workflow.\n\nDuring production, I went beyond simple asset stacking—independently debugging river water materials, optimizing lighting and atmosphere, and unifying the visual style through aesthetic judgment—efficiently completing the project within a limited time.\n\nThis project thoroughly exercised my rapid learning ability, scene aesthetics, and process execution skills, and solidly established my mastery of the complete UE scene building, material tuning, and post-production workflow, accumulating important experience for subsequent large-scale projects.',
    },
  },
  {
    id: 'ue-scene-3',
    title: { zh: 'AI古镇', en: 'AI Ancient Town' },
    description: {
      zh: '《AI古镇》是一款轻量化 AIGC 场景创作小项目，主打 AI 快速建模与 UE 引擎极速落地的创作流程。我先通过文字梳理创作思路，迭代优化提示词、生成场景参考图，再依托图文结合的方式，利用 AI 工具快速生成古镇 3D 模型资产。\n\n将生成的优质模型导入 UE 引擎，快速完成场景搭建、氛围调试与动画渲染，短时间内完成成片输出，全程高效轻量化，熟练掌握了 AI 辅助三维场景的快速落地方法。',
      en: 'AI Ancient Town is a lightweight AIGC scene creation project focused on rapid AI modeling and fast UE engine deployment. I started by organizing creative ideas through text, iteratively optimized prompts, and generated reference images. Then, combining text and images, I used AI tools to quickly generate 3D model assets of an ancient town.\n\nOnce the high-quality models were generated, I imported them into UE for quick scene building, atmosphere tuning, and animation rendering—completing the final output in a short time. The entire process was efficient and lightweight, allowing me to master the rapid implementation of AI-assisted 3D scene creation.',
    },
    category: 'game',
    tags: ['UE5', 'AI建模', '场景搭建', 'AIGC', '全流程'],
    year: 2025,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/thumbnail.png',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/full-film.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-1.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-2.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-3.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-4.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-0.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-1.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-2.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-3.jpg',
    ],
    tools: ['Unreal Engine 5', 'AI 3D Generation Tool'],
    role: { zh: '独立开发 / 全流程', en: 'Solo Developer / Full Pipeline' },
    snapshot: [
      { label: '项目类型', value: 'AIGC场景创作实验项目' },
      { label: '项目定位', value: 'AI辅助三维场景快速生成' },
      { label: '我的职责', value: '创意规划 / 提示词设计 / 场景搭建 / 渲染输出' },
      { label: '核心工具', value: 'UE5 / AI 3D Generation Tool' },
      { label: '项目重点', value: 'AI建模 / 工作流验证 / 快速落地' },
      { label: '核心能力', value: 'AIGC应用 / 流程设计 / 工具适应能力' },
    ],
    pipeline: [
      {
        title: '创意构思',
        target: '明确古镇场景主题，梳理整体视觉方向与核心风格',
        work: '确定古镇场景主题方向，规划轻量化 AIGC 创作流程',
        problems: '需在有限时间内完成从概念到成片的完整输出',
        solutions: '采用「文字构思—图文迭代—AI生成模型—UE搭建」的轻量化链路',
      },
      {
        title: '提示词迭代',
        target: '持续优化文本描述，探索最符合预期的视觉方案',
        work: '多轮迭代提示词，生成多组参考图，对比不同视觉方向',
        problems: 'AI 生成结果具有随机性，需要反复调试才能获得符合预期的效果',
        solutions: '系统化记录提示词版本，逐步逼近目标风格',
      },
      {
        title: 'AI模型生成',
        target: '利用AI工具快速生成古镇建筑模型',
        work: '结合参考图与文字描述，利用 AI 3D 工具生成古镇建筑模型资产',
        problems: 'AI 生成模型的精度与结构需人工筛选和调整',
        solutions: '筛选结构合理的模型，剔除不符合场景需求的资产',
      },
      {
        title: '场景搭建',
        target: '将生成资产导入UE，完成场景组织与空间布局',
        work: '将 AI 生成模型导入 UE 引擎，完成场景布局与空间组织',
        problems: '需确保 AI 生成资产在 UE 中的适配性与视觉一致性',
        solutions: '调整资产比例、位置与材质参数，统一整体风格',
      },
      {
        title: '氛围调试',
        target: '调整光影、镜头与环境效果，强化整体表现力',
        work: '调试场景光照、镜头运动和环境特效，营造沉浸氛围',
        problems: 'AI 生成资产的材质与 UE 光照系统需要配合调试',
        solutions: '多轮迭代测试光照参数，找到最佳视觉方案',
      },
      {
        title: '渲染输出',
        target: '完成动画渲染与最终成片制作',
        work: '完成场景动画渲染，输出最终成片',
      },
    ],
    challenges: [
      {
        question: '如何让AI生成符合预期的古镇风格？',
        solutions: [
          '通过多轮提示词优化，持续调整建筑风格、材质特征与场景元素',
          '对比不同提示词版本的生成结果，筛选最优方案',
          '提升生成结果的可控性，逐步逼近预期风格',
        ],
      },
      {
        question: '如何保证AI生成资产能够实际落地？',
        solutions: [
          '筛选结构合理的模型资源，确保可导入 UE 引擎',
          '在 UE 中重新组织与布局，调整资产适配性',
          '确保场景具备完整空间逻辑与视觉统一性',
        ],
      },
      {
        question: '如何验证AI工作流效率？',
        solutions: [
          '将传统建模流程与 AI 生成流程进行对比',
          '缩短资产制作周期，实现快速原型验证',
          '建立可重复、可迭代的 AI 辅助创作流程',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《AI古镇》是一项轻量化 AIGC 场景创作实验项目，主要探索 AI 快速建模与 UE 场景搭建结合的可能性。项目从创意构思开始，通过文字规划、提示词设计与视觉方向探索，建立完整的 AI 辅助创作流程。',
      },
      {
        title: 'AI建模工作流实践',
        content: '在明确场景方向后，通过持续迭代提示词与参考图生成结果，不断优化建筑风格与视觉表现。随后利用 AI 工具快速生成古镇模型资产，大幅缩短传统建模流程所需时间。',
      },
      {
        title: '场景落地与成果输出',
        content: '将生成资产导入 UE 引擎后，快速完成场景搭建、氛围调试与镜头设计，并最终输出动画成片。本项目验证了 AI 辅助三维场景制作的可行性，也积累了实际应用 AIGC 工具的经验。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/full-film.mp4', type: 'video', title: 'AI古镇｜完整展示影片', description: 'AI 辅助生成古镇场景的全流程展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-1.mp4', type: 'video', title: '场景整体展示', description: 'UE 引擎中搭建完成的 AI 古镇全局场景展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-2.mp4', type: 'video', title: '建筑区域展示', description: 'AI 生成建筑模型在场景中的具体呈现效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-3.mp4', type: 'video', title: '镜头漫游展示', description: '场景镜头漫游，展示古镇空间布局与氛围' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/clip-4.mp4', type: 'video', title: '氛围表现展示', description: '光影与氛围调试后的最终场景效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-0.jpg', type: 'image', title: '概念探索', description: '通过提示词设计与参考图生成，探索古镇场景整体视觉方向' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-1.jpg', type: 'image', title: 'AI模型生成', description: '利用 AI 工具生成建筑模型，验证快速资产生产流程' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-2.jpg', type: 'image', title: '资产导入测试', description: '将生成模型导入 UE，检查结构与场景适配效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ue-scene-3/content-3.jpg', type: 'image', title: '最终场景搭建', description: '完成场景组织、氛围调试与镜头设计' },
    ],
    aiWorkflow: [
      {
        stage: '视觉探索与方案验证',
        ai: '生成参考图，探索视觉方向，辅助风格验证',
        human: '筛选方案，确定设计方向，制定制作策略',
      },
      {
        stage: '三维资产生成',
        ai: '生成古镇建筑模型',
        human: '模型筛选，场景搭建，光影调试，镜头设计，最终输出',
      },
    ],
    reflection: {
      zh: '《AI古镇》是我针对AI快速建模工作流进行的一次实践探索。项目尝试摆脱传统建模流程中的高时间成本，通过「文字构思—图文迭代—AI生成模型—UE场景搭建」的轻量化链路，在较短时间内完成完整场景创作。\n\n实践过程中，我不仅学习了提示词优化与AI资产生成方法，也进一步理解了AI在创意验证、资产生产与场景搭建中的实际价值。相比单纯使用工具，本项目更重要的收获在于建立了一套可重复、可迭代的AI辅助创作流程。\n\n本次项目有效提升了我对AIGC工具的应用能力、快速落地能力以及适应新型创作方式的能力，也为未来探索AI与游戏场景制作结合提供了实践基础。',
      en: 'AI Ancient Town was a practical exploration of AI-driven rapid modeling workflows. The project attempted to break away from the high time cost of traditional modeling by adopting a lightweight pipeline of "text ideation → text-image iteration → AI model generation → UE scene building," completing a full scene creation in a relatively short time.\n\nThrough this practice, I not only learned prompt optimization and AI asset generation methods, but also further understood AI\'s practical value in creative validation, asset production, and scene building. More importantly, the key takeaway was establishing a repeatable, iterable AI-assisted creative workflow.\n\nThis project effectively enhanced my ability to apply AIGC tools, rapidly implement solutions, and adapt to new creative methods, laying a practical foundation for future exploration of AI combined with game scene production.',
    },
  },
  // ── ② AI 视觉与数字艺术 ──
  {
    id: 'aigc-video-1',
    title: { zh: '阳光明媚', en: 'Sunshine' },
    description: {
      zh: '本片是我的第二部 AIGC 实验短片，前作《用时从生土》为首次 AI 影像尝试，全流程独立完成。\n\n创作全程遵循标准化逻辑流程：从初始灵感出发，借助 AI 迭代完善画面叙事，先用简易描述生成分镜文本，再逐帧手动精修镜头关键词，敲定图生图、图生视频两套完整提示词。通过多款视频模型测试产出素材，最后自主剪辑调色、后期整合输出成片。\n\n作品灵感源自一首治愈感夏日曲目，单日完成全部制作：上午萌生创作想法，下午完成 AIGC 素材生成，晚间剪辑成片。虽篇幅简短，却是我第一次写实风格 AI 短片创作尝试。完整可控的创作流程也让作品收获了不错的专业平台传播流量。',
      en: 'My second AIGC experimental short film, produced entirely independently from concept to final output.\n\nThe creative process followed a standardized logical workflow: starting from initial inspiration, iterating visual narratives with AI assistance, generating storyboard text from simple descriptions, then manually refining keyframe prompts frame by frame—finalizing two complete prompt sets for image-to-image and image-to-video generation. After testing multiple video models to produce素材, I took over for editing, color grading, and final post-production.\n\nInspired by a治愈 summer track, the entire production was completed in a single day: the idea struck in the morning, AIGC素材 were generated in the afternoon, and the final cut was finished by evening. Though brief, it was my first attempt at a photorealistic AI short film. The well-controlled pipeline also earned decent traction on professional platforms.',
    },
    category: 'ai-visual',
    tags: ['AIGC', '写实', '短片', '全流程'],
    year: 2024,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/thumbnail.jpg',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-0.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-1.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-2.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-3.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-4.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-6.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-7.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-8.jpg',
    ],
    tools: ['ChatGPT', 'Lovart', 'Premiere Pro'],
    snapshot: [
      { label: '项目类型', value: 'AIGC写实短片实验' },
      { label: '项目定位', value: 'AI影像创作流程实践' },
      { label: '制作周期', value: '单日完成全流程创作' },
      { label: '核心工具', value: 'ChatGPT / Lovart / PR' },
      { label: '项目重点', value: '视觉叙事 / 提示词设计 / 影像表达' },
      { label: '核心能力', value: '创意转化 / AI协作 / 快速落地' },
    ],
    pipeline: [
      {
        title: '灵感构思',
        target: '从一首治愈感夏日音乐获得创作灵感，明确作品情绪与表达方向',
        work: '聆听音乐确定情绪基调，构思画面方向',
        problems: '抽象情绪需要转化为可执行的画面方案',
        solutions: '通过关键词拆解与画面联想，逐步建立视觉框架',
      },
      {
        title: '故事拆解',
        target: '将抽象情绪转化为可执行画面，建立分镜结构与镜头逻辑',
        work: '将整体情绪拆解为逐镜头画面，建立分镜方案',
        problems: '需保证分镜逻辑连贯且符合情绪表达',
        solutions: '以音乐节奏为参考，设计镜头序列与叙事节奏',
      },
      {
        title: '提示词设计',
        target: '逐镜头编写与优化提示词，形成完整图生图与图生视频方案',
        work: '为每个镜头独立编写和优化提示词，敲定两套完整提示词方案',
        problems: '需保证不同镜头间视觉风格的一致性',
        solutions: '统一关键词体系，控制主体、环境、光线与情绪表达',
      },
      {
        title: '素材生成',
        target: '测试多种视频模型，筛选最符合预期的素材结果',
        work: '通过多款视频模型测试产出素材，对比生成效果',
        problems: '不同模型生成风格不一致，筛选工作量大',
        solutions: '建立素材评估标准，系统化比较和筛选',
      },
      {
        title: '后期整合',
        target: '完成镜头编排、节奏控制与整体叙事组织',
        work: '完成镜头剪辑、叙事编排与节奏控制',
        problems: 'AI 生成素材的连贯性与一致性需要后期调整',
        solutions: '通过剪辑节奏与镜头排序弥补素材差异',
      },
      {
        title: '调色输出',
        target: '在Premiere中完成调色与最终成片输出',
        work: '后期调色统一整体视觉风格，输出最终成片',
      },
    ],
    challenges: [
      {
        question: '如何将抽象情绪转化为具体画面？',
        solutions: [
          '通过分镜设计与关键词拆解，逐步将音乐感受转化为可执行视觉语言',
          '以音乐节奏为框架，建立镜头序列',
          '确保画面情绪与音乐氛围相匹配',
        ],
      },
      {
        question: '如何提高AI生成结果的一致性？',
        solutions: [
          '逐镜头独立优化提示词，控制主体、环境、光线与情绪表达',
          '统一关键词体系，保持视觉风格连贯',
          '多轮迭代测试，筛选最优方案',
        ],
      },
      {
        question: '如何保证作品具备个人表达？',
        solutions: [
          '将 AI 作为执行工具，由创作者主导镜头选择',
          '由本人控制节奏控制与整体审美判断',
          '确保技术服务于表达而非替代表达',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《阳光明媚》是我创作的第二部 AIGC 实验短片，也是第一次尝试写实风格 AI 影像表达。项目灵感来源于一首充满治愈感与夏日氛围的音乐，希望通过连续画面传递温暖、轻松与积极的情绪体验。',
      },
      {
        title: 'AI影像创作流程',
        content: '项目全程遵循标准化创作流程，从灵感构思开始，逐步完成分镜规划、提示词设计、素材生成与画面筛选。通过多轮迭代优化关键词，并结合多种视频模型测试结果，逐渐建立完整的 AI 影像创作链路。',
      },
      {
        title: '成果与收获',
        content: '从上午产生创意到晚间完成成片输出，项目在单日内完成全部制作流程。虽然作品篇幅较短，但验证了完整的 AIGC 影像工作流，也帮助我积累了写实风格 AI 短片创作经验，并获得不错的平台传播反馈。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/full-film.mov', type: 'video', title: '阳光明媚｜完整短片', description: 'AIGC 写实风格短片完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-0.jpg', type: 'image', title: '灵感来源', description: '以夏日音乐情绪为基础，确定作品整体表达方向' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-1.jpg', type: 'image', title: '镜头概念探索', description: '测试不同视觉方案，寻找最符合主题的画面表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-2.jpg', type: 'image', title: '角色氛围设计', description: '建立人物与环境关系，强化情绪传递效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-3.jpg', type: 'image', title: '场景风格测试', description: '调整光线、天气与色彩关系，统一整体氛围' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-4.jpg', type: 'image', title: '视觉方向迭代', description: '通过提示词优化，持续提高画面一致性' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-5.jpg', type: 'image', title: '镜头语言构建', description: '完善画面节奏与镜头衔接逻辑' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-6.jpg', type: 'image', title: '素材筛选', description: '对多轮生成结果进行比较与筛选' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-7.jpg', type: 'image', title: '风格统一', description: '强化写实质感与视觉表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-1/content-8.jpg', type: 'image', title: '最终画面定稿', description: '形成完整短片视觉方案' },
    ],
    aiWorkflow: [
      {
        stage: '创意扩展与视觉探索',
        ai: '生成参考画面，辅助视觉发散，快速验证方向',
        human: '确定主题，筛选方案，制定叙事结构',
      },
      {
        stage: '镜头素材生成',
        ai: '根据提示词生成画面与视频素材',
        human: '逐镜头优化提示词，控制视觉一致性，筛选最终素材',
      },
      {
        stage: '内容整合与表达',
        ai: '提供生成素材',
        human: '剪辑节奏，镜头排序，调色输出，最终表达',
      },
    ],
    reflection: {
      zh: '《阳光明媚》的创作过程让我进一步验证了 AIGC 影像创作的可行性。由于前期已经具备较明确的创作方向，整个制作流程推进十分顺畅，也让我能够更加专注于画面氛围与情绪表达本身。\n\n本项目最大的收获来自与 AI 协作方式的探索。实践过程中，我逐渐意识到提示词只是表层工具，更重要的是建立清晰的逻辑框架、稳定的执行流程以及明确的创作目标。只有这样，AI 才能真正成为高效的创作伙伴。\n\n同时我也更加坚定了一点：AI 能够提升效率，但最终决定作品质量的仍然是创作者本身。审美判断、镜头选择、节奏控制以及情感表达，始终需要由人来完成。这也是我未来持续探索 AIGC 创作的重要方向。',
      en: 'The creative process of Sunshine further validated the feasibility of AIGC filmmaking. With a clear creative direction established early on, the entire production process went smoothly, allowing me to focus more on the visual atmosphere and emotional expression itself.\n\nThe greatest takeaway from this project came from exploring the mode of collaboration with AI. Through practice, I gradually realized that prompts are just surface-level tools—what truly matters is establishing a clear logical framework, a stable execution process, and明确的 creative goals. Only then can AI truly become an efficient creative partner.\n\nAt the same time, I became more certain of one thing: AI can enhance efficiency, but the final quality of the work is still determined by the creator. Aesthetic judgment, shot selection, rhythm control, and emotional expression will always need to be done by humans. This is also an important direction for my continued exploration of AIGC creation in the future.',
    },
  },
  {
    id: 'aigc-video-2',
    title: { zh: '记忆之梦', en: 'Dream of Memory' },
    description: {
      zh: '《记忆之梦》是课程结课原创动画短片，全程从零落地制作。影片结合 UE 虚幻引擎、动作捕捉技术、AI 辅助创作与后期剪辑完成成片。作为项目组长与导演，我主导了整体制作流程，统筹剧本创作、动作设计指导、场景搭建、MetaHuman 数字人建模、动画渲染及最终后期剪辑全流程工作。\n\n项目初期，我与团队共同研讨故事框架，分工完成脚本创作并统一审核定稿。筹备动捕拍摄期间，我自主研习 MetaHuman 高保真数字人技术，独立解决了本片核心人物建模难题，高效完成可直接用于实时渲染的绑定角色资产，保障了项目进度与画面质感。受设备条件限制，本次动作捕捉录制周期被大幅压缩，导致后期动画修正、场景调试、引擎渲染与剪辑的制作时间极度紧张。我在有限工期内优化工作流，结合 AI 辅助补齐画面过渡、修正脚本与实拍素材的偏差，在保证成片完整度的前提下最大化呈现最终效果。\n\n影片采用倒叙叙事，以科幻外壳包裹深度的人文哲学思考。故事围绕科技与家庭矛盾展开：男主长期抵触 AI 与高速发展的科技，认为从事 AI 科研的母亲因工作忽视亲情，二人矛盾不断激化。一次争吵后，男主意外遭遇 AI 系统误判引发的车祸濒临死亡，母亲最终以极端科技方式，将男主的完整记忆迁移至机械躯体中，以"另类方式"复活儿子。\n\n叙事以病床上的机械主角回溯记忆展开，在完整读取过往经历后，抛出核心思辨命题，呼应哲学三问：我是谁、我从何而来、将去往何方。影片核心探讨：当机械躯体承载了人类全部记忆、同时拥有独立 AI 思考能力，它究竟是原本的人类本人，只是载体发生改变，还是仅仅复刻了记忆的全新 AI 个体？\n\n影片全程预埋宿命闭环伏笔，强化故事的批判性与无力感：男主厌恶科技、死于 AI 失误，最终却依靠 AI 技术重获"新生"。这种首尾呼应的矛盾设定，让科技与人性、亲情与技术、存在与自我的冲突更加立体，也让短片的主题表达更具层次感与思考空间。本次全流程落地，让我对动补工作流、虚幻引擎实时渲染、数字人制作及 AI 辅助影视创作，形成了完整且扎实的实操认知。',
      en: 'Dream of Memory is an original animated short film created from scratch as a course final project. Combining UE5, motion capture, AI-assisted creation, and post-production editing. As project lead and director, I oversaw the entire pipeline—script development, motion direction, scene building, MetaHuman digital human modeling, animation rendering, and final editing.\n\nEarly in the project, the team and I developed the story framework, divided scriptwriting tasks, and consolidated the final draft. During motion capture prep, I independently studied MetaHuman technology, solved the core character modeling challenge, and efficiently produced rigged assets ready for real-time rendering—ensuring both schedule and visual quality. Due to equipment constraints, the mocap recording window was severely compressed, leaving tight timelines for animation correction, scene tuning, engine rendering, and editing. I optimized workflows within the limited schedule, using AI assistance to fill visual transitions and correct deviations between script and footage, maximizing the final result while maintaining completeness.\n\nThe film uses a reverse-chronological narrative, wrapping deep philosophical questions in a sci-fi shell. It centers on the conflict between technology and family: the protagonist resents AI and technological progress, believing his AI-researcher mother prioritizes work over family. After a heated argument, he is critically injured in a car accident caused by an AI system error. His mother ultimately transfers his complete memories into a mechanical body, "reviving" her son in an unconventional way.\n\nThe story unfolds as the mechanical protagonist revisits memories from a hospital bed. After fully reading his past experiences, it poses the core philosophical question—echoing the three fundamental inquiries: Who am I? Where do I come from? Where am I going? When a mechanical body carries all of a human\'s memories and possesses independent AI thinking capability—is it still the original human, merely with a changed vessel? Or is it a new AI entity that has simply replicated those memories?\n\nThe film embeds a fatalistic closed-loop foreshadowing throughout, reinforcing its critical tone and sense of helplessness: the protagonist despises technology, dies due to an AI error, and is ultimately "reborn" through AI. This circular contradiction makes the conflicts between technology and humanity, family and technology, existence and self more dimensional, adding layers of depth to the film\'s themes. This end-to-end production gave me solid, hands-on knowledge of motion capture workflows, UE real-time rendering, digital human production, and AI-assisted filmmaking.',
    },
    category: 'ai-visual',
    tags: ['UE', '动作捕捉', '数字人', '短片', '全流程', 'AI辅助'],
    year: 2024,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/thumbnail.png',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-0.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-1.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-2.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-3.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-4.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-5.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-6.mp4',
    ],
    tools: ['Xsens MVN Animate', 'UE5.7', 'ChatGPT', 'Premiere Pro'],
    role: { zh: '项目组长 / 导演', en: 'Project Lead / Director' },
    snapshot: [
      { label: '项目类型', value: '原创科幻动画短片' },
      { label: '项目身份', value: '项目组长 / 导演' },
      { label: '项目规模', value: '团队协作全流程项目' },
      { label: '核心技术', value: 'UE5.7 / MetaHuman / 动作捕捉' },
      { label: '项目重点', value: '数字人制作 / 实时渲染 / 流程优化' },
      { label: '核心能力', value: '团队统筹 / 技术攻坚 / 问题解决' },
    ],
    pipeline: [
      {
        title: '故事构思',
        target: '围绕科技、人性与身份认同主题，构建影片世界观与核心命题',
        work: '组织团队讨论剧情结构，确定影片核心冲突与主题方向',
      },
      {
        title: '剧本创作',
        target: '完成完整剧本创作，统一审核定稿',
        work: '组织团队讨论剧情结构，完成剧本创作与统一审核定稿',
      },
      {
        title: '项目规划',
        target: '制定制作流程、分配团队任务、建立项目推进计划',
        work: '制定制作流程、分配团队任务、建立项目推进计划',
      },
      {
        title: 'MetaHuman角色制作',
        target: '完成核心角色数字人制作，构建可直接用于实时渲染的角色资产',
        work: '自主学习MetaHuman技术，完成核心角色数字人制作，构建可直接用于实时渲染的角色资产',
      },
      {
        title: '动作设计与动捕录制',
        target: '完成动作方案设计与动作捕捉拍摄',
        work: '完成动作方案设计，组织动作捕捉拍摄，获取角色动画数据',
      },
      {
        title: 'UE动作重定向',
        target: '直接完成动作适配，跳过传统Maya中转流程',
        work: '自主研究动作重定向技术，跳过传统Maya中转流程，直接完成动作适配',
      },
      {
        title: '场景搭建与动画制作',
        target: '完成场景制作、镜头设计与动画整合',
        work: '完成场景制作、镜头设计、动画整合与调试',
      },
      {
        title: '实时渲染输出',
        target: '利用UE完成镜头渲染，优化整体画面表现',
        work: '利用UE完成镜头渲染，优化整体画面表现',
      },
      {
        title: '后期制作',
        target: '完成剪辑、节奏控制与内容整合',
        work: '完成剪辑、节奏控制、画面优化与内容整合',
      },
      {
        title: '最终输出',
        target: '完成成片包装与最终交付',
        work: '完成成片包装与最终交付',
      },
    ],
    challenges: [
      {
        question: '如何在有限工期内完成角色制作？',
        solutions: [
          '放弃传统角色绑定流程，采用MetaHuman数字人技术',
          '快速获得高质量角色资产，省去手动调权重环节',
          '保障项目进度与画面质感同步推进',
        ],
      },
      {
        question: '如何压缩动捕制作周期？',
        solutions: [
          '自主研究UE动作重定向工作流，取消Maya中转环节',
          '在引擎内直接完成动作适配与迁移',
          '大幅压缩制作工期',
        ],
      },
      {
        question: '如何保证团队协作效率？',
        solutions: [
          '明确成员分工，同步项目进度',
          '统一审核标准与制作节奏',
          '定期对齐制作进度与问题反馈',
        ],
      },
      {
        question: '如何在素材不足情况下完成成片？',
        solutions: [
          '利用AI辅助优化过渡画面，修补素材缺口',
          '提升整体完成度与叙事连贯性',
          '在有限条件下最大化最终效果',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《记忆之梦》是课程结课原创动画短片项目，结合UE虚幻引擎、动作捕捉技术、MetaHuman数字人技术与AI辅助创作完成。作为项目组长与导演，我主导了整体制作流程，并参与剧本创作、角色制作、场景搭建、动画渲染与后期剪辑等核心环节。',
      },
      {
        title: '制作流程与技术方案',
        content: '项目初期与团队共同完成剧本设计与故事结构规划。在筹备阶段，自主学习MetaHuman数字人技术，独立完成核心角色制作。动作捕捉完成后，研究并实践UE动作重定向方案，大幅优化传统动画制作流程，提升项目整体效率。',
      },
      {
        title: '剧情与主题表达',
        content: '影片采用倒叙叙事结构，以科技与家庭关系作为故事核心。主角因长期抵触AI技术，与从事人工智能研究的母亲产生矛盾。一次意外后，母亲利用先进科技将其记忆迁移至机械躯体中，使其以另一种形式获得新生。影片围绕身份认同、自我意识与科技伦理展开思考，探讨记忆、人格与存在本质之间的关系。',
      },
      {
        title: '流程优化与团队统筹',
        content: '面对设备限制与极度紧张的制作周期，我主动优化项目工作流。通过MetaHuman与UE动作重定向技术替代传统制作方式，大幅缩短角色与动画制作时间。同时负责团队任务协调、进度管理与质量把控，保障项目按计划推进。',
      },
      {
        title: '项目成果与收获',
        content: '项目最终顺利完成从剧本创作到动画成片输出的全流程制作。通过本次实践，我系统掌握了数字人制作、动作捕捉、实时渲染与AI辅助影视创作等技术，也进一步提升了项目管理、流程优化与团队协作能力。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/full-film.mov', type: 'video', title: '记忆之梦｜完整动画短片', description: '原创科幻动画短片完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-0.mp4', type: 'video', title: '剧情开场片段', description: '以病床上的机械主角回溯记忆展开叙事' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-1.mp4', type: 'video', title: '角色演出展示', description: 'MetaHuman数字人角色表演与情感表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-2.mp4', type: 'video', title: '动作捕捉成果展示', description: '动作捕捉数据在UE中的实时渲染效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-3.mp4', type: 'video', title: 'MetaHuman角色展示', description: '高精度数字人角色模型与绑定展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-4.mp4', type: 'video', title: '场景与镜头展示', description: 'UE场景搭建与镜头语言设计' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-5.mp4', type: 'video', title: '核心剧情片段', description: '母子冲突与转折关键剧情展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-2/clip-6.mp4', type: 'video', title: '结尾与主题表达', description: '结局揭示与科技人性主题呼应' },
    ],
    aiWorkflow: [
      {
        stage: '剧本辅助与内容优化',
        ai: '辅助剧情梳理，优化部分文本内容，提供创意参考',
        human: '主题设计，剧情决策，最终定稿',
      },
      {
        stage: '镜头补全与内容过渡',
        ai: '辅助生成过渡内容，补充部分画面方案',
        human: '镜头设计，内容审核，视觉统一',
      },
      {
        stage: '后期优化支持',
        ai: '辅助修补素材缺口，提供优化建议',
        human: '剪辑节奏，情绪表达，最终成片输出',
      },
    ],
    reflection: {
      zh: '通过《记忆之梦》的全流程制作，我积累了宝贵的项目实战经验。作为项目组长兼导演，我深刻认识到技术钻研、团队统筹与问题解决能力，是推动项目顺利落地的重要基础。\n\n面对传统动画流程耗时较长的问题，我主动探索并优化制作方案。通过MetaHuman数字人技术与UE动作重定向工作流，省去了传统角色绑定与中转环节，大幅提升制作效率。这让我更加理解，在实际项目中灵活优化流程往往比机械执行标准流程更具价值。\n\n本项目也显著提升了我的团队管理能力。在紧张工期下，我持续协调成员分工、同步项目进度并控制整体质量，保证项目按时完成。\n\n同时，设备限制、素材适配与工期压力等问题也锻炼了我的应变能力。我结合AI辅助工具优化部分画面与流程，在有限条件下尽可能提升作品质量。\n\n本次项目让我系统掌握了动作捕捉、数字人制作、UE实时渲染与AI辅助影视创作等技术，并进一步理解了技术实现、流程优化与团队协作在项目中的重要意义。',
      en: 'Through the end-to-end production of Dream of Memory, I gained valuable hands-on project experience. As project lead and director, I came to deeply understand that technical research, team coordination, and problem-solving are essential foundations for successful project delivery.\n\nFacing the lengthy traditional animation pipeline, I proactively explored and optimized the production approach. By leveraging MetaHuman digital human technology and UE motion retargeting workflows, I eliminated traditional rigging and middleware steps, dramatically improving production efficiency. This reinforced my understanding that flexibly optimizing workflows in real projects is often more valuable than rigidly following standard procedures.\n\nThis project also significantly strengthened my team management skills. Under tight deadlines, I continuously coordinated team member responsibilities, synchronized project progress, and controlled overall quality to ensure on-time delivery.\n\nAt the same time, constraints from equipment, material adaptation, and schedule pressure honed my adaptability. I used AI-assisted tools to optimize certain visuals and workflows, maximizing quality within limited conditions.\n\nThis project gave me systematic mastery of motion capture, digital human production, UE real-time rendering, and AI-assisted filmmaking, and deepened my understanding of the importance of technical execution, workflow optimization, and team collaboration in project development.',
    },
  },
  {
    id: 'aigc-video-3',
    title: { zh: '祀烬·蜀立', en: 'Sacred Embers of Shu' },
    description: {
      zh: '本项目为我与友人合作筹备的 AIGC 短片，我们共同完成剧本构思，计划打造一部考据严谨、兼具地方历史底蕴的高质量科普短片。\n\n因双方日程冲突、时间难以协调，项目目前暂缓推进，仅完成概念图产出，包含人物设定、场景原画等视觉素材，在此先行展示。后续空余时间，我们会继续完善内容并完成全片制作。',
      en: 'An AIGC short film project in collaboration with a friend. Together we developed the script concept, aiming to create a rigorously researched科普 short film grounded in local historical depth.\n\nDue to scheduling conflicts, the project is currently on hold. Only concept art has been produced—including character designs and environment paintings—which are showcased here. We plan to continue and complete the full film when time allows.',
    },
    category: 'ai-visual',
    tags: ['AIGC', '历史', '概念设计', '前期开发', 'AI辅助'],
    year: 2025,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/thumbnail.jpg',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-0.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-1.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-2.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-3.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-4.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-5.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-6.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-7.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-8.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-9.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-10.jpeg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-11.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-12.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-13.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-14.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-15.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-16.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-17.jpg',
    ],
    tools: ['ChatGPT', 'Midjourney', 'OiiOii'],
    role: { zh: '编剧 / 概念设计', en: 'Writer / Concept Artist' },
    snapshot: [
      { label: '项目类型', value: '历史科普短片前期开发' },
      { label: '项目阶段', value: '世界观与视觉开发' },
      { label: '项目身份', value: '编剧 / 概念设计' },
      { label: '核心内容', value: '人物设定 / 场景原画 / 视觉探索' },
      { label: '核心工具', value: 'ChatGPT / Midjourney / OiiOii' },
      { label: '核心能力', value: '历史研究 / 概念设计 / 视觉统一' },
    ],
    pipeline: [
      {
        title: '历史资料调研',
        target: '收集四川地方历史资料，梳理文化背景与时代特征',
        work: '收集四川地方历史资料，梳理文化背景与时代特征',
      },
      {
        title: '剧本与世界观构思',
        target: '建立整体叙事方向',
        work: '与合作伙伴共同讨论故事框架，建立整体叙事方向',
      },
      {
        title: '视觉风格探索',
        target: '确定整体美术方向',
        work: '设计人物形象、场景氛围与整体美术方向',
      },
      {
        title: '概念图生成与筛选',
        target: '完成大量视觉方案迭代',
        work: '测试不同模型表现效果，完成大量视觉方案迭代',
      },
      {
        title: '视觉体系建立',
        target: '形成项目视觉基调',
        work: '统一角色、建筑、场景风格，形成项目视觉基调',
      },
    ],
    challenges: [
      {
        question: '如何兼顾历史真实性与视觉表现？',
        solutions: [
          '查阅历史资料与地方文化内容',
          '保证设计建立在真实背景基础上',
          '将文化元素自然融入视觉表达',
        ],
      },
      {
        question: '如何统一不同模型生成结果？',
        solutions: [
          '持续测试生成模型，统一风格标准',
          '建立统一的提示词体系',
          '严格筛选与迭代视觉方案',
        ],
      },
      {
        question: '如何建立具有辨识度的视觉语言？',
        solutions: [
          '反复优化角色与场景设定',
          '强化地域文化特征与整体氛围',
          '在真实感与艺术表达间寻找平衡',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景与创作目标',
        content: '《祀烬·蜀立》是我与友人共同策划的历史题材AIGC短片项目。项目希望通过严谨考据与现代视觉表达相结合的方式，打造兼具文化传播价值与观赏性的科普影像作品。前期阶段主要围绕故事构思、历史研究与视觉开发展开。',
      },
      {
        title: '视觉开发成果',
        content: '目前项目已完成世界观探索、人物设定与场景概念设计等前期内容。通过大量生成测试与风格筛选，逐步建立统一视觉体系，形成较完整的概念设计成果，为后续正式制作奠定基础。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-0.jpeg', type: 'image', title: '项目视觉方向探索', description: '建立整体历史氛围与视觉基调' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-1.jpeg', type: 'image', title: '人物概念设计 A', description: '探索主要角色造型与身份特征' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-2.jpeg', type: 'image', title: '人物概念设计 B', description: '完善人物服饰与时代特征' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-3.jpeg', type: 'image', title: '人物概念设计 C', description: '统一角色视觉语言与气质表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-4.jpeg', type: 'image', title: '场景原画 A', description: '探索主要故事场景氛围' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-5.jpeg', type: 'image', title: '场景原画 B', description: '强化地域文化与历史背景表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-6.jpeg', type: 'image', title: '建筑概念设计', description: '研究传统建筑元素与结构风格' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-7.jpeg', type: 'image', title: '空间氛围设计', description: '构建具有历史感的场景环境' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-8.jpeg', type: 'image', title: '镜头概念探索', description: '尝试未来影像镜头表现方向' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-9.jpeg', type: 'image', title: '视觉语言测试', description: '测试不同画面风格表现效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-10.jpeg', type: 'image', title: '角色关系探索', description: '建立角色间的视觉关联' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-11.png', type: 'image', title: '场景细节研究', description: '强化环境真实感与历史质感' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-12.jpg', type: 'image', title: '构图方案测试', description: '寻找更具表现力的画面结构' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-13.jpg', type: 'image', title: '色彩方向研究', description: '统一项目整体色彩体系' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-14.jpg', type: 'image', title: '叙事氛围探索', description: '强化故事情绪表达能力' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-15.jpg', type: 'image', title: '世界观视觉补充', description: '完善项目整体设定逻辑' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-16.jpg', type: 'image', title: '视觉开发成果', description: '形成较完整的概念设计体系' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/aigc-video-3/content-17.jpg', type: 'image', title: '阶段性设计汇总', description: '展示当前阶段主要开发成果' },
    ],
    aiWorkflow: [
      {
        stage: '历史题材视觉探索',
        ai: '生成概念图，快速验证设计方向，辅助视觉发散',
        human: '历史资料调研，视觉方向决策，内容筛选',
      },
      {
        stage: '概念设计迭代',
        ai: '批量生成角色与场景方案',
        human: '风格统一，细节优化，最终视觉确定',
      },
    ],
    reflection: {
      zh: '《祀烬·蜀立》让我进一步认识到，优秀的历史题材创作不仅需要视觉表现能力，更需要建立在充分研究与考据基础之上。项目开发过程中，我持续查阅相关资料，并尝试将地方历史文化转化为具有传播力的视觉内容。\n\n同时，本项目也是一次针对AIGC视觉开发流程的探索实践。我对比测试了多个生成模型，筛选最适合历史题材表现的工具方案，并逐步建立统一的风格控制方法。虽然项目目前仍处于前期开发阶段，但已完成较完整的视觉体系建设，并为未来正式制作积累了扎实基础。',
      en: 'Sacred Embers of Shu deepened my understanding that excellent historical creation requires not only visual expression skills but also sufficient research and textual criticism. Throughout the development process, I continuously consulted relevant materials and attempted to transform local historical culture into communicable visual content.\n\nAt the same time, this project was an exploration of the AIGC visual development workflow. I compared and tested multiple generation models, selected the most suitable tool方案 for historical题材, and gradually established unified style control methods. Although the project is still in its early development stage, it has established a relatively complete visual system and laid a solid foundation for future正式 production.',
    },
  },
  {
    id: 'concept-design-1',
    title: { zh: '绘面盛唐，赓续宗邦', en: 'Face of Tang, Legacy of the Realm' },
    description: {
      zh: '本短片为大学课堂小组合作作业，我主要负责片中部分镜头素材生成与制作，并且进行了剧本创作和脚本完善，相关创作过程图单独展示，完整成片为团队共同协作成果。\n\n故事讲述现代少女误入深山古寺，意外穿越至盛唐与男主相遇结缘；脸谱作为贯穿全片的核心信物，最终女主重回当下。这段奇遇让她沉醉于泥塑非遗的独特魅力，此后投身传统泥塑行业。\n\n影片以推广泥塑非遗传统文化为核心立意，项目创作受课堂命题、创作规则多重限制，整套故事与视觉方案由团队共同构思落地。',
      en: 'A university group project short film. I was responsible for generating and producing部分 shot素材, as well as script development and refinement. The related creative process images are separately displayed; the final film is a collaborative team effort.\n\nThe story follows a modern girl who stumbles into an ancient temple deep in the mountains, accidentally traveling back to the Tang Dynasty where she meets and forms a bond with the protagonist. The painted face (脸谱) serves as the core token throughout the film. She ultimately returns to the present, but this extraordinary encounter immerses her in the unique charm of traditional clay sculpture (泥塑) intangible cultural heritage, inspiring her to dedicate herself to the craft.\n\nThe film aims to promote the intangible cultural heritage of clay sculpture, created within the constraints of a classroom assignment with multiple creative limitations. The entire story and visual方案 were collaboratively developed by the team.',
    },
    category: 'ai-visual',
    tags: ['AIGC', '非遗', '短片', '团队协作', 'AI辅助'],
    year: 2025,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/thumbnail.jpg',
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-0.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-1.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-2.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-3.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-4.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-5.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-6.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-0.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-1.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-2.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-3.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-4.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-6.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-7.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-8.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-9.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-10.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-11.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-12.jpg',
    ],
    tools: ['ChatGPT', 'OiiOii'],
    role: { zh: '编剧 / 素材生成', en: 'Writer /素材 Generation' },
    snapshot: [
      { label: '项目类型', value: '非遗文化主题短片' },
      { label: '项目模式', value: '团队协作项目' },
      { label: '个人职责', value: '剧本创作 / 脚本完善 / 素材生成' },
      { label: '核心主题', value: '泥塑非遗 / 传统文化 / 盛唐奇遇' },
      { label: '核心工具', value: 'ChatGPT / OiiOii' },
      { label: '核心能力', value: '团队协作 / 内容策划 / AI创作' },
    ],
    pipeline: [
      {
        title: '命题分析',
        target: '根据课程要求与创作规则，确定项目方向与主题',
        work: '根据课程要求与创作规则，确定项目方向与主题',
      },
      {
        title: '故事构思',
        target: '围绕非遗泥塑文化，建立整体故事框架',
        work: '围绕非遗泥塑文化，建立整体故事框架',
      },
      {
        title: '剧本创作',
        target: '优化叙事结构',
        work: '参与剧本编写与内容完善，优化叙事结构',
      },
      {
        title: '视觉方案设计',
        target: '确定角色、场景与画面风格',
        work: '团队共同确定角色、场景与画面风格',
      },
      {
        title: 'AIGC素材制作',
        target: '完成部分镜头素材生成，支持项目视觉表达',
        work: '完成部分镜头素材生成，支持项目视觉表达',
      },
      {
        title: '团队整合制作',
        target: '推进整体制作流程',
        work: '整合素材、完善内容、推进整体制作流程',
      },
      {
        title: '后期制作',
        target: '完成剪辑与成片输出',
        work: '完成剪辑与成片输出',
      },
    ],
    challenges: [
      {
        question: '如何在命题限制下完成创作？',
        solutions: [
          '围绕非遗文化主题展开设计',
          '在规则框架内提升故事表现力',
          '充分利用团队构思优势',
        ],
      },
      {
        question: '如何保持团队协作效率？',
        solutions: [
          '建立统一文件命名规则',
          '规范素材管理流程',
          '建立高效沟通机制',
        ],
      },
      {
        question: '如何统一视觉表达？',
        solutions: [
          '团队共同制定风格方向',
          '保证素材与剧情表达一致',
          '统一视觉输出标准',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《绘面盛唐，赓续宗邦》是大学课堂团队合作项目，以推广中国传统泥塑非遗文化为核心目标。在课程命题与创作规则约束下，团队共同完成故事策划、视觉设计与内容制作。',
      },
      {
        title: '剧情与主题表达',
        content: '故事讲述现代少女误入古寺，意外穿越至盛唐，与男主相识相知。脸谱作为贯穿全片的重要信物，连接过去与现实。当女主返回现代后，被传统泥塑艺术深深吸引，并最终投身相关行业。影片通过奇幻叙事形式展现传统文化魅力与非遗传承价值。',
      },
      {
        title: '个人参与内容',
        content: '我主要负责剧本创作、脚本完善以及部分镜头素材生成工作。参与故事结构设计与内容优化，并结合AIGC工具完成部分视觉素材制作，为项目整体表达提供支持。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/full-film.mov', type: 'video', title: '绘面盛唐，赓续宗邦｜完整短片', description: '非遗文化主题短片完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-0.mp4', type: 'video', title: '故事开场', description: '现代少女误入深山古寺' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-1.mp4', type: 'video', title: '古寺奇遇', description: '穿越之旅的起点' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-2.mp4', type: 'video', title: '盛唐初见', description: '穿越至盛唐与男主相遇结缘' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-3.mp4', type: 'video', title: '文化探索', description: '感受盛唐文化魅力' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-4.mp4', type: 'video', title: '情节发展', description: '脸谱作为核心信物推动剧情' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-5.mp4', type: 'video', title: '主题升华', description: '女主沉醉于泥塑非遗独特魅力' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/clip-6.mp4', type: 'video', title: '结尾片段', description: '回归现代投身传统泥塑行业' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-0.jpg', type: 'image', title: '项目概念设计', description: '探索项目整体视觉方向' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-1.png', type: 'image', title: '角色设计方案', description: '建立主要角色视觉形象' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-2.jpg', type: 'image', title: '场景概念图', description: '确定故事发生环境氛围' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-3.jpg', type: 'image', title: '盛唐视觉探索', description: '研究唐代文化视觉特征' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-4.jpg', type: 'image', title: '人物氛围测试', description: '强化角色气质与表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-5.jpg', type: 'image', title: '泥塑文化元素', description: '展示非遗文化相关内容' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-6.png', type: 'image', title: '镜头设计参考', description: '探索叙事镜头表现方式' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-7.jpg', type: 'image', title: '场景构图研究', description: '优化画面空间关系' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-8.jpg', type: 'image', title: '视觉风格测试', description: '统一整体美术方向' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-9.jpg', type: 'image', title: '角色互动设计', description: '展示人物关系与剧情发展' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-10.jpg', type: 'image', title: '文化表达探索', description: '强化传统文化传播效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-11.jpg', type: 'image', title: '方案迭代过程', description: '展示设计优化与调整过程' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/concept-design-1/content-12.jpg', type: 'image', title: '最终视觉成果', description: '呈现项目阶段性设计成果' },
    ],
    aiWorkflow: [
      {
        stage: '剧本辅助与内容优化',
        ai: '提供创意参考，辅助文本整理',
        human: '剧情设计，脚本完善，内容定稿',
      },
      {
        stage: '视觉素材生成',
        ai: '生成部分镜头素材',
        human: '提示词设计，素材筛选，质量把控',
      },
    ],
    reflection: {
      zh: '本项目让我进一步理解团队协作在内容创作中的重要性。相比单人项目，团队项目更依赖明确的分工、统一的规范以及高效的信息同步机制。\n\n制作过程中，我参与剧本创作、脚本优化与视觉素材制作，也切身体会到规范化协作对于项目推进的重要价值。统一命名规则、规范文件管理与及时沟通，可以有效减少重复劳动与版本混乱问题。\n\n这次经历让我逐渐养成了先建立工作规范、再推进创作的工作习惯，也让我更加重视团队协作能力在实际项目中的作用。',
      en: 'This project deepened my understanding of the importance of team collaboration in content creation. Compared to solo projects, team projects rely more on clear分工, unified norms, and efficient information synchronization.\n\nDuring production, I participated in scriptwriting, storyboard refinement, and visual素材 generation, and personally experienced the value of standardized collaboration for project progress. Consistent naming rules,规范 file management, and timely communication can effectively reduce redundant work and version confusion.\n\nThis experience gradually cultivated my habit of establishing work norms before diving into creation, and made me value team collaboration skills even more in real projects.',
    },
  },
  // ── ③ 影视后期与视觉设计 ──
  {
    id: 'goldfish-chamber',
    title: { zh: '金鱼房间', en: 'The Goldfish Chamber' },
    description: {
      zh: '《金鱼房间》是一部聚焦当代青年毕业困境的短片，讲述了刚毕业的主人公阿藤在出租屋内通过五通电话串联起的内心挣扎。影片以面试失败为起点，经历母亲的担忧、经济拮据的窘迫、恋情的结束，最终迎来复试机会，传递出"人生如巧克力"的哲思。\n\n本片在视觉语言上强调隐喻与象征：四个猫眼镜头窥探外界，映射阿藤对社会生活的不适应与逃避心理；金鱼作为情绪载体，象征阿藤被束缚的自我；西装男作为幻想人格出现，代表内心成长与直面困境的勇气。全片采用特写镜头传递人物情绪，以克制的影像风格营造沉浸感。\n\n创作过程中，团队历时四天三夜完成拍摄，面临停电、多次NG等挑战，最终通过集体协作完成作品。我们希望借由阿藤的故事，引发对青年群体生存状态的关注与思考。',
      en: 'The Goldfish Room is a short film centering on the predicaments faced by contemporary young graduates. It follows the protagonist Atou, a fresh graduate, and his inner turmoil woven together by five phone calls made inside his rental apartment. Opening with a failed job interview, the story unfolds to depict his mother\'s anxious concern, the strain of financial hardship, and the end of his romantic relationship—before he finally receives an offer for a second-round interview. The film conveys a philosophical reflection that "life is like a box of chocolates."\n\nVisually, the short leans heavily on metaphor and symbolism. Four peephole shots that peer out at the outside world mirror Atou\'s discomfort with social life and his urge to retreat. The goldfish act as a vessel for his emotions, embodying his confined self. A man in a suit appears as his imagined alter ego, representing inner growth and the courage to confront hardships head-on. Tight close-ups are used throughout to convey the character\'s emotions, and a restrained visual style draws viewers into an immersive viewing experience.\n\nThe crew shot the entire film over four days and three nights, overcoming hurdles including power outages and countless retakes. The finished work came to fruition through full teamwork. Through Atou\'s story, we hope to spark greater attention and reflection on the living conditions of young people today.',
    },
    category: 'film',
    tags: ['短片', '剧情', '纪实', '团队协作', '导演'],
    year: 2024,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/thumbnail.jpg',
    role: { zh: '导演 / 剪辑 / 后期', en: 'Director / Editor / Post-production' },
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Sony'],
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/clip-0.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/clip-1.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-0.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-1.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-2.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-3.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-4.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-6.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-7.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-8.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-9.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-10.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-11.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-12.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-13.jpg',
    ],
    snapshot: [
      { label: '项目类型', value: '原创剧情短片' },
      { label: '项目身份', value: '导演 / 剪辑 / 后期' },
      { label: '项目主题', value: '毕业困境 / 成长 / 自我和解' },
      { label: '核心表达', value: '视觉隐喻 / 情绪叙事 / 人物成长' },
      { label: '核心工具', value: 'Sony / DaVinci Resolve / Premiere Pro' },
      { label: '核心能力', value: '导演思维 / 镜头设计 / 后期剪辑' },
    ],
    pipeline: [
      {
        title: '主题构思',
        target: '围绕毕业生现实困境，建立故事主题与情绪基调',
        work: '围绕毕业生现实困境，建立故事主题与情绪基调',
      },
      {
        title: '剧本创作',
        target: '设计角色成长线，构建电话串联式叙事结构',
        work: '设计角色成长线，构建电话串联式叙事结构',
      },
      {
        title: '分镜设计',
        target: '规划镜头语言、视觉隐喻与场景调度',
        work: '规划镜头语言、视觉隐喻与场景调度',
      },
      {
        title: '现场拍摄',
        target: '完成演员调度、镜头执行与素材采集',
        work: '完成演员调度、镜头执行与素材采集',
      },
      {
        title: '素材整理',
        target: '建立后期制作素材库',
        work: '筛选有效镜头，建立后期制作素材库',
      },
      {
        title: '剪辑制作',
        target: '完成叙事节奏控制，构建完整故事结构',
        work: '完成叙事节奏控制，构建完整故事结构',
      },
      {
        title: '调色与声音处理',
        target: '统一影片视觉风格，优化观影体验',
        work: '统一影片视觉风格，优化观影体验',
      },
      {
        title: '成片输出',
        target: '完成最终短片包装与交付',
        work: '完成最终短片包装与交付',
      },
    ],
    challenges: [
      {
        question: '如何用有限场景完成完整叙事？',
        solutions: [
          '利用电话串联剧情发展',
          '强化角色心理变化与情绪表达',
          '在单一空间内构建完整故事',
        ],
      },
      {
        question: '如何让影片具备更强象征意义？',
        solutions: [
          '引入猫眼、金鱼、西装男等视觉符号',
          '构建多层次隐喻表达体系',
          '通过视觉元素服务主题表达',
        ],
      },
      {
        question: '如何在紧张周期内完成拍摄？',
        solutions: [
          '通过团队协作与现场调度克服困难',
          '应对停电与反复NG等突发问题',
          '保障项目顺利完成',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《金鱼房间》是一部聚焦当代青年毕业困境的原创剧情短片。故事围绕刚毕业的主人公阿藤展开，通过五通电话串联起求职失败、家庭压力、经济困境与情感挫折等人生阶段，展现青年人在现实压力下的迷茫与成长。',
      },
      {
        title: '视觉语言与叙事设计',
        content: '影片采用大量特写镜头强化情绪表达，并通过猫眼、金鱼与西装男等视觉元素构建象征体系。猫眼象征与外部社会的隔阂，金鱼象征受困的内心状态，而西装男则代表主人公内在成长与面对现实的勇气。通过克制的镜头语言与有限空间叙事，强化沉浸感与主题表达。',
      },
      {
        title: '制作过程与项目收获',
        content: '项目历时四天三夜完成拍摄与制作。在有限预算与紧张周期下，团队共同克服设备、场地与拍摄过程中的各种问题，最终完成作品。通过本次实践，我积累了导演、现场统筹、后期剪辑等多方面经验，也更加理解团队协作对于影视项目的重要意义。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/full-film.mov', type: 'video', title: '金鱼房间｜完整短片', description: '原创剧情短片完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/clip-0.mov', type: 'video', title: '情绪表达片段', description: '展现主人公阿藤的内心挣扎与情绪变化' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/clip-1.mov', type: 'video', title: '核心剧情片段', description: '通过电话串联展开故事推进' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-0.jpg', type: 'image', title: '影片开场氛围', description: '建立主人公生活状态与情绪基调' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-1.jpg', type: 'image', title: '出租屋场景设计', description: '展现角色生活环境与现实压力' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-2.jpg', type: 'image', title: '电话叙事结构', description: '通过通话推动剧情发展' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-3.jpg', type: 'image', title: '角色情绪特写', description: '强化人物内心变化表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-4.jpg', type: 'image', title: '猫眼意象设计', description: '象征角色对现实世界的疏离感' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-5.jpg', type: 'image', title: '金鱼视觉隐喻', description: '表现主人公被束缚的心理状态' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-6.jpg', type: 'image', title: '幻想人格呈现', description: '西装男象征角色成长与突破' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-7.jpg', type: 'image', title: '镜头构图设计', description: '利用空间关系强化故事氛围' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-8.jpg', type: 'image', title: '情绪转折时刻', description: '表现角色面对现实的挣扎' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-9.jpg', type: 'image', title: '剧情推进节点', description: '展示关键叙事片段' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-10.jpg', type: 'image', title: '光影氛围设计', description: '利用光线塑造情绪层次' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-11.jpg', type: 'image', title: '拍摄现场记录', description: '展示项目制作过程' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-12.jpg', type: 'image', title: '后期剪辑阶段', description: '完成节奏与叙事结构优化' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/goldfish-chamber/content-13.jpg', type: 'image', title: '最终影片画面', description: '展示成片视觉效果' },
    ],
    reflection: {
      zh: '《金鱼房间》是我大学阶段拍摄的第一部正式剧情短片，也是一次从构思到落地的完整影视创作实践。虽然项目预算有限、制作周期紧张，但团队始终保持高效协作，最终顺利完成拍摄与制作。\n\n本片让我开始系统思考影像表达的意义。相比复杂的技术实现，我更关注镜头是否能够准确传达人物情绪与主题表达。猫眼、金鱼与西装男等视觉符号的设计，也让我逐步理解视觉叙事与隐喻表达的重要性。\n\n通过本次项目，我积累了导演、现场统筹、剪辑制作等方面经验，也更加深刻认识到团队协作在影视项目中的价值。一次优秀的创作不仅需要个人能力，更需要整体协调与执行力共同支撑。',
      en: 'The Goldfish Chamber is my first formal narrative short film from my university years—a complete filmmaking practice from concept to delivery. Despite limited budget and tight schedule, the team maintained efficient collaboration and successfully completed the project.\n\nThis film made me start systematically thinking about the meaning of visual expression. Rather than complex technical implementation, I focused more on whether the shots could accurately convey character emotions and thematic expression. The design of visual symbols like the peephole, goldfish, and suited man also helped me gradually understand the importance of visual storytelling and metaphorical expression.\n\nThrough this project, I gained experience in directing, on-site coordination, and post-production editing, and came to deeply understand the value of team collaboration in filmmaking. Excellent creation requires not only individual ability but also overall coordination and collective execution.',
    },
  },
  {
    id: 'same-life-different-paths',
    title: { zh: '异同人生', en: 'Same Life, Different Paths' },
    description: {
      zh: '这部纪实短片创作于大二春节寒假，全程在老家独立完成，仅用一周时间完成全部拍摄与后期剪辑。影片创作灵感源自纪实作品《人生十年》，镜头聚焦身边普通大众，以平实质朴的纪实视角，捕捉不同年龄人群的生活状态与内心思考。\n\n影片选取四位身处不同人生阶段的普通人作为受访对象，采用统一访谈问题开展一对一录制。访谈内容聚焦金钱观念、婚恋择偶、家庭生活、人生感悟等贴近日常的生活化话题，真实还原不同受访者差异化的观点与内心心声。\n\n通过横向对比不同年龄层的回答，影片直观展现出人生阅历对个人价值观、生活态度的塑造与影响。整体风格朴素真实，深度探寻不同人生阶段的心境变化与生活真谛，以平凡人的真实感悟，勾勒出鲜活治愈的人间烟火与百态人生。',
      en: 'This documentary short film was independently produced during the winter Spring Festival vacation in my sophomore year. Completed in my hometown within just one week, it covers all the shooting and post-editing work. Inspired by the documentary Ten Years of Life, the work focuses on ordinary people around us and adopts a plain and authentic documentary perspective to record the living conditions and inner thoughts of people of different ages.\n\nThe film features four interviewees at distinct life stages, who are asked the same set of one-on-one interview questions. Centering on daily and down-to-earth topics including views on money, marriage and partners, family life, and life perceptions, the documentary truly presents the diverse perspectives and inner voices of the four respondents.\n\nBy comparing answers from different age groups horizontally, the film intuitively reflects how life experience shapes personal values and attitudes toward life. With a simple and realistic style, it explores the emotional changes and true meanings of life at different stages, and depicts the vivid warmth and diverse facets of ordinary life through real insights from everyday people.',
    },
    category: 'film',
    tags: ['纪录片', '人物', '纪实', '独立制作'],
    year: 2024,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/thumbnail.png',
    role: { zh: '导演 / 摄影 / 剪辑', en: 'Director / Cinematographer / Editor' },
    tools: ['Premiere Pro', 'Canon'],
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-0.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-1.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-2.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-3.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-4.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-5.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-6.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-7.png',
    ],
    snapshot: [
      { label: '项目类型', value: '人物纪录短片' },
      { label: '创作模式', value: '独立完成' },
      { label: '拍摄周期', value: '7天完成' },
      { label: '采访对象', value: '4位不同年龄受访者' },
      { label: '核心工具', value: 'Canon / Premiere Pro' },
      { label: '核心能力', value: '纪录片创作 / 人物采访 / 叙事剪辑' },
    ],
    pipeline: [
      {
        title: '选题确定',
        target: '确立不同年龄群体人生观对比的纪录主题',
        work: '受纪录作品《人生十年》启发，确立不同年龄群体人生观对比的纪录主题',
      },
      {
        title: '采访设计',
        target: '确保受访内容具备横向对比价值',
        work: '设计统一访谈问题，确保受访内容具备横向对比价值',
      },
      {
        title: '人物寻找',
        target: '邀请不同年龄阶段受访者参与拍摄',
        work: '联系并邀请不同年龄阶段受访者参与拍摄',
      },
      {
        title: '实地拍摄',
        target: '完成全部采访素材采集',
        work: '采用固定机位与手持拍摄，完成全部采访素材采集',
      },
      {
        title: '内容整理',
        target: '提炼具有代表性的观点与表达',
        work: '筛选采访内容，提炼具有代表性的观点与表达',
      },
      {
        title: '剪辑输出',
        target: '构建年龄层之间的观点对照，完成成片',
        work: '通过交叉剪辑构建年龄层之间的观点对照，完成最终成片制作',
      },
    ],
    challenges: [
      {
        question: '如何让纪录片主题更具普适性？',
        solutions: [
          '围绕金钱观、婚恋观、家庭观等生活议题展开访谈',
          '选择不同年龄层受访者增强对比维度',
          '以真实生活经验引发观众共鸣',
        ],
      },
      {
        question: '如何体现不同年龄阶段的差异？',
        solutions: [
          '采用统一问题采访机制',
          '通过横向对比强化观点碰撞',
          '保留受访者原话与真实情绪',
        ],
      },
      {
        question: '如何在有限设备条件下保证表达？',
        solutions: [
          '弱化设备限制，将重点放在真实内容上',
          '聚焦人物情感与纪实价值',
          '用内容本身打动观众',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '《异同人生》创作于大学二年级寒假期间，是我独立完成的一部人物纪录短片。项目从选题、采访、拍摄到后期剪辑均由我一人完成，希望通过普通人的真实讲述，记录不同年龄阶段的人生思考与生活状态。',
      },
      {
        title: '纪录内容与访谈设计',
        content: '影片选取四位处于不同人生阶段的普通人作为采访对象，围绕金钱观念、婚恋选择、家庭关系与人生感悟等问题展开交流。所有受访者面对相同问题，却给出了截然不同的回答，使影片形成天然的对照关系与思辨空间。',
      },
      {
        title: '项目收获与表达思考',
        content: '本片采用极简纪录方式完成拍摄，弱化技术包装，将重心放在人物情感与内容表达上。通过纪录真实个体的生活经验，我更加深刻地理解了纪录影像的价值，也积累了独立采访、纪录拍摄与内容剪辑的完整实践经验。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/full-film.mov', type: 'video', title: '异同人生｜完整纪录短片', description: '人物纪录短片完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-0.png', type: 'image', title: '项目采访现场', description: '记录受访对象采访过程' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-1.png', type: 'image', title: '人物访谈画面', description: '展现真实交流状态与情绪表达' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-2.png', type: 'image', title: '不同年龄的人生视角', description: '展示跨年龄层访谈内容' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-3.png', type: 'image', title: '生活状态记录', description: '捕捉受访者真实生活场景' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-4.png', type: 'image', title: '纪录片拍摄过程', description: '展示独立完成拍摄的工作状态' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-5.png', type: 'image', title: '采访内容整理', description: '梳理核心观点与故事线索' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-6.png', type: 'image', title: '后期剪辑阶段', description: '构建不同人物之间的观点对照关系' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/same-life-different-paths/content-7.png', type: 'image', title: '最终成片画面', description: '呈现纪录片整体视觉效果' },
    ],
    reflection: {
      zh: '《异同人生》是我第一次真正意义上独立完成的纪录片项目。从选题、采访到拍摄和剪辑，全部工作都由我一人完成。虽然设备条件有限，但也让我更加专注于内容本身，而不是依赖复杂的技术包装。\n\n在拍摄过程中，我最深的感受来自不同年龄受访者对同一个问题给出的完全不同答案。从孩童到老人，每个人的经历塑造了不同的人生观与价值判断。这种天然形成的对照关系，也成为影片最有力量的部分。\n\n回头看，这部作品在摄影、灯光与调色层面仍然比较青涩，但它让我第一次真正理解纪录片的核心价值——记录真实的人、真实的情绪与真实的人生。相比技术本身，我更珍惜这次与不同人生阶段的人交流和倾听的经历，也让我对影像表达有了更深的认识。',
      en: 'Same Life, Different Paths was my first truly independent documentary project. From topic selection to interviewing, shooting, and editing, I did everything myself. Limited equipment forced me to focus on content rather than technical polish.\n\nDuring production, what struck me most was how different age groups gave completely different answers to the same questions. From young to old, each person\'s life experiences shaped their unique worldview and value judgments. This naturally formed contrast became the film\'s most powerful element.\n\nLooking back, the cinematography, lighting, and color grading are still rough. But this project made me truly understand the core value of documentary filmmaking—recording real people, real emotions, and real lives. Beyond technique, I cherish the experience of listening to people at different life stages, which deepened my understanding of visual storytelling.',
    },
  },
  {
    id: 'kill-bill-remake',
    title: { zh: '翻拍-杀死比尔', en: 'Kill Bill Remake' },
    description: {
      zh: '本短片为大学选修课小组作业，由我与好友共同完成。项目从零筹备，历经场地踩点、器材租赁、道具筹备与分工规划，受场地、灯光、拍摄设备多重条件限制，我们通宵至凌晨四点完成取景拍摄。\n\n我在项目中兼任导演、画面指导与后期剪辑，整体筹备两天、拍摄一晚、剪辑一日，最终成片完成度可观。\n\n本片翻拍《杀死比尔》经典段落，该片段镜头语言层次丰富，以此翻拍实践，深化对镜头调度与影像叙事的理解。',
      en: 'A university elective course group project completed with a friend. The project was prepared from scratch—scouting locations, renting equipment, sourcing props, and planning分工. Constrained by limited场地, lighting, and filming equipment, we shot through the night until 4 AM.\n\nI served as director, visual director, and editor. With two days of prep, one night of shooting, and one day of editing, the final result achieved a respectable level of completion.\n\nThe film recreates a classic sequence from Kill Bill, whose layered cinematography made this remake a valuable practice in deepening my understanding of shot composition and visual narrative.',
    },
    category: 'film',
    tags: ['翻拍', '短片', '镜头研究', '团队协作'],
    year: 2025,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/thumbnail.jpg',
    role: { zh: '导演 / 画面指导 / 剪辑', en: 'Director / Visual Director / Editor' },
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Sony'],
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/clip-0.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-0.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-1.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-2.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-3.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-4.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-6.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-7.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-8.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-9.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-10.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-11.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-12.jpg',
    ],
    snapshot: [
      { label: '项目类型', value: '经典电影翻拍' },
      { label: '创作模式', value: '双人核心团队' },
      { label: '个人职责', value: '导演 / 画面指导 / 后期剪辑' },
      { label: '研究重点', value: '镜头调度 / 视觉叙事 / 节奏控制' },
      { label: '核心工具', value: 'Sony / Premiere Pro / DaVinci Resolve' },
      { label: '核心能力', value: '导演执行 / 现场调度 / 影视剪辑' },
    ],
    pipeline: [
      {
        title: '片段选定',
        target: '确定翻拍目标与研究重点',
        work: '分析《杀死比尔》经典桥段，确定翻拍目标与研究重点',
      },
      {
        title: '前期筹备',
        target: '完成场地、器材、道具与分工准备',
        work: '完成场地踩点、器材租赁、道具准备与人员分工',
      },
      {
        title: '镜头拆解',
        target: '逐镜分析原片镜头语言、构图与运动逻辑',
        work: '逐镜分析原片镜头语言、构图方式与运动逻辑',
      },
      {
        title: '现场拍摄',
        target: '完成演员调度、镜头执行与画面指导',
        work: '完成演员调度、镜头执行与画面指导',
      },
      {
        title: '后期剪辑',
        target: '还原原片节奏，优化镜头衔接',
        work: '还原原片节奏，优化镜头衔接与叙事效果',
      },
      {
        title: '调色输出',
        target: '统一视觉风格，完成成片',
        work: '统一视觉风格，完成最终成片制作',
      },
    ],
    challenges: [
      {
        question: '如何还原经典镜头语言？',
        solutions: [
          '逐镜分析原片构图、运镜方式与剪辑节奏',
          '拆解后重新组织拍摄方案',
          '在还原基础上融入个人理解',
        ],
      },
      {
        question: '如何在有限条件下接近原作质感？',
        solutions: [
          '合理调度场地、灯光与镜头设计',
          '最大化利用现有资源',
          '通过后期调色统一视觉风格',
        ],
      },
      {
        question: '如何保证高强度拍摄效率？',
        solutions: [
          '提前完成详细分工与流程规划',
          '优化拍摄流程减少冗余操作',
          '通宵完成全部镜头采集保证进度',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '本项目为大学选修课实践作业，由我与好友共同完成。项目从零开始筹备，涵盖场地寻找、设备租赁、道具准备以及拍摄计划制定等多个环节。为了完成目标镜头拍摄，我们连续工作至凌晨完成全部素材采集。',
      },
      {
        title: '翻拍目标与镜头研究',
        content: '选择《杀死比尔》经典片段作为翻拍对象，主要原因在于其拥有丰富且成熟的镜头语言体系。通过拆解原片构图、景别变化、镜头运动与剪辑节奏，我系统学习并实践了影视镜头调度与视觉叙事的方法。',
      },
      {
        title: '个人职责与项目收获',
        content: '项目中我主要负责导演、画面指导与后期剪辑工作，参与整体视觉风格把控与现场执行。通过本次翻拍实践，我进一步理解了镜头设计背后的叙事逻辑，也提升了现场调度、画面控制与后期制作能力。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/full-film.mov', type: 'video', title: '翻拍《杀死比尔》｜完整作品', description: '经典电影翻拍实践完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/clip-0.mp4', type: 'video', title: '经典桥段复刻片段', description: '还原原片镜头语言与节奏' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-0.jpg', type: 'image', title: '前期场地勘察', description: '寻找适合还原原片氛围的拍摄环境' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-1.jpg', type: 'image', title: '拍摄筹备阶段', description: '完成设备与道具准备工作' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-2.jpg', type: 'image', title: '镜头拆解分析', description: '研究原片镜头结构与画面语言' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-3.jpg', type: 'image', title: '现场构图测试', description: '调整机位与景别关系' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-4.jpg', type: 'image', title: '拍摄现场记录', description: '执行主要镜头拍摄任务' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-5.jpg', type: 'image', title: '演员调度过程', description: '协调人物运动与镜头运动关系' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-6.jpg', type: 'image', title: '光影氛围营造', description: '利用有限条件塑造视觉层次' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-7.jpg', type: 'image', title: '动作镜头执行', description: '完成重点镜头拍摄与还原' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-8.jpg', type: 'image', title: '画面风格控制', description: '统一影片视觉表达方向' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-9.jpg', type: 'image', title: '后期剪辑阶段', description: '调整节奏与镜头衔接' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-10.jpg', type: 'image', title: '调色制作过程', description: '优化整体视觉氛围与色彩表现' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-11.jpg', type: 'image', title: '成片画面展示', description: '呈现最终视觉效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/kill-bill-remake/content-12.jpg', type: 'image', title: '项目成果记录', description: '展示翻拍项目最终完成状态' },
    ],
    reflection: {
      zh: '《翻拍·杀死比尔》让我第一次以"研究者"的角度重新观察电影镜头语言。相比单纯观看影片，真正拆解并复刻经典镜头时，才能理解导演在构图、调度、景别变化和剪辑节奏上的设计逻辑。\n\n整个项目最深刻的体验来自团队协作。虽然设备、场地和拍摄时间都受到限制，但团队成员始终保持高度执行力与责任感，每个人都能快速响应并完成自己的任务。这让我更加理解影视创作并非单纯依靠个人能力，而是依赖团队整体协同运转。\n\n作为导演、画面指导与剪辑负责人，我全程参与镜头设计、现场执行与后期制作。通过这次翻拍实践，我不仅提升了镜头运用与画面表达能力，也进一步建立起从前期策划到后期成片的完整影视制作认知。',
      en: 'Kill Bill Remake was my first time examining film language from a "researcher\'s" perspective. Compared to simply watching a film, truly deconstructing and recreating classic shots gave me insight into the director\'s design logic in composition, blocking, shot variation, and editing rhythm.\n\nThe most profound takeaway was teamwork. Despite limitations in equipment,场地, and shooting time, the team maintained high execution and responsibility—everyone responded quickly and completed their tasks. This deepened my understanding that filmmaking relies not on individual ability alone, but on the entire team\'s synergistic operation.\n\nAs director, visual director, and editor, I participated in every stage from shot design to on-set execution to post-production. This remake practice not only improved my camera work and visual expression skills but also established a complete filmmaking认知 from pre-production to final output.',
    },
  },
  {
    id: 'ui-design-project',
    title: { zh: 'UI 界面设计', en: 'UI Interface Design' },
    description: {
      zh: '2024 年独立完成购物软件整套 UI 界面设计，全程使用 Figma 搭建。项目搭建完整组件规范，界面海报、页面交互动效均为纯原创制作，未使用 AI 辅助。附带 Figma 在线链接，可直接打开预览完整交互原型，直观体现界面设计功底与工具实操能力。',
      en: 'Independently completed the full UI interface design for a shopping app in 2024, built entirely with Figma. The project includes a complete component specification system. All interface posters and page interaction animations are original creations without AI assistance. A Figma online link is attached for direct preview of the complete interactive prototype, showcasing interface design skills and tool proficiency.',
    },
    category: 'ui-design',
    tags: ['UI设计', 'Figma', '移动端', '交互原型', '独立设计'],
    year: 2024,
    thumbnail: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/thumbnail.jpg',
    role: { zh: '独立设计', en: 'Independent Designer' },
    tools: ['Figma'],
    images: [
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/full-film.mov',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/clip-0.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-0.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-1.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-2.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-3.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-4.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-5.jpg',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-6.png',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-7.mp4',
      'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-8.jpg',
    ],
    snapshot: [
      { label: '项目类型', value: '移动端电商UI设计' },
      { label: '设计模式', value: '独立完成' },
      { label: '设计范围', value: '视觉设计 / 交互原型 / 组件系统' },
      { label: '设计平台', value: 'Figma' },
      { label: '核心能力', value: 'UI设计 / 交互设计 / 视觉表达' },
      { label: '项目特点', value: '原创插画 / 原创动效 / 完整原型' },
    ],
    pipeline: [
      {
        title: '需求构思',
        target: '确定移动端电商应用主题，规划整体产品结构',
        work: '确定移动端电商应用主题，规划整体产品结构',
      },
      {
        title: '信息架构设计',
        target: '梳理页面关系，建立导航与交互逻辑',
        work: '梳理页面关系，建立导航与交互逻辑',
      },
      {
        title: '视觉风格设计',
        target: '确定色彩体系、版式规范与视觉语言',
        work: '确定色彩体系、版式规范与视觉语言',
      },
      {
        title: '组件系统搭建',
        target: '建立可复用组件，提升界面一致性',
        work: '建立可复用组件与统一设计规范，提升界面一致性',
      },
      {
        title: '高保真界面制作',
        target: '完成核心页面设计与视觉细节优化',
        work: '完成核心页面设计、插画设计与视觉细节优化',
      },
      {
        title: '交互原型搭建',
        target: '形成完整可交互原型',
        work: '制作页面跳转逻辑与动效演示，形成完整可交互原型',
      },
    ],
    challenges: [
      {
        question: '如何保持多页面视觉一致性？',
        solutions: [
          '建立统一组件库与设计规范',
          '确保界面风格统一',
          '系统化管理设计元素',
        ],
      },
      {
        question: '如何提升界面层级与可读性？',
        solutions: [
          '优化版式结构与色彩对比',
          '设计信息优先级排列',
          '提升用户浏览效率',
        ],
      },
      {
        question: '如何让原型更具真实产品体验？',
        solutions: [
          '补充页面跳转逻辑与动效设计',
          '提升交互完整度',
          '模拟真实使用场景',
        ],
      },
    ],
    overviewSections: [
      {
        title: '项目背景',
        content: '本项目为独立完成的移动端电商 UI 设计练习，全程使用 Figma 搭建。从信息架构设计、视觉规范建立到界面设计与交互原型制作均由我独立完成，完整呈现了一套电商产品从视觉设计到交互体验的实现过程。',
      },
      {
        title: '设计实践与项目收获',
        content: '项目中我自主建立组件系统与设计规范，完成界面海报、插画元素及页面交互动效设计，未使用任何 AI 辅助工具。通过本次练习，我系统掌握了 Figma 的组件化设计逻辑、原型设计能力以及界面视觉表达方法，也进一步提升了个人审美判断与产品界面设计能力。',
      },
    ],
    mediaItems: [
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/full-film.mov', type: 'video', title: 'UI 界面设计｜完整展示', description: '移动端电商UI设计完整展示' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/clip-0.mp4', type: 'video', title: '交互原型演示', description: '展示页面跳转逻辑与交互反馈效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-0.png', type: 'image', title: '首页设计展示', description: '展示产品首页整体视觉风格' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-1.png', type: 'image', title: '商品浏览页面', description: '展示商品信息层级与布局设计' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-2.png', type: 'image', title: '分类导航界面', description: '优化用户查找与浏览效率' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-3.jpg', type: 'image', title: '活动运营页面', description: '展示营销内容与视觉氛围设计' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-4.jpg', type: 'image', title: '商品详情页面', description: '强化商品展示与购买引导' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-5.jpg', type: 'image', title: '购物流程设计', description: '展示下单流程与用户体验设计' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-6.png', type: 'image', title: '组件规范展示', description: '展示项目组件库与设计系统' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-7.mp4', type: 'video', title: '页面交互动效', description: '展示原型跳转与界面反馈效果' },
      { src: 'https://6261-bakz-portfolio-d4g00x16257e34cf7-1457429902.cos.ap-shanghai.myqcloud.com/bakz-portfolio/media/ui-design-project/content-8.jpg', type: 'image', title: '最终设计成果', description: '展示项目整体视觉效果与设计规范' },
    ],
    reflection: {
      zh: '本项目是我对移动端 UI 设计与交互原型设计的一次系统实践。从产品结构规划到视觉设计，再到原型交互搭建，全部工作均由我独立完成。\n\n在设计过程中，我重点学习并实践了 Figma 的组件化设计思维，通过建立统一组件系统提升页面一致性与后期维护效率。同时自主完成插画、海报与交互动效设计，使整体视觉风格更加完整统一。\n\n通过本次项目，我不仅掌握了标准化 UI 设计流程，也进一步理解了界面设计不仅仅是视觉美观，更需要兼顾信息传达效率、交互逻辑与用户体验。对于未来涉及产品设计、游戏 UI 或交互设计相关工作，这次实践为我积累了扎实的基础经验。',
      en: 'This project was a systematic practice in mobile UI design and interactive prototyping. From product structure planning to visual design to prototype interaction, all work was completed independently.\n\nDuring the design process, I focused on learning and practicing Figma\'s component-based design thinking, establishing a unified component system to improve page consistency and maintenance efficiency. I also independently completed illustrations, posters, and interaction motion designs, making the overall visual style more complete and unified.\n\nThrough this project, I not only mastered standardized UI design processes but also deepened my understanding that interface design is not just about visual aesthetics—it also requires efficient information delivery, clear interaction logic, and good user experience. This practice has laid a solid foundation for future work in product design, game UI, or interaction design.',
    },
  },
]

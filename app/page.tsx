import Hero from '@/components/Hero'
import HeroNav from '@/components/HeroNav'
import CreativeFields from '@/components/CreativeFields'
import CategorySection from '@/components/CategorySection'
import About from '@/components/About'
import Archive from '@/components/Gallery'
import FinalStatement from '@/components/FinalStatement'
import Footer from '@/components/Footer'

const gameConfig = {
  key: 'game',
  title: { zh: '游戏与交互设计', en: 'Game Development' },
  desc: {
    zh: '展示基于 Unity、UE 等工具完成的游戏开发、关卡设计、场景搭建、交互体验及原型创作作品。',
    en: 'Game development, level design, scene building, and interactive experiences built with Unity, Unreal Engine, and other tools.',
  },
  tags: ['UE5', 'Unity', '场景搭建', '交互设计'],
  featured: true,
}

const opencvConfig = {
  key: 'opencv',
  title: { zh: 'OpenCV 代码开发', en: 'OpenCV Development' },
  desc: {
    zh: '计算机视觉与图像处理项目，涵盖目标检测、人脸识别、特征匹配等算法实践与 Python 实现。',
    en: 'Computer vision and image processing projects covering object detection, face recognition, feature matching, and algorithm implementation in Python.',
  },
  tags: ['OpenCV', '计算机视觉', 'Python', '图像处理'],
}

const aiArtConfig = {
  key: 'ai-visual',
  title: { zh: 'AI 视觉与数字艺术', en: 'AI Art' },
  desc: {
    zh: '基于 AIGC 技术完成的视觉创作，包括 AI 短片、概念设计、角色设计及数字艺术探索。',
    en: 'AI-generated visual creations including AI short films, concept design, character design, and digital art exploration.',
  },
  tags: ['AI短片', '概念设计', '视觉实验', 'Midjourney', 'ComfyUI'],
}

const filmConfig = {
  key: 'film',
  title: { zh: '影视制作', en: 'Film Production' },
  desc: {
    zh: '短片、纪录片、翻拍等影视后期制作作品，涵盖导演、剪辑、后期全流程。',
    en: 'Short films, documentaries, and remakes covering the full post-production pipeline from directing to editing.',
  },
  tags: ['短片', '纪录片', '剪辑', '导演'],
}

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Hero />
        <HeroNav />
      </div>
      <CreativeFields />
      <CategorySection config={gameConfig} />
      <CategorySection config={opencvConfig} />
      <CategorySection config={aiArtConfig} />
      <CategorySection config={filmConfig} />
      <About />
      <Archive />
      <FinalStatement />
      <Footer />
    </main>
  )
}

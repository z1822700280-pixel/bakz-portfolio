'use client'

import { useState, useEffect } from 'react'
import { projects as staticProjects, Project } from '@/data/projects'
import { galleryItems as staticGallery, GalleryItem } from '@/data/gallery'

interface TinaDataState {
  projects: Project[]
  galleryItems: GalleryItem[]
  isLoading: boolean
  error: Error | null
}

export function useTinaData(): TinaDataState {
  const [state, setState] = useState<TinaDataState>({
    projects: staticProjects,
    galleryItems: staticGallery,
    isLoading: false,
    error: null,
  })

  useEffect(() => {
    async function fetchTinaData() {
      try {
        setState((prev) => ({ ...prev, isLoading: true }))

        // Try to fetch from TinaCMS
        const [projectsRes, galleryRes] = await Promise.all([
          fetch('/api/tina/projects'),
          fetch('/api/tina/gallery'),
        ])

        if (projectsRes.ok && galleryRes.ok) {
          const projectsData = await projectsRes.json()
          const galleryData = await galleryRes.json()

          setState({
            projects: projectsData,
            galleryItems: galleryData,
            isLoading: false,
            error: null,
          })
        } else {
          // Fall back to static data
          setState({
            projects: staticProjects,
            galleryItems: staticGallery,
            isLoading: false,
            error: null,
          })
        }
      } catch (error) {
        // Fall back to static data on error
        setState({
          projects: staticProjects,
          galleryItems: staticGallery,
          isLoading: false,
          error: error as Error,
        })
      }
    }

    fetchTinaData()
  }, [])

  return state
}

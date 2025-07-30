'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import BeeCursor from '../components/FloatingBeeCursor'

const timelineData = [
  {
    year: '2023',
    title: 'HackConcordia 2023',
    image: 'https://www.hackconcordia.io/_next/static/media/IMG_5319.507b4de7.jpg?imwidth=3840',
  },
  {
    year: '2022',
    title: 'HackConcordia 2022',
    image: 'https://www.hackconcordia.io/_next/static/media/IMG_5319.507b4de7.jpg?imwidth=3840',
  },
  {
    year: '2021',
    title: 'HackConcordia 2021',
    image: 'https://www.hackconcordia.io/_next/static/media/IMG_5319.507b4de7.jpg?imwidth=3840',
  },
]

export default function TimelineTrail() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])
  const [lineHeight, setLineHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  // Set which items are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.4 }
    )

    refs.current.forEach((ref) => ref && observer.observe(ref))
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref))
  }, [])

  // Update line fill height based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight)))
      setLineHeight(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <BeeCursor />
      <section id="timeline" className="w-full py-20 px-4 md:px-10 bg-black text-white">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            HackConcordia Legacy Teams
          </h2>

          <div className="relative" ref={containerRef}>
            {/* Timeline vertical line */}
            <div className="absolute left-3.5 top-0 w-1 bg-gray-700 h-full rounded">
              {/* Yellow fill layer based on scroll */}
              <div
                className="absolute left-0 top-0 w-1 bg-yellow-400 rounded transition-all duration-300"
                style={{ height: `${lineHeight * 100}%` }}
              />
            </div>

            <div className="pl-12 space-y-20">
              {timelineData.map((item, index) => {
                const isVisible = visibleIndexes.includes(index)
                return (
                  <div
                    key={item.year}
                    ref={(el) => { refs.current[index] = el }}
                    data-index={index}
                    className={clsx(
                      'relative transition-all duration-700 ease-out',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    )}
                  >
                    {/* Glowing dot */}
                    {/* <div
                      className={clsx(
                        'absolute left-0 top-1 w-6 h-6 rounded-full border-4 z-10 transition-all duration-500',
                        isVisible
                          ? 'bg-yellow-400 border-black shadow-yellow-400 shadow-md scale-110'
                          : 'bg-gray-600 border-gray-800'
                      )}
                    /> */}

                    {/* Content box */}
                    <div className="shadow-md backdrop-blur-md">
                      <p className="text-sm text-gray-400">{item.title}</p>
                      <img
                        src={item.image}
                        alt={`${item.year} team`}
                        className={clsx(
                          'w-full mt-3 rounded-md transition-all duration-700',
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        )}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

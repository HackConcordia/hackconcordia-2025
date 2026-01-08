'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function BeeCursor() {
    const imgRef = useRef<HTMLImageElement | null>(null)
    const mouseRef = useRef({ x: -9999, y: -9999 })
    const rafRef = useRef<number | null>(null)
    const isMovingRef = useRef(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX + 10
            mouseRef.current.y = e.clientY + 10
            
            // Only start RAF loop if not already running
            if (!isMovingRef.current) {
                isMovingRef.current = true
                if (!rafRef.current) {
                    rafRef.current = requestAnimationFrame(tick)
                }
            }
        }

        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches && e.touches[0]
            if (t) {
                mouseRef.current.x = t.clientX + 10
                mouseRef.current.y = t.clientY + 10
                
                if (!isMovingRef.current) {
                    isMovingRef.current = true
                    if (!rafRef.current) {
                        rafRef.current = requestAnimationFrame(tick)
                    }
                }
            }
        }

        const handleMouseLeave = () => {
            isMovingRef.current = false
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
            // Hide cursor when mouse leaves
            if (imgRef.current) {
                imgRef.current.style.transform = 'translate3d(-9999px, -9999px, 0) translate(-50%, -50%) rotate(-45deg)'
            }
        }

        const tick = () => {
            const el = imgRef.current
            if (el && isMovingRef.current) {
                const { x, y } = mouseRef.current
                el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(-45deg)`
                
                // Continue RAF only if still moving
                if (isMovingRef.current) {
                    rafRef.current = requestAnimationFrame(tick)
                } else {
                    rafRef.current = null
                }
            } else {
                rafRef.current = null
            }
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        window.addEventListener('touchmove', handleTouchMove, { passive: true })
        document.addEventListener('mouseleave', handleMouseLeave, { passive: true })

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <Image
            ref={imgRef}
            src="/bee-cursor.gif"
            alt="Bee Cursor"
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                userSelect: 'none',
                transform: 'translate3d(-9999px, -9999px, 0) translate(-50%, -50%) rotate(-45deg)',
                willChange: 'transform',
                contain: 'layout style paint'
            }}
            width={100}
            height={100}
            loading="lazy"
            unoptimized
        />
    )
}

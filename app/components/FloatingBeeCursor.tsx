'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BeeCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <Image
                src="/bee-cursor.gif"
                alt="Bee Cursor"
                style={{
                    position: 'fixed',
                    left: mousePos.x + 10,
                    top: mousePos.y + 10,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    userSelect: 'none',
                    transform: 'translate(-50%, -50%) rotate(-45deg)',
                    objectFit: 'cover'
                }}
                width={100}
                height={100}
                priority={true}
            />
        </>
    )
}

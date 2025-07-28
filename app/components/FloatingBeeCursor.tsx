'use client'

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
            <img
                src="/bee-cursor.gif"
                alt="Bee Cursor"
                style={{
                    position: 'fixed',
                    left: mousePos.x,
                    top: mousePos.y,
                    width: '100px',
                    height: '100px',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    userSelect: 'none',
                    transform: 'translate(-50%, -50%) rotate(-45deg)',
                }}
            />
        </>
    )
}

'use client'
import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ children, delay = 0, direction = 'up', style = {} }: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const transform = () => {
    if (visible) return 'translate(0,0)'
    if (direction === 'up') return 'translateY(40px)'
    if (direction === 'left') return 'translateX(-40px)'
    if (direction === 'right') return 'translateX(40px)'
    return 'none'
  }

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: transform(),
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}

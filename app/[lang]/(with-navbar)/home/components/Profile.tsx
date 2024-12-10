"use client"

import { Links } from "@/app/components/Links"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

type ProfileType = {
  dict: Dictionary["homepage"]
}

export function Profile({ dict }: ProfileType) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    const contentElements = Array.from(contentRef.current.children)

    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        imageRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        contentElements,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.3"
      )
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-[calc(100vh_-_90px)] relative overflow-hidden flex items-center bg-white"
    >
      {/* Background gradient plus subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-prussianBlue/[0.02] to-transparent" />

      {/* Content container */}
      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div ref={imageRef} className="relative order-1 lg:order-none">
            <div className="relative z-10 max-w-[320px] md:max-w-[400px] mx-auto">
              <div className="relative group">
                <Image
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-xl transition-all duration-500
                    group-hover:shadow-2xl group-hover:scale-[1.02]"
                  src="/home-img.jpeg"
                  alt="Profile Image"
                  priority
                />
                <div
                  className="absolute -z-10 -bottom-6 -right-6 w-full h-full 
                  border-2 border-prussianBlue/20 rounded-2xl transition-all duration-500
                  group-hover:-bottom-4 group-hover:-right-4"
                />
              </div>
            </div>
          </div>

          {/* Content column */}
          <div ref={contentRef} className="text-center lg:text-left space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-prussianBlue/70">
              Welcome
            </h2>
            <h1 className="font-normal text-prussianBlue text-3xl md:text-5xl leading-tight">
              {dict.jobPosition}
            </h1>
            <p className="font-light text-prussianBlue/90 text-lg md:text-xl leading-relaxed">
              {dict.headline}
            </p>
            <Links className="mt-8" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-prussianBlue/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

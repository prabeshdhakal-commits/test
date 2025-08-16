"use client"

import { useEffect, useRef } from "react"
import { parseWordPressContent } from "@/lib/wordpress"

interface WordPressContentProps {
  content: string
  className?: string
}

/**
 * Component to render WordPress content with proper styling
 * This handles WordPress-specific HTML and converts it to work well with Next.js
 */
export function WordPressContent({ content, className = "" }: WordPressContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    // Process images to use Next.js Image component
    const images = contentRef.current.querySelectorAll("img")
    images.forEach((img) => {
      // Skip processing if already handled
      if (img.dataset.processed) return

      const src = img.getAttribute("src") || ""
      const alt = img.getAttribute("alt") || ""
      const width = Number.parseInt(img.getAttribute("width") || "800", 10)
      const height = Number.parseInt(img.getAttribute("height") || "600", 10)

      // Create a wrapper div with relative positioning
      const wrapper = document.createElement("span")
      wrapper.style.position = "relative"
      wrapper.style.display = "block"
      wrapper.style.width = "100%"
      wrapper.style.height = "auto"
      wrapper.style.aspectRatio = `${width}/${height}`

      // Replace the img with the wrapper
      img.parentNode?.replaceChild(wrapper, img)

      // Create a new Image component (this is a simplified approach)
      const imgHTML = `
        <img 
          src="${src}" 
          alt="${alt}" 
          width="${width}" 
          height="${height}" 
          style="object-fit: cover; width: 100%; height: auto;"
          data-processed="true"
        />
      `
      wrapper.innerHTML = imgHTML
    })

    // Process links to use Next.js Link component for internal links
    const links = contentRef.current.querySelectorAll("a")
    links.forEach((link) => {
      // Skip processing if already handled
      if (link.dataset.processed) return

      const href = link.getAttribute("href") || ""

      // Only process internal links
      if (href.startsWith("/") || href.startsWith(window.location.origin)) {
        link.setAttribute("data-processed", "true")

        // We don't actually replace with Link components here since that would require
        // a more complex approach with React rendering, but in a real implementation
        // you would want to use Next.js Link components
      }
    })
  }, [content])

  return (
    <div
      ref={contentRef}
      className={`wordpress-content prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: parseWordPressContent(content) }}
    />
  )
}


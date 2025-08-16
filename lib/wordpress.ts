/**
 * WordPress API utilities for migrating content
 *
 * This file contains functions to help migrate content from WordPress to your Next.js site.
 * You can use these functions to fetch posts, pages, and other content from your WordPress site.
 */

// Base URL for your WordPress site
const WP_API_URL = process.env.WORDPRESS_API_URL || "https://your-wordpress-site.com/wp-json/wp/v2"

/**
 * Fetch posts from WordPress
 */
export async function getPosts(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `${WP_API_URL}/posts?page=${page}&per_page=${perPage}&_embed`,
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress posts:", error)
    return []
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string) {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`)
    }

    const posts = await response.json()
    return posts[0] || null
  } catch (error) {
    console.error(`Error fetching WordPress post with slug ${slug}:`, error)
    return null
  }
}

/**
 * Fetch pages from WordPress
 */
export async function getPages() {
  try {
    const response = await fetch(`${WP_API_URL}/pages?_embed`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress pages:", error)
    return []
  }
}

/**
 * Fetch a single page by slug
 */
export async function getPageBySlug(slug: string) {
  try {
    const response = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.status}`)
    }

    const pages = await response.json()
    return pages[0] || null
  } catch (error) {
    console.error(`Error fetching WordPress page with slug ${slug}:`, error)
    return null
  }
}

/**
 * Fetch menu items from WordPress
 * Note: This assumes you have a custom endpoint for menus or are using a plugin like WP API Menus
 */
export async function getMenuItems(menuId: string) {
  try {
    // This endpoint depends on your WordPress setup
    const response = await fetch(`${WP_API_URL}/menus/v1/menus/${menuId}`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch menu: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching WordPress menu ${menuId}:`, error)
    return { items: [] }
  }
}

/**
 * Parse WordPress content and convert to clean HTML
 * This helps handle WordPress-specific formatting
 */
export function parseWordPressContent(content: string) {
  if (!content) return ""

  // Remove WordPress-specific classes and attributes
  let parsed = content
    .replace(/class="[^"]*"/g, "")
    .replace(/style="[^"]*"/g, "")
    .replace(/data-[^=]*="[^"]*"/g, "")

  // Handle WordPress image galleries
  // This is a simplified example - you might need more complex parsing
  parsed = parsed.replace(/\[gallery ids="([^"]*)"\]/g, (match, ids) => {
    const imageIds = ids.split(",")
    return `<div class="image-gallery">${imageIds
      .map((id) => `<img src="/api/wordpress-image/${id}" alt="Gallery image" />`)
      .join("")}</div>`
  })

  return parsed
}

/**
 * Convert WordPress featured media to Next.js Image compatible format
 */
export function getImageFromWordPress(post: any) {
  if (!post._embedded || !post._embedded["wp:featuredmedia"]) {
    return null
  }

  const media = post._embedded["wp:featuredmedia"][0]

  if (!media.source_url) {
    return null
  }

  return {
    url: media.source_url,
    width: media.media_details?.width || 800,
    height: media.media_details?.height || 600,
    alt: media.alt_text || post.title.rendered,
  }
}


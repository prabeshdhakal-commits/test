import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, ChevronLeft, User, Bookmark, ThumbsUp } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This would normally be fetched from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "ultimate-guide-indian-street-food": {
      title: "The Ultimate Guide to Indian Street Food: Chaat, Pani Puri, and More",
      description:
        "Discover the vibrant world of Indian street food with our comprehensive guide to the most popular snacks and treats found across India's bustling streets.",
      content: `
        <p>Indian street food is a vibrant tapestry of flavors, textures, and aromas that tells the story of India's diverse culinary heritage. From the narrow lanes of Old Delhi to the beaches of Mumbai, street food in India is not just about satisfying hunger—it's a cultural experience that brings people together.</p>
        
        <h2>The Magic of Chaat</h2>
        
        <p>At the heart of Indian street food is chaat, a category of savory snacks that originated in northern India but has found its way into every corner of the country. The word "chaat" literally means "to lick," referring to the finger-licking goodness of these dishes.</p>
        
        <p>Popular chaat varieties include:</p>
        
        <ul>
          <li><strong>Pani Puri (Golgappa)</strong>: Hollow, crispy spheres filled with spiced water, tamarind chutney, and a mixture of potatoes, chickpeas, and spices. The experience of eating pani puri is unique—the entire puri is popped into the mouth at once, creating an explosion of flavors.</li>
          
          <li><strong>Bhel Puri</strong>: A light, crunchy mix of puffed rice, sev (crispy noodles), vegetables, and tangy chutneys. This Mumbai specialty is known for its perfect balance of sweet, sour, and spicy flavors.</li>
          
          <li><strong>Aloo Tikki</strong>: Spiced potato patties that are shallow-fried until golden and crispy, then topped with yogurt, chutneys, and spices. The contrast between the crispy exterior and soft interior makes this a beloved street food.</li>
        </ul>
        
        <h2>Regional Street Food Specialties</h2>
        
        <p>Each region of India has its own street food specialties that reflect local ingredients, tastes, and cultural influences:</p>
        
        <h3>Mumbai Street Food</h3>
        
        <p>Mumbai is often considered the street food capital of India, famous for:</p>
        
        <ul>
          <li><strong>Vada Pav</strong>: Often called the "Indian burger," this consists of a spicy potato fritter (vada) sandwiched in a bun (pav) with chutneys. It's a quick, filling meal for people on the go.</li>
          
          <li><strong>Pav Bhaji</strong>: A spicy mash of vegetables served with buttered, toasted buns. This dish evolved as a quick lunch option for textile mill workers in the 19th century.</li>
        </ul>
        
        <h3>Delhi Street Food</h3>
        
        <p>The capital city is renowned for its rich, flavorful street foods:</p>
        
        <ul>
          <li><strong>Chole Bhature</strong>: Spicy chickpea curry served with deep-fried bread. This hearty combination is a popular breakfast in northern India.</li>
          
          <li><strong>Paranthe Wali Gali</strong>: A famous lane in Old Delhi where shops specialize in stuffed parathas (flatbreads) with fillings ranging from potatoes to paneer to sweet fillings.</li>
        </ul>
        
        <h3>Kolkata Street Food</h3>
        
        <p>Kolkata's street food shows influences from both Bengali cuisine and its colonial past:</p>
        
        <ul>
          <li><strong>Kathi Rolls</strong>: Skewer-roasted kebabs wrapped in paratha with sauces and onions. This portable meal was invented to allow British colonials to eat kebabs without touching them directly.</li>
          
          <li><strong>Jhal Muri</strong>: A spicy puffed rice snack mixed with mustard oil, chili, and a variety of crunchy elements. It's typically served in paper cones made from recycled newspapers.</li>
        </ul>
        
        <h2>The Art of Making Street Food at Home</h2>
        
        <p>While nothing compares to enjoying street food in its authentic setting, many of these dishes can be recreated at home. Here are some tips for making authentic Indian street food in your kitchen:</p>
        
        <ol>
          <li><strong>Prepare components ahead</strong>: Many street foods involve multiple elements. Prepare chutneys, fillings, and other components in advance.</li>
          
          <li><strong>Balance flavors</strong>: The magic of street food lies in the balance of sweet, sour, spicy, and tangy flavors. Don't be afraid to adjust seasonings to achieve this balance.</li>
          
          <li><strong>Serve immediately</strong>: Street food is best enjoyed fresh. Serve immediately after preparation to maintain textures and temperatures.</li>
        </ol>
        
        <h2>Recipe: Homemade Pani Puri</h2>
        
        <p>Here's a simple recipe to bring the joy of pani puri to your home:</p>
        
        <h3>Ingredients:</h3>
        
        <p>For the puris:</p>
        <ul>
          <li>1 cup semolina (sooji)</li>
          <li>2 tablespoons all-purpose flour</li>
          <li>Water as needed</li>
          <li>Oil for deep frying</li>
        </ul>
        
        <p>For the filling:</p>
        <ul>
          <li>2 potatoes, boiled and diced</li>
          <li>1 cup boiled chickpeas</li>
          <li>1 small onion, finely chopped</li>
          <li>2 tablespoons chopped cilantro</li>
          <li>Chaat masala to taste</li>
        </ul>
        
        <p>For the pani (spiced water):</p>
        <ul>
          <li>1 cup mint leaves</li>
          <li>1/2 cup cilantro</li>
          <li>2-3 green chilies</li>
          <li>1 inch ginger</li>
          <li>2 tablespoons tamarind pulp</li>
          <li>1 tablespoon jaggery or sugar</li>
          <li>1 tablespoon chaat masala</li>
          <li>1 teaspoon roasted cumin powder</li>
          <li>Salt to taste</li>
          <li>2 cups cold water</li>
        </ul>
        
        <h3>Method:</h3>
        
        <ol>
          <li>Mix semolina and flour with water to form a stiff dough. Rest for 30 minutes.</li>
          <li>Roll the dough thin and cut into small circles. Deep fry until they puff up and turn golden.</li>
          <li>For the pani, blend all ingredients except water until smooth. Mix with cold water and strain.</li>
          <li>Mix all filling ingredients together.</li>
          <li>To serve, make a small hole in each puri, fill with the potato mixture, dip in the pani, and enjoy in one bite!</li>
        </ol>
        
        <h2>The Cultural Significance of Street Food</h2>
        
        <p>Street food in India is more than just a quick meal—it's a cultural institution that reflects the country's history, regional diversity, and social dynamics. Street food stalls are democratic spaces where people from all walks of life gather, making them important sites of cultural exchange and community building.</p>
        
        <p>Many street food dishes also have historical significance. For example, samosas were introduced to India by Middle Eastern traders in the 13th or 14th century, while dishes like jalebi trace their origins to Persian influences.</p>
        
        <h2>Conclusion</h2>
        
        <p>Indian street food offers a window into the country's rich culinary traditions and cultural diversity. Whether you're sampling these dishes on the streets of India or recreating them in your home kitchen, they provide a sensory journey through one of the world's most vibrant food cultures.</p>
        
        <p>At Masala House, we bring the authentic flavors of Indian street food to your table, prepared with the same passion and attention to detail as the street vendors of India. Visit us to experience these flavors for yourself, or try recreating some of these dishes at home using our recipes and tips.</p>
      `,
      date: "2024-03-15T12:00:00",
      author: "Chef Amar Kunwar",
      category: "Street Food",
      tags: ["street food", "chaat", "pani puri", "indian cuisine", "recipes"],
      image: "/placeholder.svg?height=600&width=1200",
      relatedPosts: [
        {
          title: "Street Food of Mumbai: The City's Culinary Heartbeat",
          slug: "street-food-of-mumbai",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Vegetarian Street Foods That Will Change Your Life",
          slug: "vegetarian-street-foods",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Essential Spices in Indian Cooking: A Beginner's Guide",
          slug: "essential-spices-indian-cooking",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${post.title} | Masala House Indian Food Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = getBlogPost(slug)

  // If no post is found, show 404
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Structured data for article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: [post.image],
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Masala House Concord",
              logo: {
                "@type": "ImageObject",
                url: "https://masalahouseconcord.com/logo.png",
              },
            },
            description: post.description,
            keywords: post.tags.join(", "),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://masalahouseconcord.com/blog/${slug}`,
            },
          }),
        }}
      />

      {/* Header */}
      <div className="relative h-[50vh] bg-black">
        <Image src={post.image || "/placeholder.svg"} fill alt={post.title} className="object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to blog */}
      <div className="container mt-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Blog Content */}
      <article className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

            <Separator className="my-12" />

            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-zinc-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Share and Engagement */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
              <div>
                <h3 className="font-medium mb-2">Share this article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" aria-label="Share on Facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share on Twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share via Email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share via WhatsApp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Like</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Bookmark className="h-4 w-4" />
                  <span>Save</span>
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-zinc-50 p-6 rounded-lg mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=100&width=100" fill alt={post.author} className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-muted-foreground">Executive Chef & Founder</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                With over 25 years of culinary experience, Chef Amar Kunwar brings his passion for authentic Indian
                cuisine to every dish at Masala House. His expertise in traditional cooking techniques and deep
                knowledge of regional Indian flavors informs all the recipes and food stories shared on our blog.
              </p>
            </div>

            {/* Comments Section Placeholder */}
            <div>
              <h3 className="text-xl font-bold mb-6">Comments</h3>
              <div className="bg-zinc-50 p-8 rounded-lg text-center">
                <p className="text-muted-foreground mb-4">
                  Join the conversation! Share your thoughts on this article.
                </p>
                <Button>Sign in to comment</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Related Posts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="space-y-4">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.slug}`} className="flex gap-3 group">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        fill
                        alt={relatedPost.title}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-amber-500 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Explore Categories</h3>
              <div className="flex flex-wrap gap-2">
                {["Street Food", "Regional Cuisines", "Cooking Tips", "Food History", "Spices & Ingredients"].map(
                  (category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-zinc-200 transition-colors"
                    >
                      {category}
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Subscribe for Updates</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest Indian food recipes and cooking tips delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  aria-label="Email address for newsletter"
                />
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Visit Restaurant CTA */}
            <div className="bg-zinc-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Taste It Yourself!</h3>
              <p className="mb-4">Experience the authentic flavors of Indian street food at Masala House Concord.</p>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white border-0" asChild>
                <Link href="/contact">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* More Articles */}
      <section className="bg-zinc-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {post.relatedPosts.map((relatedPost, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    fill
                    alt={relatedPost.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-4">{relatedPost.title}</h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${relatedPost.slug}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


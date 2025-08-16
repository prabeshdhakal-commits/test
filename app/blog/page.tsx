import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, User, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Indian Food & Street Food Blog | Masala House Concord",
  description:
    "Explore authentic Indian cuisine and street food recipes, cooking tips, cultural insights, and food history from Masala House Concord's expert chefs.",
  keywords:
    "Indian food blog, Indian street food, authentic Indian recipes, Indian cooking, Masala House Concord, Indian cuisine, chaat recipes, tandoori cooking",
  openGraph: {
    title: "Indian Food & Street Food Blog | Masala House Concord",
    description:
      "Explore authentic Indian cuisine and street food recipes, cooking tips, cultural insights, and food history from Masala House Concord's expert chefs.",
    url: "https://masalahouseconcord.com/blog",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Masala House Indian Food Blog",
      },
    ],
  },
}

export default function BlogPage() {
  // Blog posts focused on Indian food and street food
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Indian Street Food: Chaat, Pani Puri, and More",
      excerpt:
        "Discover the vibrant world of Indian street food with our comprehensive guide to the most popular snacks and treats found across India's bustling streets.",
      date: "2024-03-15T12:00:00",
      slug: "ultimate-guide-indian-street-food",
      category: "Street Food",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 2,
      title: "Regional Biryani Varieties: From Hyderabadi to Lucknowi",
      excerpt:
        "Explore the rich diversity of biryani across India's regions, each with its unique spices, cooking techniques, and cultural significance that make this dish so special.",
      date: "2024-03-10T12:00:00",
      slug: "regional-biryani-varieties",
      category: "Indian Cuisine",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 3,
      title: "The Art of Tandoor Cooking: Secrets from Our Kitchen",
      excerpt:
        "Learn the ancient techniques of tandoor cooking and how our chefs use this traditional clay oven to create smoky, flavorful dishes that have stood the test of time.",
      date: "2024-03-05T12:00:00",
      slug: "art-of-tandoor-cooking",
      category: "Cooking Techniques",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 4,
      title: "Street Food of Mumbai: The City's Culinary Heartbeat",
      excerpt:
        "Take a virtual tour through Mumbai's famous street food scene, from Vada Pav to Pav Bhaji, and discover why this city is considered India's street food capital.",
      date: "2024-02-28T12:00:00",
      slug: "street-food-of-mumbai",
      category: "Street Food",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 5,
      title: "Essential Spices in Indian Cooking: A Beginner's Guide",
      excerpt:
        "Demystify the complex world of Indian spices with our comprehensive guide to the essential spices that form the foundation of authentic Indian cuisine.",
      date: "2024-02-20T12:00:00",
      slug: "essential-spices-indian-cooking",
      category: "Cooking Tips",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 6,
      title: "The History and Evolution of Butter Chicken",
      excerpt:
        "Discover the fascinating origin story of Butter Chicken, one of India's most beloved dishes, and how it has evolved from a restaurant solution to a global sensation.",
      date: "2024-02-15T12:00:00",
      slug: "history-evolution-butter-chicken",
      category: "Food History",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 7,
      title: "Vegetarian Street Foods That Will Change Your Life",
      excerpt:
        "Explore India's incredible variety of vegetarian street foods that showcase how plant-based dishes can be packed with flavor, texture, and satisfaction.",
      date: "2024-02-10T12:00:00",
      slug: "vegetarian-street-foods",
      category: "Street Food",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 8,
      title: "Mastering the Perfect Curry: Tips from Our Chefs",
      excerpt:
        "Learn professional techniques and secrets to creating balanced, flavorful curries at home with guidance from Masala House's experienced chefs.",
      date: "2024-02-05T12:00:00",
      slug: "mastering-perfect-curry",
      category: "Cooking Tips",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
    {
      id: 9,
      title: "The Cultural Significance of Indian Festive Foods",
      excerpt:
        "Explore how food plays a central role in Indian festivals and celebrations, with special dishes that carry deep cultural and spiritual significance.",
      date: "2024-01-30T12:00:00",
      slug: "cultural-significance-indian-festive-foods",
      category: "Food Culture",
      image: "/placeholder.svg?height=400&width=600",
      author: "Chef Amar Kunwar",
    },
  ]

  // Popular categories for Indian food and street food
  const categories = [
    { name: "Street Food", count: 15 },
    { name: "Regional Cuisines", count: 12 },
    { name: "Cooking Techniques", count: 8 },
    { name: "Food History", count: 7 },
    { name: "Spices & Ingredients", count: 10 },
    { name: "Vegetarian Dishes", count: 14 },
    { name: "Festival Foods", count: 6 },
    { name: "Cooking Tips", count: 9 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Schema.org structured data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: "Indian Food & Street Food Blog",
            description:
              "Explore authentic Indian cuisine and street food recipes, cooking tips, cultural insights, and food history.",
            publisher: {
              "@type": "Restaurant",
              name: "Masala House Concord",
              logo: {
                "@type": "ImageObject",
                url: "https://masalahouseconcord.com/logo.png",
              },
            },
            url: "https://masalahouseconcord.com/blog",
          }),
        }}
      />

      <div className="relative h-[40vh] bg-black">
        <Image
          src="/placeholder.svg?height=500&width=1600"
          fill
          alt="Colorful Indian street food display with various chaats and snacks"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Indian Food & Street Food Blog</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Authentic recipes, cooking tips, and cultural insights from our expert chefs
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-amber-50 rounded-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              fill
              alt="The Ultimate Guide to Indian Street Food: Chaat, Pani Puri, and More"
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              Featured Article
            </div>
            <h2 className="text-3xl font-bold mb-4">The Ultimate Guide to Indian Street Food</h2>
            <p className="text-muted-foreground mb-6">
              From the tangy, spicy flavors of chaat to the crispy, savory goodness of samosas, Indian street food
              offers a world of culinary delights. Discover the stories behind these beloved dishes and learn how to
              recreate them at home.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime="2024-03-15">March 15, 2024</time>
              <span className="mx-2">•</span>
              <User className="h-4 w-4" />
              <span>Chef Amar Kunwar</span>
            </div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/blog/ultimate-guide-indian-street-food">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} fill alt={post.title} className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <CalendarIcon className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About the Blog */}
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">About Our Blog</h3>
              <p className="text-muted-foreground mb-4">
                Welcome to the Masala House food blog, where we share our passion for authentic Indian cuisine and
                street food. Our expert chefs provide recipes, cooking tips, and cultural insights to help you explore
                the rich culinary traditions of India.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex justify-between items-center p-3 hover:bg-zinc-50 rounded-md transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-zinc-100 text-zinc-700 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 4).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src={post.image || "/placeholder.svg"} fill alt={post.title} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest Indian food recipes, cooking tips, and exclusive content delivered to your inbox.
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
          </div>
        </div>
      </div>

      {/* Related Topics */}
      <section className="bg-zinc-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Explore Related Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "North Indian Cuisine", icon: "🍛" },
              { name: "South Indian Delicacies", icon: "🥘" },
              { name: "Indian Bread Varieties", icon: "🫓" },
              { name: "Vegetarian Indian Dishes", icon: "🥗" },
              { name: "Indian Desserts", icon: "🍮" },
              { name: "Spice Blends", icon: "🌶️" },
              { name: "Street Food Snacks", icon: "🥟" },
              { name: "Indian Beverages", icon: "🥛" },
            ].map((topic, index) => (
              <Link
                key={index}
                href={`/blog/topic/${topic.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-2">{topic.icon}</span>
                <span className="font-medium">{topic.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


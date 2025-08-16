import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Phone, Mail, Star, Users, Utensils, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1600"
          width={1600}
          height={600}
          alt="Restaurant interior"
          className="w-full h-[50vh] object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Best Indian Restaurant in Concord, CA</h1>
            <p className="text-xl text-white/90">Authentic Indian Cuisine & Street Foods</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">OUR STORY</h2>
          <p className="text-muted-foreground">About Us</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">WHO WE ARE</h2>
            <div className="prose max-w-none">
              <p>
                A contemporary dining experience offering authentic Indian cuisine and street food that will leave you
                craving more. With a passion for flavors, we bring you a thoughtfully curated menu featuring fresh,
                seasonal ingredients. Come and savor the essence of true Indian hospitality!
              </p>
              <p>
                At Masala House, my passion for Indian cuisine goes beyond just serving food; it's about sharing a piece
                of my heritage with every dish we prepare. Growing up in India, I was surrounded by vibrant flavors and
                the warmth of family gatherings centered around food. With Masala House, my dream is to bring that same
                authenticity and warmth to your table.
              </p>
              <p className="font-semibold">Amar Kunwar - FOUNDER</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border p-4 rounded-lg">
                <h3 className="font-bold mb-2">Lunch Time</h3>
                <p>Monday to Sunday</p>
                <p>11:00 am - 3:00 pm</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-bold mb-2">Dinner Time</h3>
                <p>Monday to Sunday</p>
                <p>5:00 pm - 10:00 pm</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              fill
              alt="Restaurant ambiance"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Stats Section */}
      <section className="bg-amber-50 py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-amber-500 mb-2">150+</h3>
              <p className="font-medium">DAILY ORDER</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-amber-500 mb-2">150+</h3>
              <p className="font-medium">SPECIAL DISHES</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-amber-500 mb-2">25+</h3>
              <p className="font-medium">COMBINED EXPERIENCE</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-amber-500 mb-2">1000+</h3>
              <p className="font-medium">HAPPY CUSTOMERS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Chefs */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" fill alt="Our chefs" className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">25+ YEARS OF COMBINED EXPERIENCE</h2>
            <div className="prose max-w-none mb-6">
              <p>
                With a combined experience of over 25 years, our team of skilled chefs brings their passion and
                expertise to every dish. Together, they craft a diverse menu filled with authentic flavors and culinary
                mastery, ensuring every meal is an unforgettable experience.
              </p>
              <p className="font-semibold">Amar Kunwar - FOUNDER</p>
            </div>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/contact">FIND A TABLE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events & Parties */}
      <section className="bg-zinc-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">DELIGHTFUL EXPERIENCE</h2>
              <h3 className="text-2xl font-semibold mb-6">Dinner, Event or Party?</h3>
              <div className="prose prose-invert max-w-none mb-8">
                <p>
                  At Masala House, we believe that food has the power to bring people together, whether it's for a cozy
                  dinner, a lively event, or a grand celebration. Hosting a dinner, event, or party? Let us take care of
                  the details. From intimate gatherings to large parties, our team is dedicated to crafting a memorable
                  culinary experience for you and your guests.
                </p>
                <p className="font-semibold">Amar Kunwar - FOUNDER</p>
              </div>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/menu">DISCOVER MENU</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" fill alt="Event catering" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-xl font-medium text-amber-500">BEST INDIAN RESTAURANT IN CONCORD, CA</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Delivery",
              description:
                "Enjoy our delicious food delivered right to your door with DoorDash, Grubhub, and Uber Eats!",
              icon: <ChevronRight className="h-10 w-10 text-amber-500" />,
            },
            {
              title: "Indian Cuisine",
              description: "Experience the rich and diverse flavors of India with every bite at Masala House.",
              icon: <Utensils className="h-10 w-10 text-amber-500" />,
            },
            {
              title: "Catering",
              description: "Let us bring the flavors of India to your event with our exceptional catering services!",
              icon: <Users className="h-10 w-10 text-amber-500" />,
            },
            {
              title: "Custom Cakes",
              description:
                "We also offer custom cakes to make your special occasions even sweeter! Crafted to your taste and design.",
              icon: <Calendar className="h-10 w-10 text-amber-500" />,
            },
          ].map((service, index) => (
            <Card key={index} className="border-amber-200">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-amber-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">WHAT OUR CUSTOMERS SAY</h2>
            <p className="text-xl font-medium text-amber-500">Exquisite Restaurant in Concord</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "r.f",
                review:
                  "The Butter Chicken, Biryani, and Scallop dish were all delicious. I could have kept eating the Butter Chicken, it's that good!",
              },
              {
                name: "Sumit G.",
                review:
                  "Cozy ambiance and personal attention was the highlight of my visit. The biryani and hot naan were fantastic!",
              },
              {
                name: "Hannah F.",
                review:
                  "The Masala House special goat biryani was so flavorful and hearty. The service was exceptional—such a welcoming experience!",
              },
              {
                name: "Reham A.",
                review: "The owners went above and beyond to make us feel welcome. Great paneer pakoras and momos!",
              },
              {
                name: "Binay P.",
                review: "A great addition to Concord! Loved the Biryani and Chicken 65. Will definitely return.",
              },
              {
                name: "Johnathan L.",
                review:
                  "Amazing value! The lunch buffet includes drinks, which makes it even better. The goat curry was incredibly tender.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                      ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.review}"</p>
                  <p className="font-medium">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">WHY CHOOSE US</h2>
          <p className="text-xl font-medium text-amber-500">Our Strength</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Fresh Food", icon: <Utensils className="h-12 w-12 mb-4 text-amber-500" /> },
            { title: "Nice Environment", icon: <MapPin className="h-12 w-12 mb-4 text-amber-500" /> },
            { title: "Exceptional Service", icon: <Users className="h-12 w-12 mb-4 text-amber-500" /> },
            { title: "Events & Parties", icon: <Calendar className="h-12 w-12 mb-4 text-amber-500" /> },
          ].map((strength, index) => (
            <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              {strength.icon}
              <h3 className="text-xl font-bold">{strength.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-zinc-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-amber-500 mt-0.5" />
                  <div>
                    <p>2118 Willow Pass Rd., Ste. 400</p>
                    <p>Concord, CA 94520</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-amber-500 mt-0.5" />
                  <div>
                    <p>(925) 490-3344</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-amber-500 mt-0.5" />
                  <div>
                    <p>masalahouseconcord@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-amber-500 mt-0.5" />
                  <div>
                    <p>Daily: 11:00 am to 3:00 pm; 5:00 pm - 10:00 pm</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/contact">FIND A TABLE</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                fill
                alt="Restaurant location"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CateringPopup } from "@/components/catering-popup"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <CateringPopup />
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          width={1600}
          height={800}
          alt="Indian food spread"
          className="w-full h-[90vh] object-cover"
          priority
        />
        <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col items-center justify-center">
          
          
          <div className="text-center px-4 max-w-4xl mt-20">
            <p className="text-amber-400 mb-4 tracking-widest">EXPERIENCE SOMETHING DIFFERENT</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-8 bg-amber-400"></div>
              <div className="text-amber-400 text-2xl">❖</div>
              <div className="h-px w-8 bg-amber-400"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Patio Street Food Coming This April
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
              Daily Buffet - $18.99
            </h2>
            <p className="text-xl text-white/90 mb-8">Buffet All 7 Days: 11AM - 3PM</p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
              Hosting a party? Make it unforgettable with Masala House Catering! Whether it's a cozy family gathering or a grand celebration, we'll bring the spice and flavor to your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                <Phone className="mr-2 h-4 w-4" />
                CALL US TODAY - (925) 490-3344
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8">
                VIEW OUR MENU
              </Button>
            </div>
          </div>
        </div>
        
        {/* Book a Table Button */}
        <div className="absolute bottom-10 right-10 z-30">
          <Link href="/contact" className="flex flex-col items-center justify-center bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-lg transition-colors">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Table icon"
              className="w-10 h-10 mb-2"
            />
            <span className="text-xs font-medium">Book a</span>
            <span className="text-xs font-medium">Table</span>
          </Link>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-16 bg-zinc-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Signature Dishes</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Experience authentic Indian flavors crafted with traditional spices and techniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Butter Chicken",
                description: "Tender chicken cooked in a rich, creamy tomato sauce with aromatic spices",
                price: "$16.99",
                image: "/placeholder.svg?height=300&width=400"
              },
              {
                name: "Vegetable Biryani",
                description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices",
                price: "$14.99",
                image: "/placeholder.svg?height=300&width=400"
              },
              {
                name: "Lamb Rogan Josh",
                description: "Tender lamb pieces slow-cooked in a rich gravy with Kashmiri spices",
                price: "$18.99",
                image: "/placeholder.svg?height=300&width=400"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    fill
                    alt={dish.name}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{dish.name}</h3>
                    <span className="text-amber-500 font-medium">{dish.price}</span>
                  </div>
                  <p className="text-zinc-600 mb-4">{dish.description}</p>
                  <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white">Order Now</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Buffet Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Daily Lunch Buffet</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Enjoy our extensive lunch buffet featuring over 20 items including appetizers, main courses, and desserts
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-8 bg-amber-400"></div>
              <div className="text-amber-400 text-2xl">❖</div>
              <div className="h-px w-8 bg-amber-400"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                fill
                alt="Buffet spread"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-light mb-4">All You Can Eat - $18.99</h3>
              <p className="text-zinc-300 mb-6">
                Available 7 days a week from 11:00 AM to 3:00 PM. Our buffet features a rotating selection of our most popular dishes, freshly prepared daily.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-amber-400 mr-2">✓</span>
                  Fresh naan bread served at your table
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-2">✓</span>
                  Multiple vegetarian and non-vegetarian options
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-2">✓</span>
                  Freshly made desserts
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-2">✓</span>
                  Complimentary chai tea
                </li>
              </ul>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                View Buffet Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Catering Services</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Let us bring the flavors of India to your next event or celebration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Perfect for Any Occasion</h3>
              <p className="text-zinc-600 mb-6">
                From intimate gatherings to large corporate events, our catering services are customized to meet your specific needs and preferences.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Corporate Events</h4>
                    <p className="text-zinc-600">Impress your clients and colleagues with authentic Indian cuisine</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Weddings & Celebrations</h4>
                    <p className="text-zinc-600">Make your special day memorable with our festive menu options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Private Parties</h4>
                    <p className="text-zinc-600">Enjoy your gathering while we handle the food</p>
                  </div>
                </li>
              </ul>
              <p className="text-zinc-600 mb-6">
                <strong>Special Discount:</strong> Mention our website when booking catering services and receive 10% off your first order!
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Request Catering Quote
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                fill
                alt="Catering setup"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our valued customers have to say about their dining experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review: "The food was absolutely amazing! The flavors were authentic and the service was impeccable. The butter chicken is a must-try!",
                rating: 5
              },
              {
                name: "Michael Chen",
                review: "Best Indian food in Concord! The daily buffet has so many options and everything is fresh and delicious. Great value for the price.",
                rating: 5
              },
              {
                name: "Priya Patel",
                review: "As someone who grew up with Indian food, I can say this place is the real deal. The spice levels are perfect and the naan is freshly made.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-500" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.review}"</p>
                <p className="font-medium">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Reserve Your Table Today</h2>
          <p className="max-w-2xl mx-auto mb-8 text-zinc-300">
            Join us for an unforgettable dining experience. Book your table now to avoid disappointment.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg">
            Make a Reservation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Masala House</h3>
              <p className="text-zinc-400 mb-4">
                Authentic Indian Cuisine & Street Foods serving the Concord community with passion and flavor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>Daily: 11:00 am - 3:00 pm</li>
                <li>Daily: 5:00 pm - 10:00 pm</li>
                <li>Buffet: 11:00 am - 3:00 pm (7 days)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>2118 Willow Pass Rd. Ste. 400</li>
                <li>Concord, CA 94520</li>
                <li>(925) 490-3344</li>
                <li>masalahouseconcord@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-zinc-400 hover:text-amber-400">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-amber-400">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-amber-400">
                  <span className="sr-only">Yelp</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.365-2.447-3.827l-.633-1.032c-.244-.37-.199-.857.104-1.229.297-.359.857-.494 1.255-.287l1.86.803c3.487 1.434 3.585 1.499 3.689 1.574.272.198.315.542.051 1.241zm-8.503-5.932c-.292.284-.788.434-1.234.338-.76-.167-1.139-1.402-1.39-4.701l-.084-1.088c-.032-.408.15-.817.506-1.084.326-.247.722-.284 1.096-.108.359.17 5.121 2.29 5.291 2.385.514.291.674.817.484 1.346-.176.491-.568 1.568-2.798 2.688l-1.871.224zm.952-10.357c-.057-.142-.03-.301.006-.415.037-.114.152-.36.416-.36.75 0 5.561 1.401 6.329 1.643.33.104.593.385.73.704.134.32.131.
</svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}\


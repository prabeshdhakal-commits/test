"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, MapPin, Clock, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "ABOUT US", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "/contact" },
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center mb-2 md:mb-0">
            <MapPin className="h-4 w-4 mr-1" />
            <span>2118 Willow Pass Rd. Ste. 400, Concord, CA 94520</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Daily: 11:00 am to 3:00 pm; 5:00 pm - 10:00 pm</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+19254903344" className="hover:text-amber-400">
                (925) 490-3344
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:masalahouseconcord@gmail.com" className="hover:text-amber-400">
                masalahouseconcord@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-zinc-900 sticky top-0 z-40">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Masala House"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-transparent hover:bg-amber-500 text-amber-400 hover:text-white border border-amber-400 hover:border-transparent rounded"
            >
              <Link href="/contact">FIND A TABLE</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-900">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium py-2 text-white hover:text-amber-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="mt-4 bg-transparent hover:bg-amber-500 text-amber-400 hover:text-white border border-amber-400 hover:border-transparent rounded"
                  asChild
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    FIND A TABLE
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}


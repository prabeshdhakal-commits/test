"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function CateringPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup immediately for testing
    setIsVisible(true)

    // Uncomment this for delayed appearance in production
    // const timer = setTimeout(() => {
    //   setIsVisible(true);
    // }, 2000);

    // return () => clearTimeout(timer);
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70">
      <div className="relative bg-amber-50 rounded-lg shadow-xl max-w-md w-full p-2 animate-fade-in border-2 border-amber-500">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-amber-900 hover:bg-amber-200"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="text-center p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-medium text-amber-900">try our</p>
            <p className="text-4xl font-bold text-amber-500 mb-2">CATERING</p>
            <p className="text-sm text-amber-900 mb-4">Discounts Available!!</p>

            <Image
              src="/placeholder.svg?height=150&width=300"
              width={300}
              height={150}
              alt="Indian food catering"
              className="rounded-lg mb-4"
            />

            <p className="text-amber-900 mb-4">
              Perfect for corporate events, weddings, and private parties. Mention our website when booking to receive
              10% off your first order!
            </p>

            <div className="flex gap-3">
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => setIsVisible(false)}
                asChild
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                onClick={() => setIsVisible(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


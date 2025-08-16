"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    occasion: "",
    message: "",
    preferredContact: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    toast({
      title: "Reservation Request Sent",
      description: "We'll contact you shortly to confirm your reservation.",
    })
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      occasion: "",
      message: "",
      preferredContact: "email",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 px-4 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact & Reservations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Make a reservation, ask a question, or simply get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Call Us</h2>
              <p className="text-muted-foreground mb-4">For immediate assistance or reservations</p>
              <Link href="tel:+11234567890" className="text-primary hover:underline">
                (123) 456-7890
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email Us</h2>
              <p className="text-muted-foreground mb-4">For general inquiries and feedback</p>
              <Link href="mailto:info@restaurant.com" className="text-primary hover:underline">
                info@restaurant.com
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Hours</h2>
              <p className="text-muted-foreground mb-4">When you can visit us</p>
              <div>
                <p>Monday - Friday: 11am - 10pm</p>
                <p>Saturday: 10am - 11pm</p>
                <p>Sunday: 10am - 9pm</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reservation Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Make a Reservation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select onValueChange={(value) => handleSelectChange("guests", value)} value={formState.guests}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="9+">9+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" value={formState.date} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select onValueChange={(value) => handleSelectChange("time", value)} value={formState.time}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "11:00 AM",
                        "11:30 AM",
                        "12:00 PM",
                        "12:30 PM",
                        "1:00 PM",
                        "1:30 PM",
                        "5:00 PM",
                        "5:30 PM",
                        "6:00 PM",
                        "6:30 PM",
                        "7:00 PM",
                        "7:30 PM",
                        "8:00 PM",
                        "8:30 PM",
                      ].map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occasion">Special Occasion (Optional)</Label>
                <Select onValueChange={(value) => handleSelectChange("occasion", value)} value={formState.occasion}>
                  <SelectTrigger id="occasion">
                    <SelectValue placeholder="Select if applicable" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="business">Business Dinner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Any dietary restrictions, seating preferences, or other requests"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-3">
                <Label>Preferred Contact Method</Label>
                <RadioGroup
                  defaultValue="email"
                  value={formState.preferredContact}
                  onValueChange={(value) => handleSelectChange("preferredContact", value)}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Request Reservation
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                We'll confirm your reservation via your preferred contact method as soon as possible.
              </p>
            </form>
          </div>

          {/* Location and Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
            <div className="bg-muted rounded-lg overflow-hidden mb-6" style={{ height: "400px" }}>
              {/* This would be replaced with an actual map component */}
              <div className="h-full w-full flex items-center justify-center bg-muted">
                <div className="text-center p-4">
                  <MapPin className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">City, State 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Parking Information</h3>
                  <p className="text-muted-foreground">
                    Complimentary valet parking is available during dinner hours. Street parking and a public parking
                    garage are also available within a block.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Public Transportation</h3>
                  <p className="text-muted-foreground">
                    We're located two blocks from the Main Street subway station. Bus routes 10, 12, and 15 stop
                    directly in front of the restaurant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


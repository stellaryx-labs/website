"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your research collaboration inquiry has been received. Our R&D team will contact you shortly to discuss
            potential opportunities and experimental initiatives.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Inquiry</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@research.org" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization / Institution</Label>
            <Input id="organization" placeholder="Company, University, etc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input id="role" placeholder="Researcher, Engineer, Professor, etc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">Research Interest Area</Label>
            <Select>
              <SelectTrigger id="interest">
                <SelectValue placeholder="Select your primary interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="orbital-intelligence">Orbital Intelligence</SelectItem>
                <SelectItem value="signals-intelligence">Signals Intelligence (SIGINT)</SelectItem>
                <SelectItem value="geospatial-ai">AI-Driven Geospatial Analysis</SelectItem>
                <SelectItem value="rf-processing">RF Signal Processing</SelectItem>
                <SelectItem value="space-systems">Space Systems Engineering</SelectItem>
                <SelectItem value="defense-innovation">Defense Innovation</SelectItem>
                <SelectItem value="workshops">Hands-On Workshops</SelectItem>
                <SelectItem value="collaboration">Research Collaboration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Research Interests & Collaboration Goals</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your research interests, potential collaboration goals, or specific areas where you'd like to work with our R&D team..."
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

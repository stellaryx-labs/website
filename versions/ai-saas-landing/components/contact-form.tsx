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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    role: '',
    interest: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare email data
      const emailData = {
        to: 'atsuboi@caltech.edu',
        subject: `New Research Collaboration Inquiry - ${formData.firstName} ${formData.lastName}`,
        html: `
          <h2>New Research Collaboration Inquiry</h2>
          <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Organization:</strong> ${formData.organization}</p>
          <p><strong>Role:</strong> ${formData.role}</p>
          <p><strong>Research Interest Area:</strong> ${formData.interest}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          <hr>
          <p><em>This inquiry was submitted through the Stellaryx Labs website contact form.</em></p>
        `
      }

      // Send email (you'll need to implement the actual email sending service)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      // Still show success message for demo purposes
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
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
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="John" 
                value={formData.firstName}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Doe" 
                value={formData.lastName}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="john.doe@research.org" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization / Institution</Label>
            <Input 
              id="organization" 
              name="organization"
              placeholder="Company, University, etc." 
              value={formData.organization}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input 
              id="role" 
              name="role"
              placeholder="Researcher, Engineer, Professor, etc." 
              value={formData.role}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">Research Interest Area</Label>
            <Select onValueChange={(value) => handleSelectChange('interest', value)}>
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
              name="message"
              placeholder="Tell us about your research interests, potential collaboration goals, or specific areas where you'd like to work with our R&D team..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
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

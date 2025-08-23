"use client"

import Script from "next/script"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TypeformEmbed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
      </CardHeader>
      <CardContent>
          <div data-tf-live="01K3B0RWQEJNE139V3F61D1YJV"></div>
          <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
      </CardContent>
  </Card>
  )
}

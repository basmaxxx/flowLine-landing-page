"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "./contact-modal"

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Automatizá tus procesos y enfocate en hacer crecer tu negocio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Eliminamos las tareas manuales y repetitivas de tu empresa. Ahorrá tiempo, reducí errores y escalá sin
            contratar más personal.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full text-base sm:w-auto" onClick={() => setIsContactModalOpen(true)}>
              Contacto
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  )
}

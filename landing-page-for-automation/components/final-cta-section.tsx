import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            ¿Listo para recuperar tu tiempo?
          </h2>
          <p className="mt-6 text-pretty text-lg opacity-90 md:text-xl">
            Agendá una llamada de 30 minutos y te mostramos cómo podemos automatizar tu negocio. Sin compromiso.
          </p>
          <Button size="lg" variant="secondary" className="mt-8 text-base">
            Agendar llamada gratuita
            <ArrowRight className="ml-2 size-5" />
          </Button>
          <p className="mt-4 text-sm opacity-75">⚡ Te respondemos en menos de 24 horas</p>
        </div>
      </div>
    </section>
  )
}

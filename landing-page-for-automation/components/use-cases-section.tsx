import { Card } from "@/components/ui/card"
import { Building2, ShoppingCart, Briefcase } from "lucide-react"

const useCases = [
  {
    icon: Building2,
    industry: "Inmobiliaria",
    title: "Automatización de reservas",
    challenge: "Perdían consultas por WhatsApp y tenían datos duplicados en múltiples planillas",
    solution:
      "Sistema automático que captura consultas, las registra en CRM y programa visitas sin intervención manual",
    result: "85% menos tiempo en administración, 0 consultas perdidas",
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    title: "Atención al cliente 24/7",
    challenge: "No podían responder preguntas fuera de horario y las ventas nocturnas se perdían",
    solution: "Bot de WhatsApp que responde FAQs, procesa pedidos y deriva casos complejos al equipo",
    result: "40% más ventas, atención instantánea 24/7",
  },
  {
    icon: Briefcase,
    industry: "Empresa de servicios",
    title: "Sincronización automática",
    challenge: "El equipo comercial perdía horas cargando datos de ventas manualmente",
    solution: "Integración que sincroniza automáticamente ventas, facturación y reportes en tiempo real",
    result: "15 horas semanales ahorradas, reportes siempre actualizados",
  },
]

export function UseCasesSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ejemplos de uso
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Empresas como la tuya que ya están automatizando sus procesos
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="flex flex-col p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="size-6 text-accent" />
                </div>
                <div className="mb-2 text-sm font-medium text-primary">{useCase.industry}</div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{useCase.title}</h3>
                <div className="mb-3 flex-1">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">Desafío:</p>
                  <p className="mb-4 text-sm text-foreground leading-relaxed">{useCase.challenge}</p>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">Solución:</p>
                  <p className="text-sm text-foreground leading-relaxed">{useCase.solution}</p>
                </div>
                <div className="mt-4 rounded-lg bg-primary/5 p-3">
                  <p className="text-sm font-semibold text-primary">✓ {useCase.result}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

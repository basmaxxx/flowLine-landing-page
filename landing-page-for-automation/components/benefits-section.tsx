import { Clock, CheckCircle2, Zap, TrendingUp, Eye } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Recuperá hasta 20 horas semanales en tareas manuales",
    stat: "20hs",
  },
  {
    icon: CheckCircle2,
    title: "Menos errores",
    description: "Eliminá los errores humanos en procesos críticos",
    stat: "95%",
  },
  {
    icon: Zap,
    title: "Respuesta más rápida",
    description: "Atendé a tus clientes en segundos, no en horas",
    stat: "10x",
  },
  {
    icon: TrendingUp,
    title: "Procesos escalables",
    description: "Crecé sin necesidad de contratar más personal",
    stat: "3x",
  },
  {
    icon: Eye,
    title: "Mayor visibilidad",
    description: "Toda la información de tu negocio en un solo lugar",
    stat: "100%",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Resultados que impactan en tu negocio
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            No vendemos funcionalidades, entregamos resultados medibles
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-8 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold text-primary">{benefit.stat}</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

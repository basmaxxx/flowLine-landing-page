import { Card } from "@/components/ui/card"
import { MessageSquare, FileSpreadsheet, Database, Workflow, Mail } from "lucide-react"

const solutions = [
  {
    icon: MessageSquare,
    title: "WhatsApp automatizado",
    description: "Respuestas automáticas, mensajes programados y registro de conversaciones",
  },
  {
    icon: FileSpreadsheet,
    title: "Flujos con Google Sheets",
    description: "Sincronización automática de datos, reportes en tiempo real",
  },
  {
    icon: Database,
    title: "Integración con CRM",
    description: "Todos tus contactos y ventas sincronizados automáticamente",
  },
  {
    icon: Workflow,
    title: "Procesos internos",
    description: "Aprobaciones, notificaciones y flujos de trabajo automatizados",
  },
  {
    icon: Mail,
    title: "Emails y notificaciones",
    description: "Comunicación automática con clientes y equipo",
  },
]

export function SolutionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Automatizamos lo que te quita tiempo
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Soluciones concretas para los problemas reales de tu empresa
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card key={index} className="p-6 transition-all hover:shadow-lg hover:scale-105">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="size-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { AlertCircle, Copy, MessageSquare, Users, Layers } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "Tareas manuales y repetitivas",
    description: "Perdés horas copiando datos entre sistemas",
  },
  {
    icon: Copy,
    title: "Errores de copy-paste",
    description: "Los errores humanos te cuestan dinero y clientes",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp desorganizado",
    description: "Mensajes importantes se pierden entre conversaciones",
  },
  {
    icon: Users,
    title: "Leads que se escapan",
    description: "No tenés tiempo de responder a todos los contactos",
  },
  {
    icon: Layers,
    title: "Herramientas desconectadas",
    description: "Usás múltiples sistemas que no se hablan entre sí",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Estos son los problemas más comunes que enfrentan las PyMEs argentinas
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} className="p-6 cursor-default">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

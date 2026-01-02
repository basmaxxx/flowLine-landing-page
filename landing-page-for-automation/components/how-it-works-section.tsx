import { Search, Wrench, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analizamos tus procesos",
    description: "Identificamos qué tareas podés automatizar para obtener el mayor impacto",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Diseñamos e implementamos",
    description: "Creamos la automatización y la integramos con tus herramientas actuales",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Monitoreamos y optimizamos",
    description: "Seguimiento continuo y ajustes para maximizar los resultados",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Un proceso simple y probado para transformar tu empresa
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-12 hidden h-px w-full bg-border md:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="size-10" />
                    </div>
                    <div className="mb-4 text-5xl font-bold text-muted-foreground/30">{step.number}</div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

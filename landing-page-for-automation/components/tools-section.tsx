import { Card } from "@/components/ui/card"

const tools = [
  { name: "n8n", description: "Automatización de flujos" },
  { name: "WhatsApp API", description: "Mensajería automatizada" },
  { name: "Google Workspace", description: "Sheets, Drive, Gmail" },
  { name: "CRMs", description: "HubSpot, Pipedrive, Zoho" },
  { name: "APIs", description: "Integraciones personalizadas" },
  { name: "Zapier", description: "Conectores avanzados" },
]

export function ToolsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Herramientas y tecnologías
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Trabajamos con las mejores plataformas para crear soluciones robustas
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 text-center transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

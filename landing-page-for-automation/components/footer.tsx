import { MessageSquare, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground">FlowLine</h3>
            <p className="mt-2 text-sm text-muted-foreground">Automatización para PyMEs argentinas</p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:agustinbasmagi@gmail.com?subject=Consulta%20por%20automatizaci%C3%B3n%20de%20procesos&body=Hola%2C%0A%0AQuiero%20consultar%20por%20automatizaci%C3%B3n%20de%20procesos%20para%20mi%20negocio.%0A%0AGracias."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Mail className="size-4" />
              agustinbasmagi@gmail.com
            </a>
            <a
              href="https://wa.me/541141459797?text=Hola%2C%20quiero%20consultar%20por%20automatizaci%C3%B3n%20de%20procesos%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MessageSquare className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FlowLine. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

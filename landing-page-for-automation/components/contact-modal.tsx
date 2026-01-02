"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MessageSquare, Mail } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md animate-in fade-in-0 zoom-in-95 duration-200">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contactanos</DialogTitle>
          <DialogDescription>Elegí tu método de contacto preferido</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <a
            href="https://wa.me/541141459797?text=Hola%2C%20quiero%20consultar%20por%20automatizaci%C3%B3n%20de%20procesos%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-green-500/10">
              <MessageSquare className="size-6 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-muted-foreground">11 4145 9797</div>
            </div>
          </a>
          <a
            href="mailto:agustinbasmagi@gmail.com?subject=Consulta%20por%20automatizaci%C3%B3n%20de%20procesos&body=Hola%2C%0A%0AQuiero%20consultar%20por%20automatizaci%C3%B3n%20de%20procesos%20para%20mi%20negocio.%0A%0AGracias."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="size-6 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">agustinbasmagi@gmail.com</div>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

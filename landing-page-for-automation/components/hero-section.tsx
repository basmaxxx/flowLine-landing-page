export function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1681374685946-bb61e03931bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1850&q=80')",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white lg:px-16">
        <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
          Automatizá tus procesos y enfocate en hacer crecer tu negocio
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/90 lg:text-xl">
          Eliminamos tareas manuales y repetitivas. Ahorrá tiempo, reducÍ errores y escalá sin contratar
          más personal.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-green-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-600"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}


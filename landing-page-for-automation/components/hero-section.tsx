<section
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1681374685946-bb61e03931bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1850&q=80')",
  }}
>
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Contenido del hero */}
  <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-6 lg:px-16 text-white">
    {/* Tu título y subtítulo */}
    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
      Automatizaciones que liberan tu tiempo
    </h1>
    <p className="mt-4 text-lg lg:text-xl max-w-2xl">
      Conectamos tus herramientas y procesos para que tu negocio funcione sin tareas repetitivas.
    </p>

    {/* Botón Contacto */}
    <a
      href="#contact" /* o tu anchor/acción */
      className="mt-8 inline-block rounded bg-green-500 px-6 py-3 text-lg font-semibold text-white hover:bg-green-600"
    >
      Contacto
    </a>
  </div>
</section>


function Header() {

  return (
    <div>
        <header className="border-b border-gray-100 py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 bg-white/90 backdrop-blur-md z-50">
          <h1 className="text-2xl font-serif tracking-widest uppercase text-black">
            Aura <span className="text-[#b76e79]">Closet</span>
          </h1>
        </header>
        
        <section className="bg-black text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">Moda & Elegância</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light">
            Descubra nossa seleção exclusiva de vestidos e conjuntos com o caimento perfeito para o seu estilo.
          </p>
        </section>
      </div>
  )
}

export default Header

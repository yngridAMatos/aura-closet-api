function ComoFiz() {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-8 py-12 max-w-4xl mx-auto">
      <a href="/" className="text-xs uppercase tracking-widest text-[#b76e79] hover:underline mb-8 inline-block">
        ← Voltar para a Loja
      </a>

      <h1 className="text-2xl font-light tracking-widest uppercase mb-4">Como Fiz o Projeto</h1>
      <p className="text-sm text-gray-600 mb-8">
        Documentação técnica e apresentação do desafio "Minha Loja no Ar"
      </p>

      <div className="aspect-video bg-gray-50 border border-gray-100 mb-8 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="..."
          title="Vídeo de Apresentação"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-base font-medium text-black uppercase tracking-wider">1. Organização e Arquitetura</h2>
        <p>O projeto foi estruturado utilizando React, TypeScript e Tailwind CSS.</p>
        
        <h2 className="text-base font-medium text-black uppercase tracking-wider">2. Headless Commerce (`products.json`)</h2>
        <p>O catálogo é totalmente desacoplado do front-end, sendo consumido de forma assíncroma via `fetch`.</p>
      </div>
    </div>
  );
}

export default ComoFiz;
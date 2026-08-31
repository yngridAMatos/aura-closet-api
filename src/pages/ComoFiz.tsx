function ComoFiz() {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-8 py-12 max-w-4xl mx-auto">
      <a href="/" className="text-xs uppercase tracking-widest text-[#8c4a56] hover:underline mb-8 inline-block">
        ← Voltar para a Loja
      </a>

      <h1 className="text-2xl font-light tracking-widest uppercase mb-4">Como Fiz o Projeto</h1>
      <p className="text-sm text-gray-600 mb-8">
        Documentação técnica e apresentação do desafio "Minha Loja no Ar"
      </p>

      <div className="aspect-video bg-gray-50 border border-gray-100 mb-8 flex items-center justify-center">
        <video controls preload="none" className="w-full h-full">
          <source src="/assets/apresentacao-aura-closet.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo em HTML5.
        </video>

      </div>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-base font-medium text-black uppercase tracking-wider">1. Organização e Arquitetura</h2>
        <p>O projeto foi estruturado utilizando React, TypeScript e Tailwind CSS.</p>
        
        <h2 className="text-base font-medium text-black uppercase tracking-wider">2. Observações</h2>
        <p> Nota técnica: A captura de tela foi realizada utilizando recursos nativos do ambiente de desenvolvimento, o que resultou em pequenas variações pontuais na sincronização de áudio e cortes durante a demonstração prática.</p>
      </div>
    </div>
  );
}

export default ComoFiz;
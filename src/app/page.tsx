import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full px-6 bg-fundo">
      <section>
        <div>
          <h1 className="pt-20 text-branco text-center text-4xl font-extrabold leading-tight">Estacionamento <br /> urbano <br />
            <span className="text-4xl font-extrabold text-azul"> inteligente e em tempo real</span>
          </h1>
          <p className="mt-8 text-center text-branco"> Encontre vagas livres em segundos ou gerencie
          o estacionamento urbano como agente de fiscalização.
          Tecnologia a serviço da cidade.</p>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-4">
        <button className="bg-azul py-3 rounded-2xl">
            <Link href={"/driver"} className="text-branco">Sou Motorista - Ver Vagas</Link>
        </button>
        <button className="bg-roxo py-3 rounded-2xl">
            <Link href={""} className="text-branco">Sou Agente - Área Restrita</Link>
        </button>
      </div>
    </main>
  );
}

import { MapPinIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <footer>
            <div>
                <div className="flex gap-1.5">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-azul">
                        <MapPinIcon className="w-4 text-branco"></MapPinIcon>
                    </div>
                    <p className="text-branco text-xl font-extrabold">vagajá</p>
                </div>
                
                <p>
                    Conectamos motoristas a vagas disponíveis e capacitamos 
                    agentes com ferramentas de gestão urbana em tempo real.
                </p>

                <div>

                </div>
            </div>

            <div>
                <div>
                    <h2>Serviços</h2>
                    <p>Mapa de Vagas</p>
                    <p>Área do Agente</p>
                    <p>Cadastro de Agente</p>
                    <p>Planos e Parcerias</p>
                    <p>API para Empresas</p>
                </div>

                <div>
                    <h2>Institucioal</h2>
                    <p>Sobre nós</p>
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                    <p>Acessibilidade</p>
                    <p>Imprensa</p>
                </div>
                
                <div>
                    <h2>Contato</h2>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p>
                    © 2026 ParkUrban Tecnologia e Mobilidade Urbana Ltda. 
                    Todos os direitos reservados.
                </p>
                <p>Todos os sistemas operacionais</p>
            </div>
        </footer>
    )
}
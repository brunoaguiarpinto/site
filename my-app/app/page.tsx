"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center text-center space-y-6 w-full">
            <h1 className="text-5xl md:text-5xl font-bold text-white">
              Tenha leads que comprem de você.
            </h1>
            <h1 className="text-4xl md:text-8xl font-bold text-white">
              Libere o poder dos dados!
            </h1>
          </div>
        }
      >
        <div className="flex items-center justify-center h-full">
          <img 
            src="https://minioapi.instabots.com.br/videos/Captura%20de%20tela%202025-02-13%20065633.png"
            alt="Dados e Leads"
            className="w-full h-full object-contain"
          />
        </div>
      </ContainerScroll>
    </main>
  );
}

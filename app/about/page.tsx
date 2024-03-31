import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a comunidade",
  description: "Information about sobre a comunidade",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Sobre a comunidade
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/logo-java-jugle.png" alt={siteConfig.author} />
            <AvatarFallback>Java Amazonas</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Comunidade Java Amazonas
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          A comunidade foi criada com o intuito de promover a linguagem de
          programação Java no Amazonas. Ela representa uma forma de conectar,
          comunicar e colaborar com outros desenvolvedores do estado,
          compartilhando conhecimentos com o objetivo de expandir e fortalecer
          as comunidades de tecnologia da região.
        </p>
      </div>
    </div>
  );
}

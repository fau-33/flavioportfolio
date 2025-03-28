import Readme from "@/components/projetos/Readme";
import Cabecalho from "@/components/shared/Cabecalho";
import CarrosselImagens from "@/components/shared/CarroselImagens";
import Container from "@/components/shared/Container";
import ConteudoMD from "@/components/shared/conteudoMD";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import { obterReadme } from "@/functions/github";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params;
	const projeto = await obterProjeto(id);

	if (!projeto) return null;

	const readme = await obterReadme(projeto.repositorio);

	return (
		<div className="bg-500">
			<Cabecalho />
			<Container className="flex flex-col gap-10 py-7">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias lista={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	);
}

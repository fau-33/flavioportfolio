import { Projeto } from "@core";
import Link from "next/link";
import Image from "next/image";

export interface ItemProjetoProps {
	projeto: Projeto;
}

export function ItemProjeto(props: ItemProjetoProps) {
	return (
		<Link href={`/projeto/${props.projeto.id}`}>
			<div className="min-w-64 min-h-64 relative rounded-2xl overflow-hidden    border border-zinc-800">
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					objectFit="object-cover"
				/>
			</div>
		</Link>
	);
}

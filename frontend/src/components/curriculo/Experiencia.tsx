export default function Experiencia() {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
			<Item principal="+150" label="paises atendidos" />
			<Item principal="+20" label="anos de experiência" />
			<Item principal="420k" label="alunos matriculados" />
		</div>
	);
}

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<h3 className="text-red-500 font-bold leading-6">{props.principal}</h3>
			<p className="text-zinc-400 text-sm text-center">{props.label}</p>
		</div>
	);
}

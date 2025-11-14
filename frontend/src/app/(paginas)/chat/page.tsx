"use client";
import useChat from "@/hooks/useChat";
import { useState } from "react";

export default function Page() {
	const { chatId, mensagens, adicionarMensagem } = useChat();
	const [texto, setTexto] = useState("");

	return (
		<div>
			<h1>Chat</h1>
			<h2>chat ID: {chatId}</h2>
			<ul>
				{mensagens.map((mensagem) => (
					<li key={mensagem.id} className="flex gap-2">
						<div>{mensagem.autor}: </div>
						<div>{mensagem.lado}</div>
					</li>
				))}
			</ul>
			<input
				type="text"
				value={texto}
				className="border-2 border-gray-300 rounded-md p-2"
				onChange={(e: any) => {
					setTexto(e.target.value);
				}}
				onKeyDown={(e: any) => {
					if (e.key === "Enter") {
						adicionarMensagem(texto);
						setTexto("");
					}
				}}
			/>
		</div>
	);
}

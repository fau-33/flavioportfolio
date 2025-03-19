import { Module } from "@nestjs/common";
import { TecnologiaController } from "./tecnologia.controller";
import { TecnologiaPrisma } from "./tecnologia.prisma";
import { DbModule } from "src/db/db.module";
import { ProjetoPrisma } from "../projeto/projeto.prisma";
import { ProjetoController } from "../projeto/projeto.controller";

@Module({
	controllers: [TecnologiaController, ProjetoController],
	providers: [TecnologiaPrisma, ProjetoPrisma],
	imports: [DbModule],
})
export class TecnologiaModule {}

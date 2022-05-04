import { GravidezStatus } from "./gravidez-status.mode";
import { AbortoEnumeration } from "./tipo-aborto.model";

export class Gravidez{

    gravidezId !: string;
	dataEngravida! : Date;
    dataParto! : Date;
	gravidezStatus = GravidezStatus.SAUDAVEL;
	aborto = AbortoEnumeration.SEM_ABORTO;
    localParto !: string;
    dataRegistro !: Date;
    dataAtualizacao !: Date;
    pacienteId !: string;
}

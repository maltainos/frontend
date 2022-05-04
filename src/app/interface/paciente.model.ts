import { Byte } from "@angular/compiler/src/util";

import { Contacto } from "./contactos.model";
import { Endereco } from "./endereco.model";
import { EstadoCivil } from "./estdo-civil.model";
import { Filiacao } from "./filiacao.model";
import { GrupoSanguineo } from './grupo-sangue.model';
import { PessoaReferencia } from "./pessoa-referencia.model";
import { Profissao } from "./profissao.model";

export class Paciente{

    pacienteId !: string;
    primeiroNome !: string;
	sobreNome !: string;
	dataNascimento !: Date;
	anosIdade !: Byte;
	filiacao !: Filiacao;
	estadoCivil !: EstadoCivil;
	profissao !: Profissao;
	enderecos !: Endereco[];
	contactos !: Contacto[];
	pessoaReferencia! : PessoaReferencia;
	grupoSanguineo !: GrupoSanguineo;
	criadoEm !: Date;
	atualizadoEm !: Date;
}

import { Component, signal } from '@angular/core';

//Interface
import { IExperience } from '../../interface/IExperiencie.interface';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: "Analista de Sistemas",
        p: "Unisys | Fev 2024 - Presente"
      },
      text : `<p>
      <li>Desenvolvimento e Modernização: Condução de modernizações de sistemas usando ASP.NET Core, Framework MVC e APIs RESTful.</li>
      <li>Migração de Ferramentas: Participação ativa em migrações para Mainframes, incluindo definição de arquitetura e planejamento.</li>
      <li>Manutenção e Performance: Garantia da alta performance dos sistemas por meio de melhorias no código e banco de dados.</li>
      <li>Colaboração com Stakeholders: Manutenção de comunicação constante com clientes para análise de requisitos, suporte técnico e treinamento.</li>
      </p>
      `
    },
    {
      summary: {
        strong: "Estágiario de Desenvolvimento",
        p: "Unisys | Jun 2022 - Dez 2023"
      },
      text : `<p>
      <li>Automação: Implementação de automações utilizando Azure, Visual Studio e scripts personalizados.</li>
      <li>Desenvolvimento de APIs: Criação e manutenção de APIs REST e suporte à integração de serviços.</li>
      <li>Migração Tecnológica: Suporte a migrações de tecnologias Low-Code para plataformas de alto desempenho.</li>
      <li>Monitoramento: Supervisão e testes durante migrações, garantindo a integridade dos dados e processos.</li>
      </p>
      `
    },
  ])
}

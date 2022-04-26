import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { CategoryEnum } from '../enums/category.enum';
import { RatingEnum, StatusEnum } from '../enums/general.enum';
import { HabilityEnum } from '../enums/hability.enum';
import { ProfessionalModel } from '../models/professional.model';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  professionalsList(): ProfessionalModel[] {
    return <ProfessionalModel[]>[
      {
        id: 1,
        name: 'Ruan Araújo da Silva',
        role: 'Analista de Desenvolvimento Front-end Jr',
        rating: RatingEnum.THREE,
        photo: 'https://img.r7.com/images/cachorro-mais-feio-morte-chase-26032019162545389',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum?',
        habilities: [
          {
            id: 1,
            name: HabilityEnum.HTML,
          },
          {
            id: 2,
            name: HabilityEnum.CSS,
          },
          {
            id: 3,
            name: HabilityEnum.Javascript,
          },
          {
            id: 4,
            name: 'jQuery',
          },
          {
            id: 5,
            name: 'Bootstrap',
          },
          {
            id: 6,
            name: 'Angular',
          },
          {
            id: 7,
            name: 'Front-end',
          },
        ],
        status: StatusEnum.OFFLINE,
        workedIn: 120,
        hiredIn: 16,
        registeredSince: moment('20210101', 'YYYYMMDD').format('L'),
        lastAccess: moment().startOf('day').fromNow(),
      },
      {
        id: 2,
        name: 'Geraldo Souza',
        role: 'Product Manager',
        rating: RatingEnum.FIVE,
        photo: 'https://cdn.vidanimal.com.br/wp-content/uploads/bull-terrier-ingles2.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum?',
        habilities: [
          {
            id: 1,
            name: 'Scrum',
          },
          {
            id: 2,
            name: 'Kanban',
          },
          {
            id: 3,
            name: 'Administração',
          },
          {
            id: 4,
            name: 'Trabalho em Equipe',
          },
        ],
        status: StatusEnum.OFFLINE,
        workedIn: 53,
        hiredIn: 6,
        registeredSince: moment('20220101', 'YYYYMMDD').format('L'),
        lastAccess: moment().startOf('hour').fromNow(),
      },
      {
        id: 3,
        name: 'Rodrigo Rocha',
        role: 'Analista Trainee Desenvolvimento de Software',
        rating: RatingEnum.FIVE,
        photo: 'https://img.ibxk.com.br/2020/10/01/01115625302155.jpg?w=1040',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum?',
        habilities: [
          {
            id: 1,
            name: 'HTML',
          },
          {
            id: 2,
            name: 'CSS',
          },
          {
            id: 3,
            name: 'Javascript',
          },
          {
            id: 4,
            name: 'Java',
          },
          {
            id: 5,
            name: 'Bootstrap',
          },
          {
            id: 6,
            name: 'React',
          },
          {
            id: 7,
            name: 'Docker',
          },
          {
            id: 8,
            name: 'Postgres',
          },
          {
            id: 9,
            name: 'SpringBoot',
          },
        ],
        status: StatusEnum.OFFLINE,
        workedIn: 120,
        hiredIn: 16,
        registeredSince: moment('20210424', 'YYYYMMDD').format('L'),
        lastAccess: moment().endOf('hour').fromNow(),
      },
      {
        id: 4,
        name: 'Jeremias Jose',
        role: 'Trainee Desenvolvimento de Software',
        rating: RatingEnum.FOUR,
        photo:
          'https://animais.culturamix.com/blog/wp-content/gallery/cachorros-engracados-1/Fotos-de-cachorros-engra%C3%A7ados-6.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum?',
        habilities: [
          {
            id: 1,
            name: 'Java',
          },
          {
            id: 2,
            name: 'Delph',
          },
          {
            id: 3,
            name: 'MongoDB',
          },
          {
            id: 4,
            name: 'Flutter',
          },
          {
            id: 5,
            name: 'C#',
          },
        ],
        status: StatusEnum.OFFLINE,
        workedIn: 120,
        hiredIn: 16,
        registeredSince: moment('20210216', 'YYYYMMDD').format('L'),
        lastAccess: moment().endOf('hour').add(1, 'hours').fromNow(),
      },
      {
        id: 6,
        name: 'Pedro Lorencini',
        role: 'Analista de Software Jr',
        rating: RatingEnum.FOUR,
        photo: 'https://webcachorros.com.br/wp-content/uploads/2014/09/Pabst.jpg',
        description:
          'Atualmente na área de Perfomance, execução de teste com uso de um ferramenta chamada (Jmeter, programado em Java ) Conhecimento de Linux, banco de dados e etc',
        habilities: [
          {
            id: 1,
            name: 'Jmeter',
          },
          {
            id: 2,
            name: 'Oracle',
          },
          {
            id: 3,
            name: 'Linux',
          },
          {
            id: 4,
            name: 'Java',
          },
          {
            id: 5,
            name: 'Arquitetura em geral',
          },
          {
            id: 6,
            name: 'Back-end',
          },
        ],
        status: StatusEnum.OFFLINE,
        workedIn: 120,
        hiredIn: 16,
        registeredSince: moment('20210129', 'YYYYMMDD').format('L'),
        lastAccess: moment().startOf('hour').add(3, 'days').fromNow(),
      },
      {
        id: 6,
        name: 'Joaquim alves',
        role: 'Analista de Sofware Pk',
        rating: RatingEnum.FIVE,
        photo:
          'https://super.abril.com.br/wp-content/uploads/2016/10/super_imgrascaldeux1_0_0.jpg?quality=90&strip=info&w=409',
        description:
          'Atualmente na área de Performance mais focado em análise de banco de dados ( especialista em oracle )',
        habilities: [
          {
            id: 1,
            name: 'Banco de dados',
          },
          {
            id: 2,
            name: 'Oracle',
          },
          {
            id: 3,
            name: 'Linux',
          },
          {
            id: 4,
            name: 'Arquitetura',
          },
          {
            id: 5,
            name: 'Analise',
          },
          {
            id: 6,
            name: 'Back-end',
          },
        ],
        status: StatusEnum.OFFLINE,
        workedIn: 120,
        hiredIn: 16,
        registeredSince: moment('20210418', 'YYYYMMDD').format('L'),
        lastAccess: moment().startOf('day').add(6, 'hours').fromNow(),
      },
      {
        id: 7,
        name: 'Paulo Silas',
        role: 'Desenvolvedor Backend',
        rating: RatingEnum.FIVE,
        photo: 'https://portalrapmais.com/wp-content/uploads/2020/07/sidoka.jpeg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum?',
        habilities: [
          {
            id: 1,
            name: HabilityEnum.HTML,
          },
          {
            id: 2,
            name: HabilityEnum.CSS,
          },
          {
            id: 3,
            name: HabilityEnum.Javascript,
          },
          {
            id: 4,
            name: 'Git',
          },
          {
            id: 5,
            name: 'GitHub',
          },
          {
            id: 6,
            name: 'Python',
          },
          {
            id: 7,
            name: 'Java',
          },
          {
            id: 8,
            name: 'Spring boot',
          },
        ],
        status: StatusEnum.ONLINE,
        workedIn: 3,
        hiredIn: 1,
        registeredSince: moment('20210216', 'YYYYMMDD').format('L'),
        lastAccess: moment().endOf('hour').add(1, 'hours').fromNow(),
      },
      {
        id: 8,
        name: 'Derick Cardoso',
        role: 'Desenvolvedor Fullstack',
        rating: RatingEnum.FIVE,
        photo: 'https://i.pinimg.com/564x/f7/f2/a9/f7f2a9726a29b3f2666ef6664bb9e024.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem, itaque, perspiciatis corporis veniam quaerat dolor sunt maxime velit iusto quam earum ea, laudantium impedit animi adipisci ipsum voluptatem eum?',
        habilities: [
          {
            id: 1,
            name: HabilityEnum.HTML,
          },
          {
            id: 2,
            name: HabilityEnum.CSS,
          },
          {
            id: 3,
            name: HabilityEnum.Javascript,
          },
          {
            id: 4,
            name: 'React.js',
          },
          {
            id: 5,
            name: 'Bootstrap',
          },
          {
            id: 6,
            name: 'Node.js',
          },
          {
            id: 7,
            name: 'Express.js',
          },
          {
            id: 8,
            name: 'Git',
          },
          {
            id: 9,
            name: 'GitHub',
          },
          {
            id: 10,
            name: 'Python',
          },
          {
            id: 11,
            name: 'Typescript',
          },
          {
            id: 12,
            name: 'Watson Assistant',
          },
          {
            id: 13,
            name: 'Take Blip',
          },
        ],
        status: StatusEnum.ONLINE,
        workedIn: 23,
        hiredIn: 0,
        registeredSince: moment('20220101', 'YYYYMMDD').format('L'),
        lastAccess: moment().startOf('hour').fromNow(),
      },
    ];
  }

  projectsList(): ProjectModel[] {
    return <ProjectModel[]>[
      {
        id: 1,
        name: 'Site p/ petshop',
        published: moment().startOf('day').fromNow(),
        deliveryTime: moment('20220325', 'YYYYMMDD').format('L'),
        proposals: 10,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta quibusdam perferendis et, minus, odio option animi praesentium explicabo expedita officiis sed nihil exercitationem labore, excepturi deserunt quam natus quas. Neque autem veritatis quam natus quo temporibus, obcaecati doloribus maxime unde animi. Temporibus quod blanditiis nobis repellat incidunt laudantium fuga maxime velit illum nam, modi, iste dolor et corporis. Quam?',
        habilities: [
          {
            id: 1,
            name: HabilityEnum.HTML,
          },
          {
            id: 2,
            name: HabilityEnum.CSS,
          },
          {
            id: 3,
            name: HabilityEnum.Javascript,
          },
        ],
        category: CategoryEnum.VirtualStores,
        availability: 'Meio período',
        need: 'Um site',
        have: 'Wireframe, banco de dados e api',
      },
    ];
  }
}

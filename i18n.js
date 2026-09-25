/**
 * Español, inglés y portugués para ICOM-Health&FOOD.
 *
 * La web se diseñó en español. En lugar de rehacerla, este archivo traduce los textos ya escritos:
 * busca cada frase en español y la sustituye por su versión en el idioma elegido. El selector queda
 * en la barra superior y la elección se recuerda en el navegador.
 *
 * Los nombres de las personas y sus cargos y centros se quedan siempre en español, como es costumbre
 * en los congresos académicos. Para añadir o corregir una traducción basta con editar este archivo:
 * la clave es la frase en español, tal cual aparece en la web.
 */
(function () {
  "use strict";

  var DICT = {
    en: {
      // Navegación y portada
      "El congreso": "The conference",
      "Líneas temáticas": "Thematic lines",
      "Cómo participar": "How to take part",
      "Fechas": "Dates",
      "Publicaciones": "Publications",
      "Organización": "Organisation",
      "Sede": "Venue",
      "Inscríbete": "Register",
      "Congreso académico": "Academic conference",
      "I edición · 2027": "1st edition · 2027",
      "I Congreso Internacional de Comunicación y Educación para una": "1st International Conference on Communication and Education for",
      "Alimentación Saludable": "Healthy Eating",
      "Buenas prácticas en divulgación para una alimentación saludable.": "Good practice in outreach for healthy eating.",
      "Presencial": "On site",
      "10–12 mar 2027": "10–12 Mar 2027",
      "Pre-Congreso virtual": "Online Pre-Conference",
      "9 mar 2027": "9 Mar 2027",
      "Facultad de Farmacia · Univ. de Granada": "Faculty of Pharmacy · Univ. of Granada",
      "Quiero participar": "I want to take part",
      "Enviar abstract": "Submit an abstract",

      // Presentación
      "01 · Presentación": "01 · About",
      "Un espacio de encuentro entre comunicación, nutrición, salud pública y educación.": "A meeting point for communication, nutrition, public health and education.",
      "El I Congreso Internacional de Comunicación y Alimentación Saludable (ICOM-Health&FOOD) nace para crear un espacio interdisciplinar. Bajo el lema": "The 1st International Conference on Communication and Healthy Eating (ICOM-Health&FOOD) sets out to create an interdisciplinary space. Under the motto",
      "“Buenas prácticas en divulgación para una alimentación saludable”": "“Good practice in outreach for healthy eating”",
      ", aborda la necesidad de fomentar una cultura alimentaria informada, crítica y saludable, apoyada en una comunicación ética, científica y socialmente responsable.": ", it addresses the need to foster an informed, critical and healthy food culture, supported by ethical, scientific and socially responsible communication.",
      "En un contexto de sobreabundancia informativa, desinformación e influencia de los discursos publicitarios y digitales sobre los hábitos de consumo, integrar comunicación y educación es fundamental para construir una sociedad con hábitos alimentarios más sanos y conscientes.": "Amid information overload, disinformation and the influence of advertising and digital discourse on consumption habits, bringing communication and education together is essential to build a society with healthier, more conscious eating habits.",
      "ICOM-Health&FOOD conecta a los especialistas en nutrición con los agentes de la educación formal e informal —centros educativos y medios de comunicación—. Desde las Universidades de Granada y Sevilla proponemos una iniciativa para transferir a la ciudadanía el conocimiento basado en el rigor científico.": "ICOM-Health&FOOD connects nutrition specialists with those who educate, formally and informally: schools and the media. From the Universities of Granada and Seville we propose an initiative to bring scientifically rigorous knowledge to the public.",
      "Con difusión internacional y ponentes destacados de la nutrición, la comunicación y las instituciones sanitarias, el objetivo es transferir conocimiento para combatir la desinformación y contribuir a una ciudadanía crítica.": "With international outreach and leading speakers from nutrition, communication and health institutions, the aim is to transfer knowledge to counter disinformation and foster a critical citizenry.",

      // Objetivos
      "02 · Objetivos": "02 · Objectives",
      "Cinco objetivos para una divulgación responsable": "Five objectives for responsible outreach",
      "Promover la comunicación responsable en alimentación": "Promote responsible food communication",
      "Basada en la evidencia científica y en el respeto a la diversidad cultural y social de los hábitos alimentarios.": "Grounded in scientific evidence and in respect for the cultural and social diversity of eating habits.",
      "Fortalecer el papel de comunicadores y profesionales de la salud": "Strengthen the role of communicators and health professionals",
      "En la alfabetización nutricional y alimentaria de la ciudadanía.": "In the public's nutritional and food literacy.",
      "Impulsar la transferencia de conocimiento científico": "Drive the transfer of scientific knowledge",
      "Desde los grupos de investigación en alimentación, nutrición y salud hacia los medios, las instituciones y el entorno educativo.": "From research groups in food, nutrition and health to the media, institutions and education.",
      "Fomentar la cooperación interdisciplinar": "Encourage interdisciplinary cooperation",
      "Entre investigadores, comunicadores, dietistas-nutricionistas, tecnólogos de alimentos, docentes y entidades públicas o privadas del sector agroalimentario.": "Between researchers, communicators, dietitians and nutritionists, food technologists, teachers and public or private bodies in the agri-food sector.",
      "Reflexionar sobre el papel ético y social": "Reflect on the ethical and social role",
      "De la comunicación en la construcción de entornos alimentarios sostenibles y equitativos.": "Of communication in building sustainable and equitable food environments.",

      // Líneas temáticas
      "03 · Líneas temáticas": "03 · Thematic lines",
      "Cuatro ejes de trabajo": "Four areas of work",
      "LÍNEA": "LINE",
      "Comunicación científica y divulgación en nutrición y alimentación": "Science communication and outreach in nutrition and food",
      "Estrategias para mejorar la transferencia del conocimiento.": "Strategies to improve knowledge transfer.",
      "Uso de los medios y redes sociales para la divulgación científica responsable.": "Using media and social networks for responsible science communication.",
      "El papel de los influencers y microinfluencers en la educación alimentaria.": "The role of influencers and micro-influencers in food education.",
      "Educación, salud y ciudadanía": "Education, health and citizenship",
      "Alfabetización mediática y alimentaria en entornos educativos.": "Media and food literacy in education.",
      "La formación del profesorado en competencias de comunicación y salud.": "Teacher training in communication and health skills.",
      "Programas educativos y comunitarios para la promoción de hábitos saludables.": "Educational and community programmes promoting healthy habits.",
      "Ética, desinformación y sostenibilidad": "Ethics, disinformation and sustainability",
      "Fake news, pseudociencia y responsabilidad profesional.": "Fake news, pseudoscience and professional responsibility.",
      "Regulación, autorregulación y códigos deontológicos en comunicación alimentaria.": "Regulation, self-regulation and codes of ethics in food communication.",
      "Alimentación sostenible, seguridad alimentaria y justicia social.": "Sustainable food, food safety and social justice.",
      "Innovación y transferencia en nutrición y comunicación": "Innovation and knowledge transfer in nutrition and communication",
      "Proyectos de investigación y transferencia en comunicación alimentaria.": "Research and knowledge-transfer projects in food communication.",
      "Herramientas digitales para la promoción de la salud.": "Digital tools for health promotion.",
      "Ciencia ciudadana en nutrición y ciencias de la alimentación.": "Citizen science in nutrition and food sciences.",
      "Colaboraciones universidad-empresa para buenas prácticas de publicidad en alimentación.": "University-industry collaboration on good practice in food advertising.",

      // Investigación
      "04 · Investigación": "04 · Research",
      "Aportaciones de los investigadores al congreso": "What researchers bring to the conference",
      "El papel de los investigadores en nutrición y ciencias de los alimentos es clave para aportar rigor al enfoque interdisciplinar de ICOM-FOOD.": "Researchers in nutrition and food science are key to bringing rigour to the interdisciplinary approach of ICOM-FOOD.",
      "ICOM-Health&FOOD se compromete con la integridad científica, el rigor metodológico y la ética en la comunicación, para que la información sobre alimentación sea una herramienta de empoderamiento ciudadano y no de confusión o consumo indiscriminado.": "ICOM-Health&FOOD is committed to scientific integrity, methodological rigour and ethics in communication, so that information about food empowers people rather than confusing them or driving indiscriminate consumption.",
      "Trasladar los resultados de la investigación científica a un lenguaje comprensible para la ciudadanía.": "Translating research findings into language the public can understand.",
      "Evaluar la calidad y veracidad de los mensajes que circulan en medios y redes, contribuyendo a combatir la desinformación.": "Assessing the quality and accuracy of messages circulating in the media and online, helping to counter disinformation.",
      "Asesorar a comunicadores y periodistas en el tratamiento responsable de la información sobre dietas, suplementos, superalimentos o modas alimentarias.": "Advising communicators and journalists on the responsible treatment of information about diets, supplements, superfoods and food fads.",
      "Diseñar herramientas de divulgación basadas en la evidencia: guías, infografías, vídeos o materiales didácticos adaptados a diferentes públicos.": "Designing evidence-based outreach tools: guides, infographics, videos and teaching materials tailored to different audiences.",
      "Contribuir a la formación de nuevas generaciones de comunicadores científicos, fomentando la colaboración universidad-medios.": "Helping to train new generations of science communicators, fostering collaboration between universities and the media.",

      // Cómo participar
      "05 · Cómo participar": "05 · How to take part",
      "Modalidad académica": "Academic participation",
      "Envío de abstract →": "Submit an abstract →",
      "Inscripción presencial": "On-site registration",
      "Hasta 2 comunicaciones": "Up to 2 papers",
      "Máximo 5 autores por comunicación": "Maximum 5 authors per paper",
      "Al menos un autor inscrito en modalidad presencial": "At least one author registered for on-site attendance",
      "Online · 9 de marzo": "Online · 9 March",
      "Pre-Congreso Virtual": "Online Pre-Conference",
      "100% virtual": "Fully online",
      "Curso 2026/2027": "2026/2027 academic year",
      "Estudiantes de Grado y Posgrado": "Undergraduate and postgraduate students",
      "1 comunicación como máximo": "One paper maximum",
      "Opcional": "Optional",
      "Modalidad Networking": "Networking option",
      "Incluye una cena social de trabajo": "Includes a social working dinner",
      "Se añade a cualquier modalidad de inscripción": "Can be added to any registration type",

      // Calendario
      "06 · Calendario": "06 · Calendar",
      "Fechas clave": "Key dates",
      "Febrero 2027": "February 2027",
      "Fecha límite para presentar tu propuesta": "Deadline to submit your proposal",
      "Comunicación del resultado de la propuesta": "Notification of the decision",
      "Fecha límite para formalizar la inscripción": "Deadline to complete registration",
      "Envío de textos completos para su posible publicación": "Submission of full texts for possible publication",
      "Marzo 2027": "March 2027",
      "Programa definitivo del congreso académico": "Final conference programme",
      "Celebración del congreso en Granada": "The conference takes place in Granada",

      // Publicaciones
      "07 · Publicaciones y resultados": "07 · Publications and outcomes",
      "Tu trabajo, publicado en revistas indexadas": "Your work, published in indexed journals",
      "Publicará los resúmenes de las comunicaciones aceptadas. Los autores podrán remitir los textos completos para su posible publicación, previa revisión por pares ciego.": "Will publish the abstracts of accepted papers. Authors may submit full texts for possible publication, subject to blind peer review.",
      "Monográfico · junio 2027": "Special issue · June 2027",
      "Número monográfico con una selección de trabajos presentados en el congreso.": "Special issue with a selection of papers presented at the conference.",
      "Primavera 2027": "Spring 2027",
      "Indexada en Crossref, Dialnet, ERIH PLUS, WorldCat, Lens, Scilit, OpenAlex, ZDB, vAccessON, Jisc y Dulcinea, entre otras.": "Indexed in Crossref, Dialnet, ERIH PLUS, WorldCat, Lens, Scilit, OpenAlex, ZDB, vAccessON, Jisc and Dulcinea, among others.",
      "La organización prevé seleccionar trabajos completos, sometidos a evaluación por pares, y valorará un volumen monográfico en una editorial de prestigio.": "The organisers plan to select full papers, subject to peer review, and will consider a monograph with a leading publisher.",

      // Equipo y sede
      "08 · El equipo": "08 · The team",
      "Organigrama": "Who's who",
      "Más de 55 investigadores y profesionales de universidades e instituciones de España, Latinoamérica y Estados Unidos.": "More than 55 researchers and professionals from universities and institutions in Spain, Latin America and the United States.",
      "Comité Organizador": "Organising Committee",
      "Comité Científico ·": "Scientific Committee ·",
      "Comité Técnico ·": "Technical Committee ·",
      "Entidades organizadoras": "Organising bodies",
      "Entidades patrocinadoras": "Sponsors",
      "09 · Sede": "09 · Venue",
      "Facultad de Farmacia, Universidad de Granada": "Faculty of Pharmacy, University of Granada",
      "Campus Universitario de Cartuja": "Cartuja University Campus",
      "CP 18071 Granada (Granada)": "18071 Granada, Spain",
      "Cómo llegar": "Getting there",
      "Ver agenda": "See the programme",

      // Pie
      "I Congreso Internacional de Comunicación y Alimentación Saludable. ICOM-Health&FOOD": "1st International Conference on Communication and Healthy Eating. ICOM-Health&FOOD",
      "ICOMFOOD es un congreso sectorial del Portal iberoamericano de la Transferencia Intracom.": "ICOMFOOD is a sectoral conference of the Ibero-American Knowledge Transfer Portal, Intracom.",
      "Ir al portal →": "Go to the portal →",
      "Menú": "Menu",
      "Presentación": "About",
      "Contacto": "Contact",
      "Secretaría Científica": "Scientific Secretariat",
      "Secretaría Técnica": "Technical Secretariat",
      "© 2025. Todos los derechos reservados": "© 2025. All rights reserved",
      "Política de privacidad": "Privacy policy",
      "Política de cookies": "Cookie policy",
      "Buscar por nombre o institución…": "Search by name or institution…",
    },

    pt: {
      // Navegação e capa
      "El congreso": "O congresso",
      "Líneas temáticas": "Linhas temáticas",
      "Cómo participar": "Como participar",
      "Fechas": "Datas",
      "Publicaciones": "Publicações",
      "Organización": "Organização",
      "Sede": "Local",
      "Inscríbete": "Inscreva-se",
      "Congreso académico": "Congresso académico",
      "I edición · 2027": "I edição · 2027",
      "I Congreso Internacional de Comunicación y Educación para una": "I Congresso Internacional de Comunicação e Educação para uma",
      "Alimentación Saludable": "Alimentação Saudável",
      "Buenas prácticas en divulgación para una alimentación saludable.": "Boas práticas em divulgação para uma alimentação saudável.",
      "Presencial": "Presencial",
      "10–12 mar 2027": "10–12 mar. 2027",
      "Pre-Congreso virtual": "Pré-Congresso virtual",
      "9 mar 2027": "9 mar. 2027",
      "Facultad de Farmacia · Univ. de Granada": "Faculdade de Farmácia · Univ. de Granada",
      "Quiero participar": "Quero participar",
      "Enviar abstract": "Enviar resumo",

      // Apresentação
      "01 · Presentación": "01 · Apresentação",
      "Un espacio de encuentro entre comunicación, nutrición, salud pública y educación.": "Um espaço de encontro entre comunicação, nutrição, saúde pública e educação.",
      "El I Congreso Internacional de Comunicación y Alimentación Saludable (ICOM-Health&FOOD) nace para crear un espacio interdisciplinar. Bajo el lema": "O I Congresso Internacional de Comunicação e Alimentação Saudável (ICOM-Health&FOOD) nasce para criar um espaço interdisciplinar. Sob o lema",
      "“Buenas prácticas en divulgación para una alimentación saludable”": "“Boas práticas em divulgação para uma alimentação saudável”",
      ", aborda la necesidad de fomentar una cultura alimentaria informada, crítica y saludable, apoyada en una comunicación ética, científica y socialmente responsable.": ", aborda a necessidade de promover uma cultura alimentar informada, crítica e saudável, apoiada numa comunicação ética, científica e socialmente responsável.",
      "En un contexto de sobreabundancia informativa, desinformación e influencia de los discursos publicitarios y digitales sobre los hábitos de consumo, integrar comunicación y educación es fundamental para construir una sociedad con hábitos alimentarios más sanos y conscientes.": "Num contexto de excesso de informação, desinformação e influência dos discursos publicitários e digitais sobre os hábitos de consumo, integrar comunicação e educação é fundamental para construir uma sociedade com hábitos alimentares mais saudáveis e conscientes.",
      "ICOM-Health&FOOD conecta a los especialistas en nutrición con los agentes de la educación formal e informal —centros educativos y medios de comunicación—. Desde las Universidades de Granada y Sevilla proponemos una iniciativa para transferir a la ciudadanía el conocimiento basado en el rigor científico.": "O ICOM-Health&FOOD liga os especialistas em nutrição aos agentes da educação formal e informal — escolas e meios de comunicação. A partir das Universidades de Granada e Sevilha propomos uma iniciativa para transferir à população o conhecimento baseado no rigor científico.",
      "Con difusión internacional y ponentes destacados de la nutrición, la comunicación y las instituciones sanitarias, el objetivo es transferir conocimiento para combatir la desinformación y contribuir a una ciudadanía crítica.": "Com divulgação internacional e oradores destacados da nutrição, da comunicação e das instituições de saúde, o objetivo é transferir conhecimento para combater a desinformação e contribuir para uma cidadania crítica.",

      // Objetivos
      "02 · Objetivos": "02 · Objetivos",
      "Cinco objetivos para una divulgación responsable": "Cinco objetivos para uma divulgação responsável",
      "Promover la comunicación responsable en alimentación": "Promover a comunicação responsável em alimentação",
      "Basada en la evidencia científica y en el respeto a la diversidad cultural y social de los hábitos alimentarios.": "Baseada na evidência científica e no respeito pela diversidade cultural e social dos hábitos alimentares.",
      "Fortalecer el papel de comunicadores y profesionales de la salud": "Reforçar o papel dos comunicadores e profissionais de saúde",
      "En la alfabetización nutricional y alimentaria de la ciudadanía.": "Na literacia nutricional e alimentar da população.",
      "Impulsar la transferencia de conocimiento científico": "Impulsionar a transferência do conhecimento científico",
      "Desde los grupos de investigación en alimentación, nutrición y salud hacia los medios, las instituciones y el entorno educativo.": "Dos grupos de investigação em alimentação, nutrição e saúde para os media, as instituições e o meio educativo.",
      "Fomentar la cooperación interdisciplinar": "Fomentar a cooperação interdisciplinar",
      "Entre investigadores, comunicadores, dietistas-nutricionistas, tecnólogos de alimentos, docentes y entidades públicas o privadas del sector agroalimentario.": "Entre investigadores, comunicadores, dietistas-nutricionistas, tecnólogos alimentares, docentes e entidades públicas ou privadas do setor agroalimentar.",
      "Reflexionar sobre el papel ético y social": "Refletir sobre o papel ético e social",
      "De la comunicación en la construcción de entornos alimentarios sostenibles y equitativos.": "Da comunicação na construção de ambientes alimentares sustentáveis e equitativos.",

      // Linhas temáticas
      "03 · Líneas temáticas": "03 · Linhas temáticas",
      "Cuatro ejes de trabajo": "Quatro eixos de trabalho",
      "LÍNEA": "LINHA",
      "Comunicación científica y divulgación en nutrición y alimentación": "Comunicação científica e divulgação em nutrição e alimentação",
      "Estrategias para mejorar la transferencia del conocimiento.": "Estratégias para melhorar a transferência do conhecimento.",
      "Uso de los medios y redes sociales para la divulgación científica responsable.": "Uso dos media e das redes sociais para a divulgação científica responsável.",
      "El papel de los influencers y microinfluencers en la educación alimentaria.": "O papel dos influenciadores e microinfluenciadores na educação alimentar.",
      "Educación, salud y ciudadanía": "Educação, saúde e cidadania",
      "Alfabetización mediática y alimentaria en entornos educativos.": "Literacia mediática e alimentar em contextos educativos.",
      "La formación del profesorado en competencias de comunicación y salud.": "A formação de professores em competências de comunicação e saúde.",
      "Programas educativos y comunitarios para la promoción de hábitos saludables.": "Programas educativos e comunitários para a promoção de hábitos saudáveis.",
      "Ética, desinformación y sostenibilidad": "Ética, desinformação e sustentabilidade",
      "Fake news, pseudociencia y responsabilidad profesional.": "Fake news, pseudociência e responsabilidade profissional.",
      "Regulación, autorregulación y códigos deontológicos en comunicación alimentaria.": "Regulação, autorregulação e códigos deontológicos na comunicação alimentar.",
      "Alimentación sostenible, seguridad alimentaria y justicia social.": "Alimentação sustentável, segurança alimentar e justiça social.",
      "Innovación y transferencia en nutrición y comunicación": "Inovação e transferência em nutrição e comunicação",
      "Proyectos de investigación y transferencia en comunicación alimentaria.": "Projetos de investigação e transferência em comunicação alimentar.",
      "Herramientas digitales para la promoción de la salud.": "Ferramentas digitais para a promoção da saúde.",
      "Ciencia ciudadana en nutrición y ciencias de la alimentación.": "Ciência cidadã em nutrição e ciências da alimentação.",
      "Colaboraciones universidad-empresa para buenas prácticas de publicidad en alimentación.": "Colaborações universidade-empresa para boas práticas de publicidade alimentar.",

      // Investigação
      "04 · Investigación": "04 · Investigação",
      "Aportaciones de los investigadores al congreso": "O contributo dos investigadores para o congresso",
      "El papel de los investigadores en nutrición y ciencias de los alimentos es clave para aportar rigor al enfoque interdisciplinar de ICOM-FOOD.": "O papel dos investigadores em nutrição e ciências dos alimentos é decisivo para dar rigor à abordagem interdisciplinar do ICOM-FOOD.",
      "ICOM-Health&FOOD se compromete con la integridad científica, el rigor metodológico y la ética en la comunicación, para que la información sobre alimentación sea una herramienta de empoderamiento ciudadano y no de confusión o consumo indiscriminado.": "O ICOM-Health&FOOD assume um compromisso com a integridade científica, o rigor metodológico e a ética na comunicação, para que a informação sobre alimentação seja uma ferramenta de capacitação das pessoas e não de confusão ou consumo indiscriminado.",
      "Trasladar los resultados de la investigación científica a un lenguaje comprensible para la ciudadanía.": "Traduzir os resultados da investigação científica para uma linguagem compreensível para todos.",
      "Evaluar la calidad y veracidad de los mensajes que circulan en medios y redes, contribuyendo a combatir la desinformación.": "Avaliar a qualidade e a veracidade das mensagens que circulam nos media e nas redes, ajudando a combater a desinformação.",
      "Asesorar a comunicadores y periodistas en el tratamiento responsable de la información sobre dietas, suplementos, superalimentos o modas alimentarias.": "Aconselhar comunicadores e jornalistas no tratamento responsável da informação sobre dietas, suplementos, superalimentos ou modas alimentares.",
      "Diseñar herramientas de divulgación basadas en la evidencia: guías, infografías, vídeos o materiales didácticos adaptados a diferentes públicos.": "Criar ferramentas de divulgação baseadas na evidência: guias, infografias, vídeos ou materiais didáticos adaptados a diferentes públicos.",
      "Contribuir a la formación de nuevas generaciones de comunicadores científicos, fomentando la colaboración universidad-medios.": "Contribuir para a formação de novas gerações de comunicadores de ciência, fomentando a colaboração entre universidade e media.",

      // Como participar
      "05 · Cómo participar": "05 · Como participar",
      "Modalidad académica": "Modalidade académica",
      "Envío de abstract →": "Envio de resumo →",
      "Inscripción presencial": "Inscrição presencial",
      "Hasta 2 comunicaciones": "Até 2 comunicações",
      "Máximo 5 autores por comunicación": "Máximo de 5 autores por comunicação",
      "Al menos un autor inscrito en modalidad presencial": "Pelo menos um autor inscrito na modalidade presencial",
      "Online · 9 de marzo": "Online · 9 de março",
      "Pre-Congreso Virtual": "Pré-Congresso Virtual",
      "100% virtual": "100% virtual",
      "Curso 2026/2027": "Ano letivo 2026/2027",
      "Estudiantes de Grado y Posgrado": "Estudantes de licenciatura e pós-graduação",
      "1 comunicación como máximo": "Uma comunicação, no máximo",
      "Opcional": "Opcional",
      "Modalidad Networking": "Modalidade Networking",
      "Incluye una cena social de trabajo": "Inclui um jantar social de trabalho",
      "Se añade a cualquier modalidad de inscripción": "Acrescenta-se a qualquer modalidade de inscrição",

      // Calendário
      "06 · Calendario": "06 · Calendário",
      "Fechas clave": "Datas importantes",
      "Febrero 2027": "Fevereiro de 2027",
      "Fecha límite para presentar tu propuesta": "Prazo para apresentar a sua proposta",
      "Comunicación del resultado de la propuesta": "Comunicação do resultado da proposta",
      "Fecha límite para formalizar la inscripción": "Prazo para formalizar a inscrição",
      "Envío de textos completos para su posible publicación": "Envio dos textos completos para eventual publicação",
      "Marzo 2027": "Março de 2027",
      "Programa definitivo del congreso académico": "Programa definitivo do congresso académico",
      "Celebración del congreso en Granada": "Realização do congresso em Granada",

      // Publicações
      "07 · Publicaciones y resultados": "07 · Publicações e resultados",
      "Tu trabajo, publicado en revistas indexadas": "O seu trabalho, publicado em revistas indexadas",
      "Publicará los resúmenes de las comunicaciones aceptadas. Los autores podrán remitir los textos completos para su posible publicación, previa revisión por pares ciego.": "Publicará os resumos das comunicações aceites. Os autores poderão enviar os textos completos para eventual publicação, após revisão por pares cega.",
      "Monográfico · junio 2027": "Número temático · junho de 2027",
      "Número monográfico con una selección de trabajos presentados en el congreso.": "Número temático com uma seleção de trabalhos apresentados no congresso.",
      "Primavera 2027": "Primavera de 2027",
      "Indexada en Crossref, Dialnet, ERIH PLUS, WorldCat, Lens, Scilit, OpenAlex, ZDB, vAccessON, Jisc y Dulcinea, entre otras.": "Indexada na Crossref, Dialnet, ERIH PLUS, WorldCat, Lens, Scilit, OpenAlex, ZDB, vAccessON, Jisc e Dulcinea, entre outras.",
      "La organización prevé seleccionar trabajos completos, sometidos a evaluación por pares, y valorará un volumen monográfico en una editorial de prestigio.": "A organização prevê selecionar trabalhos completos, submetidos a avaliação por pares, e ponderará um volume temático numa editora de prestígio.",

      // Equipa e local
      "08 · El equipo": "08 · A equipa",
      "Organigrama": "Organograma",
      "Más de 55 investigadores y profesionales de universidades e instituciones de España, Latinoamérica y Estados Unidos.": "Mais de 55 investigadores e profissionais de universidades e instituições de Espanha, América Latina e Estados Unidos.",
      "Comité Organizador": "Comissão Organizadora",
      "Comité Científico ·": "Comissão Científica ·",
      "Comité Técnico ·": "Comissão Técnica ·",
      "Entidades organizadoras": "Entidades organizadoras",
      "Entidades patrocinadoras": "Entidades patrocinadoras",
      "09 · Sede": "09 · Local",
      "Facultad de Farmacia, Universidad de Granada": "Faculdade de Farmácia, Universidade de Granada",
      "Campus Universitario de Cartuja": "Campus Universitário de Cartuja",
      "CP 18071 Granada (Granada)": "18071 Granada, Espanha",
      "Cómo llegar": "Como chegar",
      "Ver agenda": "Ver programa",

      // Rodapé
      "I Congreso Internacional de Comunicación y Alimentación Saludable. ICOM-Health&FOOD": "I Congresso Internacional de Comunicação e Alimentação Saudável. ICOM-Health&FOOD",
      "ICOMFOOD es un congreso sectorial del Portal iberoamericano de la Transferencia Intracom.": "O ICOMFOOD é um congresso setorial do Portal Ibero-Americano da Transferência Intracom.",
      "Ir al portal →": "Ir para o portal →",
      "Menú": "Menu",
      "Presentación": "Apresentação",
      "Contacto": "Contacto",
      "Secretaría Científica": "Secretariado Científico",
      "Secretaría Técnica": "Secretariado Técnico",
      "© 2025. Todos los derechos reservados": "© 2025. Todos os direitos reservados",
      "Política de privacidad": "Política de privacidade",
      "Política de cookies": "Política de cookies",
      "Buscar por nombre o institución…": "Procurar por nome ou instituição…",
    },
  };

  var TITLES = {
    es: "I Congreso Internacional de Comunicación y Educación para una Alimentación Saludable · ICOM-Health&FOOD 2027",
    en: "1st International Conference on Communication and Education for Healthy Eating · ICOM-Health&FOOD 2027",
    pt: "I Congresso Internacional de Comunicação e Educação para uma Alimentação Saudável · ICOM-Health&FOOD 2027",
  };

  var LANGS = ["es", "en", "pt"];
  var lang = "es";
  try {
    var guardado = localStorage.getItem("icomfood_lang");
    if (guardado && LANGS.indexOf(guardado) >= 0) lang = guardado;
  } catch (e) {}

  /** Texto original en español de cada nodo, para poder volver atrás o cambiar de idioma. */
  var ORIG = new WeakMap();

  function traducirNodo(nodo, dict) {
    var base = ORIG.get(nodo);
    if (base === undefined) {
      base = nodo.textContent;
      ORIG.set(nodo, base);
    }
    var clave = base.trim();
    if (!clave) return;
    var t = dict ? dict[clave] : null;
    var nuevo = t ? base.replace(clave, t) : base;
    if (nodo.textContent !== nuevo) nodo.textContent = nuevo;
  }

  function traducirAtributo(el, attr, dict) {
    var clave = el.getAttribute("data-es-" + attr);
    if (clave === null) {
      clave = el.getAttribute(attr) || "";
      el.setAttribute("data-es-" + attr, clave);
    }
    if (!clave.trim()) return;
    var t = dict ? dict[clave.trim()] : null;
    el.setAttribute(attr, t || clave);
  }

  var aplicando = false;
  function aplicar() {
    if (aplicando) return;
    aplicando = true;
    var dict = DICT[lang] || null;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = walker.nextNode())) {
      var padre = n.parentElement;
      if (!padre || padre.tagName === "SCRIPT" || padre.tagName === "STYLE" || padre.closest("[data-i18n-switch]")) continue;
      traducirNodo(n, dict);
    }
    document.querySelectorAll("[placeholder]").forEach(function (el) {
      traducirAtributo(el, "placeholder", dict);
    });
    document.documentElement.setAttribute("lang", lang);
    if (TITLES[lang]) document.title = TITLES[lang];
    document.querySelectorAll("[data-i18n-switch] button").forEach(function (b) {
      var activo = b.getAttribute("data-lang") === lang;
      b.style.background = activo ? "#1C7C36" : "transparent";
      b.style.color = activo ? "#fff" : "currentColor";
      b.setAttribute("aria-pressed", activo ? "true" : "false");
    });
    aplicando = false;
  }

  function cambiar(l) {
    lang = l;
    try {
      localStorage.setItem("icomfood_lang", l);
    } catch (e) {}
    aplicar();
  }

  /** Selector de idioma, flotante para no depender de la maquetación del diseño. */
  function crearSelector() {
    if (document.querySelector("[data-i18n-switch]")) return;
    var caja = document.createElement("div");
    caja.setAttribute("data-i18n-switch", "");
    caja.style.cssText =
      "position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;gap:2px;padding:4px;border-radius:999px;background:#fff;box-shadow:0 6px 24px rgba(0,0,0,.18);font-family:inherit";
    LANGS.forEach(function (l) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = l.toUpperCase();
      b.setAttribute("data-lang", l);
      b.setAttribute("aria-label", l.toUpperCase());
      b.style.cssText =
        "border:0;border-radius:999px;padding:7px 13px;font-size:12.5px;font-weight:700;letter-spacing:.04em;cursor:pointer;color:#12261B;background:transparent";
      b.addEventListener("click", function () {
        cambiar(l);
      });
      caja.appendChild(b);
    });
    document.body.appendChild(caja);
  }

  function arrancar() {
    crearSelector();
    aplicar();
    // El diseño vuelve a dibujar partes de la página: se traduce de nuevo lo que aparezca
    var pendiente = null;
    new MutationObserver(function () {
      clearTimeout(pendiente);
      pendiente = setTimeout(aplicar, 60);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "complete" || document.readyState === "interactive") setTimeout(arrancar, 400);
  else document.addEventListener("DOMContentLoaded", function () {
    setTimeout(arrancar, 400);
  });
})();

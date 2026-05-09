const questionData = [
    { id: 1, tag: "pe", text: "As pessoas  não conseguiram satisfazer minhas necessidades emocionais." },
    { id: 2, tag: "pe", text: "Eu não recebi amor e atenção." },
    { id: 3, tag: "pe", text: "De um modo geral, não tenho ninguém para me dar conselhos e apoio emocional." },
    { id: 4, tag: "pe", text: "A maior parte do tempo, não tenho ninguém para me dar carinho, compartilhar comigo e se importar profundamente com o que me acontece." },
    { id: 5, tag: "pe", text: "Eu não tive ninguém que quisesse se aproximar e passar bastante tempo comigo em grande parte da minha vida." },
    { id: 6, tag: "pe", text: "Em geral, não havia pessoas para me dar carinho, segurança e afeição." },
    { id: 7, tag: "pe", text: "Eu não senti que era especial para alguém, em grande parte da minha vida." },
    { id: 8, tag: "pe", text: "Em geral, não tenho ninguém que realmente me escute, me compreenda ou esteja sintonizado com minhas verdadeiras necessidades e sentimentos." },
    { id: 9, tag: "pe", text: "Eu, raramente tenho alguma pessoa forte para me dar bons conselhos ou orientação quando não tenho certeza do que fazer." },
    { id: 10, tag: "ab", text: "Eu me preocupo com a possibilidade de as pessoas que eu amo morrerem, mesmo que haja poucas razões médicas para confirmar minhas preocupações." },
    { id: 11, tag: "ab", text: "Percebo que me agarro às pessoas com as quais tenho intimidade, por ter medo de que elas me deixem." },
    { id: 12, tag: "ab", text: "Eu me preocupo com a possibilidade das pessoas que gosto me deixarem ou me abandonarem." },
    { id: 13, tag: "ab", text: "Sinto que me falta uma base estável de apoio emocional." },
    { id: 14, tag: "ab", text: "Não espero que os relacionamentos importantes durem; acredito que eles vão terminar." },
    { id: 15, tag: "ab", text: "Sinto que me apego a parceiros/as que não são capazes de se comprometerem comigo." },
    { id: 16, tag: "ab", text: "No final, acabarei só." },
    { id: 17, tag: "ab", text: "Quando sinto que alguém com quem eu me importo está se afastando, fico desesperado." },
    { id: 18, tag: "ab", text: "Às vezes, tenho tanto medo de que as pessoas me deixem que acabo fazendo com que se afastem." },
    { id: 19, tag: "ab", text: "Fico incomodado quando alguém me deixa sozinho, mesmo que por pouco tempo." },
    { id: 20, tag: "ab", text: "Não posso esperar que as pessoas que me apóiam estejam sempre disponíveis." },
    { id: 21, tag: "ab", text: "Não devo ficar realmente íntimo das pessoas, porque não posso ter certeza de que poderei contar sempre com elas." },
    { id: 22, tag: "ab", text: "Parece que as pessoas importantes da minha vida estão sempre indo e vindo." },
    { id: 23, tag: "ab", text: "Tenho muito medo de que as pessoas que eu amo encontrem alguém que vão preferir e me deixem." },
    { id: 24, tag: "ab", text: "As pessoas que me são próximas têm sido muito imprevisíveis; ora são legais, ora estão zangadas, chateadas, absorvidas em si mesmas, brigando, e assim por diante." },
    { id: 25, tag: "ab", text: "Preciso tanto das pessoas que tenho medo de perdê-las." },
    { id: 26, tag: "ab", text: "Eu me sinto indefeso se não tiver pessoas para me proteger, às quais eu me preocupo muito em perdê-las." },
    { id: 27, tag: "da", text: "Não posso ser eu mesmo ou expressar o que realmente sinto, pois as pessoas me deixariam." },
    { id: 28, tag: "da", text: "Sinto que as pessoas querem tirar vantagem de mim." },
    { id: 29, tag: "da", text: "Frequentemente, sinto que tenho que me proteger dos outros." },
    { id: 30, tag: "da", text: "Sinto que não posso baixar a guarda na presença dos outros, pois eles me prejudicariam intencionalmente." },
    { id: 31, tag: "da", text: "Se uma pessoa é legal comigo, fico imaginando que ela está querendo alguma coisa." },
    { id: 32, tag: "da", text: "É só uma questão de tempo antes que as pessoas me traiam." },
    { id: 33, tag: "da", text: "A maioria das pessoas só pensa em si mesma." },
    { id: 34, tag: "da", text: "Tenho grande dificuldade em confiar nas pessoas." },
    { id: 35, tag: "da", text: "Desconfio muito dos motivos dos outros." },
    { id: 36, tag: "da", text: "As outras pessoas raramente são honestas; elas geralmente não são o que parecem." },
    { id: 37, tag: "da", text: "Eu geralmente fico procurando os motivos escondidos das pessoas." },
    { id: 38, tag: "da", text: "Se acho que alguém quer me prejudicar, tento prejudicá-la/o primeiro." },
    { id: 39, tag: "da", text: "As pessoas têm de provar coisas para mim antes que eu confie nelas." },
    { id: 40, tag: "da", text: "Invento “testes” para as pessoas para ver se elas estão me dizendo a verdade e se estão bem intencionadas." },
    { id: 41, tag: "da", text: "Acredito no ditado: “quem não controla é controlado”." },
    { id: 42, tag: "da", text: "Fico com raiva quando penso como fui maltratado pelas pessoas durante toda a minha vida." },
    { id: 43, tag: "da", text: "Por toda a minha vida, pessoas que me eram próximas tiraram vantagem de mim ou me usaram para seus propósitos." },
    { id: 44, tag: "ia", text: "Fui abusado fisicamente, emocionalmente ou sexualmente por pessoas importantes na minha vida." },
    { id: 45, tag: "ia", text: "Eu não me encaixo." },
    { id: 46, tag: "ia", text: "Sou fundamentalmente diferente das outras pessoas." },
    { id: 47, tag: "ia", text: "Eu não pertenço a ninguém; sou um solitário." },
    { id: 48, tag: "ia", text: "Sinto-me alienado das outras pessoas." },
    { id: 49, tag: "ia", text: "Eu me sinto isolado e sozinho." },
    { id: 50, tag: "ia", text: "Sempre me sinto excluída dos grupos." },
    { id: 51, tag: "ia", text: "Ninguém me entende realmente." },
    { id: 52, tag: "ia", text: "A minha família sempre foi diferente das famílias que nos cercavam." },
    { id: 53, tag: "dv", text: "Ás vezes, me sinto um alienígena." },
    { id: 54, tag: "dv", text: "Se eu desaparecesse amanhã, ninguém perceberia." },
    { id: 55, tag: "dv", text: "Nenhum/a  homem/mulher que eu desejar vai me amar depois de saber dos meus defeitos." },
    { id: 56, tag: "dv", text: "Ninguém que eu desejar vai querer ficar perto de mim depois que conhecer meu verdadeiro eu." },
    { id: 57, tag: "dv", text: "Sou inerentemente defeituoso e cheio de falhas." },
    { id: 58, tag: "dv", text: "Por mais que eu tente, sinto que não conseguirei que um/a homem/mulher significativo/a me respeite ou sinta que eu tenho valor." },
    { id: 59, tag: "dv", text: "Não sou digno do amor, da atenção e do respeito dos outros." },
    { id: 60, tag: "dv", text: "Sinto que não mereço ser amado." },
    { id: 61, tag: "dv", text: "Sou inaceitável demais, de todas as maneiras possíveis, para me revelar aos outros." },
    { id: 62, tag: "dv", text: "Se as pessoas descobrissem meus defeitos básicos, eu não conseguiria encará-las." },
    { id: 63, tag: "dv", text: "Quando as pessoas gostam de mim, sinto que as estou enganando." },
    { id: 64, tag: "dv", text: "Frequentemente, sou atraído por pessoas que são muito críticas ou me rejeitam." },
    { id: 65, tag: "dv", text: "Tenho segredos que eu não quero que as pessoas próximas a mim descubram." },
    { id: 66, tag: "dv", text: "Foi por minha culpa que meus pais não conseguiram me amar o suficiente." },
    { id: 67, tag: "dv", text: "Não deixo que as pessoas conheçam meu verdadeiro eu." },
    { id: 68, tag: "fr", text: "Um dos meus maiores medos é que meus defeitos sejam expostos." },
    { id: 69, tag: "fr", text: "Não posso compreender como ninguém conseguiu me amar." },
    { id: 70, tag: "fr", text: "Mesmo quando as coisas parecem estar indo bem, sinto que isto é apenas temporário" },
    { id: 71, tag: "fr", text: "Se algo de bom acontecer, fico preocupado(a) se algo de ruim não vai acontecer em seguida" },
    { id: 72, tag: "fr", text: "Todo cuidado é pouco; quase sempre alguma coisa vai mal" },
    { id: 73, tag: "fr", text: "Por mais que trabalhe, fico preocupado(a) com a possibilidade de ficar na miséria e perder quase tudo que possuo." },
    { id: 74, tag: "fr", text: "As pessoas que valorizo não iriam querer se associar a mim devido ao meu status social (por exemplo, renda, nível de instrução, profissão)." },
    { id: 75, tag: "fr", text: "Fica preocupado(a) com a possibilidade de uma decisão errada provocar uma catástrofe" },
    { id: 76, tag: "fr", text: "Quase nada do que eu faço no trabalho (ou na escola) é tão bom quanto o que os outros fazem." },
    { id: 77, tag: "di", text: "Sou incompetente no que se refere às realizações." },
    { id: 78, tag: "di", text: "A maioria das pessoas é mais capaz do que eu no trabalho e em suas realizações." },
    { id: 80, tag: "di", text: "Eu sou um fracasso." },
    { id: 81, tag: "di", text: "Não tenho tanto talento quanto a maioria das pessoas tem em sua profissão." },
    { id: 82, tag: "di", text: "Não sou tão inteligente quanto a maioria das pessoas no que se refere a trabalho (ou estudo)." },
    { id: 83, tag: "di", text: "Sinto-me humilhado  por meus fracassos e inadequações na esfera do trabalho." },
    { id: 84, tag: "di", text: "Frequentemente me sinto embaraçado perto das pessoas porque não estou à altura delas em termos de realização." },
    { id: 85, tag: "di", text: "Muitas vezes comparo minhas realizações com as dos outros e acho que eles são muito mais bem-sucedidos." },
    { id: 86, tag: "di", text: "Não me sinto capaz de me arranjar sozinho no dia-a-dia." },
    { id: 87, tag: "vd", text: "Preciso que as outras pessoas me ajudem a fazer as coisas." },
    { id: 88, tag: "vd", text: "Não me sinto capaz de manejar bem as situações sem ajuda." },
    { id: 89, tag: "vd", text: "Acredito que as pessoas podem cuidar melhor de mim melhor do que eu mesmo." },
    { id: 90, tag: "vd", text: "Tenho dificuldade em lidar com tarefas novas fora do trabalho, a menos que tenha alguém para me orientar." },
    { id: 91, tag: "vd", text: "Penso em mim como uma pessoa dependente, no que se refere ao funcionamento cotidiano." },
    { id: 92, tag: "vd", text: "Acabo estragando tudo o que tento fazer, mesmo fora do trabalho (ou da escola)." },
    { id: 93, tag: "vd", text: "Sou incapaz em quase todas as áreas da vida." },
    { id: 94, tag: "vd", text: "Se eu confiar no meu próprio julgamento nas situações do dia-a-dia, tomarei a decisão errada." },
    { id: 95, tag: "vd", text: "Falta-me bom senso." },
    { id: 96, tag: "vd", text: "Não se pode confiar em meu julgamento nas situações do dia-a-dia." },
    { id: 97, tag: "vd", text: "Não confio em minha capacidade de resolver os problemas que surgem no cotidiano." },
    { id: 98, tag: "vd", text: "Sinto que preciso de alguém em quem eu possa confiar para me dar conselhos sobre questões práticas." },
    { id: 99, tag: "vd", text: "Sinto-me mais como uma criança do que como uma pessoa adulta quando é preciso assumir responsabilidades do cotidiano." },
    { id: 100, tag: "vd", text: "Acho as responsabilidades do dia-a-dia esmagadoras." },
    { id: 101, tag: "em", text: "Não consigo deixar de sentir que algo de ruim vai acontecer." },
    { id: 102, tag: "em", text: "Sinto que algum desastre (natural, criminal, financeiro ou médico) vai acontecer a qualquer momento." },
    { id: 103, tag: "em", text: "Tenho medo de me tornar um \"sem-teto\" ou um abandonado à própria sorte." },
    { id: 104, tag: "em", text: "Tenho medo de ser atacado." },
    { id: 105, tag: "em", text: "Sinto que devo ter muito cuidado com dinheiro, ou acabarei sem nada." },
    { id: 106, tag: "em", text: "Tomo muitas precauções para não adoecer e não me machucar." },
    { id: 107, tag: "em", text: "Tenho medo de perder todo o meu dinheiro e ficar pobre." },
    { id: 108, tag: "em", text: "Tenho medo de pegar uma doença séria, mesmo que nada de sério tenha sido diagnosticado pelos médicos." },
    { id: 109, tag: "em", text: "Sou uma pessoa medrosa." },
    { id: 110, tag: "em", text: "Eu me preocupo muito com todas as coisas horríveis que acontecem no mundo: crime, poluição, e assim por diante." },
    { id: 111, tag: "em", text: "Muitas vezes, acho que posso enlouquecer." },
    { id: 112, tag: "sb", text: "Sinto, frequentemente, que vou ter um ataque de ansiedade." },
    { id: 113, tag: "sb", text: "Tenho muito medo de ter um ataque cardíaco, embora haja poucas razões médicas que justifiquem minha preocupação." },
    { id: 114, tag: "sb", text: "Acho que o mundo é um lugar  perigoso." },
    { id: 115, tag: "sb", text: "Não consegui me separar de meu pai/minha mãe, ou de ambos, assim como outras pessoas da minha idade parecem conseguir." },
    { id: 116, tag: "sb", text: "Meu  pai/minha mãe, ou ambos, e eu, tendemos a nos envolver excessivamente com a vida e com os problemas uns dos outros." },
    { id: 117, tag: "sb", text: "É muito difícil para meu pai/minha mãe, ou ambos, e eu, escondermos detalhes íntimos uns dos outros sem nos  sentirmos traídos ou culpados." },
    { id: 118, tag: "sb", text: "Meu pai/minha mãe, ou  ambos, e eu, temos que  nos falar quase todos os  dias, ou um de nós se  sente culpado, magoado, desapontado ou sozinho." },
    { id: 119, tag: "sb", text: "Muitas vezes, sinto que não tenho uma identidade separada da  de meus  pais ou parceiro/a" },
    { id: 120, tag: "sb", text: "Muitas vezes me parece que meus pais estão vivendo por intermédio de mim - eu não tenho uma vida própria." },
    { id: 121, tag: "sb", text: "É muito difícil para eu manter alguma distância das pessoas de quem sou íntimo; não é fácil para eu ter um senso separado de mim mesmo." },
    { id: 122, tag: "sb", text: "Estou tão envolvido com meu/minha parceiro/a ou com meus pais que não sei realmente quem sou, ou o que quero." },
    { id: 123, tag: "sb", text: "Tenho dificuldade em separar meu ponto de vista, ou  dos meus pais ou parceiro/a." },
    { id: 124, tag: "sb", text: "Sinto que não tenho nenhuma privacidade no que se refere ao meus pais ou parceiro/a." },
    { id: 125, tag: "as", text: "Sinto que meus pais estão, ou ficaram, muito magoados por eu morar sozinho, longe deles." },
    { id: 126, tag: "as", text: "Deixo as pessoas fazerem o que querem porque tenho medo das conseqüências." },
    { id: 127, tag: "as", text: "Acho que se eu fizer o que quero, só vou arranjar problemas." },
    { id: 128, tag: "as", text: "Sinto que não tenho escolhas além de ceder ao desejo das pessoas, ou elas vão me rejeitar ou retaliar de alguma forma." },
    { id: 129, tag: "as", text: "Nos meus relacionamentos, deixo a outra pessoa ter o controle." },
    { id: 130, tag: "as", text: "Sempre deixei os outros escolherem por mim, de modo que não sei realmente o que quero." },
    { id: 131, tag: "as", text: "Sinto que as maiores decisões da minha vida não foram realmente minhas." },
    { id: 132, tag: "as", text: "Eu me preocupo muito em agradar os outros para que eles não  me rejeitem." },
    { id: 133, tag: "as", text: "Tenho muita dificuldade em exigir que meus direitos sejam respeitados e que meus sentimentos sejam levados em conta." },
    { id: 134, tag: "as", text: "Eu me vingo das pessoas de maneira sutil, em vez de demonstrar minha raiva." },
    { id: 135, tag: "as", text: "Vou muito além do que a maioria das pessoas para evitar confrontações." },
    { id: 136, tag: "as", text: "Coloco as necessidades dos outros antes das minhas, ou me sinto culpado." },
    { id: 137, tag: "as", text: "Sinto culpa quando desaponto as pessoas." },
    { id: 138, tag: "as", text: "Dou mais às pessoas do que recebo delas." },
    { id: 139, tag: "as", text: "Sou  aquele que geralmente acaba cuidando das pessoas  de quem sou próximo." },
    { id: 140, tag: "ie", text: "Não há nada que não possa aceitar quando amo alguém." },
    { id: 141, tag: "ie", text: "Sou uma boa pessoa, pois penso nos outros mais do que em mim mesmo." },
    { id: 142, tag: "ie", text: "No trabalho, normalmente sou aquele  que se apresenta como voluntário para fazer as tarefas extras, ou trabalhar mais tempo." },
    { id: 143, tag: "ie", text: "Por mais ocupado que esteja, eu sempre arranjo tempo para os outros." },
    { id: 144, tag: "ie", text: "Consigo me virar com muito pouco, porque as minhas necessidades são mínimas." },
    { id: 145, tag: "ie", text: "Só me sinto feliz quando aqueles que me cercam estão felizes." },
    { id: 146, tag: "ie", text: "Fico tão ocupado fazendo coisas para as pessoas  que gosto que tenho pouco tempo para mim." },
    { id: 147, tag: "ie", text: "Sempre fui aquele que escuta os problemas de todo mundo." },
    { id: 148, tag: "ie", text: "Fico mais a vontade dando um presente do que recebendo." },
    { id: 149, tag: "pi", text: "As pessoas me vêem fazendo mais pelos outros e pouco por mim." },
    { id: 150, tag: "pi", text: "Por mais que eu dê, nunca é suficiente." },
    { id: 151, tag: "pi", text: "Se faço o que quero, me sinto muito mal." },
    { id: 152, tag: "pi", text: "É muito difícil para eu pedir aos outros  que atendam às minhas necessidades." },
    { id: 153, tag: "pi", text: "Tenho medo de perder o controle das minhas ações." },
    { id: 154, tag: "pi", text: "Tenho medo de machucar muito as pessoas, física ou emocionalmente, caso perca o controle da minha raiva." },
    { id: 155, tag: "pi", text: "Sinto que preciso controlar as minhas emoções e impulsos, ou algo de ruim pode acontecer." },
    { id: 156, tag: "pi", text: "Dentro de mim há muita raiva e ressentimentos que não expresso." },
    { id: 157, tag: "pi", text: "Tenho muita vergonha de demonstrar sentimentos positivos em relação aos outros (por exemplo: afeição, sinais de cuidado)." },
    { id: 158, tag: "pi", text: "Acho embaraçoso expressar meus sentimentos para os outros." },
    { id: 159, tag: "pi", text: "Tenho dificuldade em ser carinhoso e espontâneo." },
    { id: 160, tag: "pi", text: "Eu me controlo tanto que as pessoas acham que eu não sou emotivo/afetivo." },
    { id: 161, tag: "pi", text: "As pessoas me vêem como emocionalmente contida." },
    { id: 162, tag: "pi", text: "Preciso ser o melhor em tudo que faço; não consigo aceitar vir em segundo lugar." },
    { id: 163, tag: "pi", text: "Tento manter tudo dentro da mais perfeita ordem." },
    { id: 164, tag: "me", text: "Preciso causar a melhor impressão, praticamente, o tempo todo." },
    { id: 165, tag: "me", text: "Tento fazer o melhor, não consigo aceitar o “suficientemente bom”." },
    { id: 166, tag: "me", text: "Tenho tantas coisas para fazer que quase não me sobra tempo para relaxar de verdade." },
    { id: 167, tag: "me", text: "Quase nada é bom o bastante; sempre posso fazer melhor." },
    { id: 168, tag: "me", text: "Preciso cumprir todas as minhas responsabilidades." },
    { id: 169, tag: "me", text: "Sinto que existe uma pressão constante sobre mim para conquistar e fazer as coisas." },
    { id: 170, tag: "me", text: "Meus relacionamentos são prejudicados porque exijo demais de mim." },
    { id: 171, tag: "me", text: "Minha saúde sofre porque me pressiono demais para sair bem." },
    { id: 172, tag: "me", text: "Muitas vezes sacrifico prazer e felicidade para estar à altura dos meus padrões." },
    { id: 173, tag: "me", text: "Se cometo um erro, mereço ser muito criticado." },
    { id: 174, tag: "me", text: "Não consigo me soltar ou me desculpar por meus erros com facilidade." },
    { id: 175, tag: "ic", text: "Sou uma pessoa muito competitiva." },
    { id: 176, tag: "ic", text: "Dou muito valor a dinheiro e status." },
    { id: 177, tag: "ic", text: "Tenho que ser sempre o \"Número 1\" em termos de desempenho." },
    { id: 178, tag: "ic", text: "Tenho muita dificuldade em aceitar um \"não\" como resposta quando quero alguma coisa de alguém." },
    { id: 179, tag: "ic", text: "Geralmernte me zango, ou me irrito, quando não consigo aquilo que quero." },
    { id: 180, tag: "ic", text: "Sou especial e não deveria ter que aceitar muitas das restrições impostas às outras pessoas." },
    { id: 181, tag: "ic", text: "Detesto ser obrigado a fazer alguma coisa, ou impedido de fazer o que quero." },
    { id: 182, tag: "ic", text: "Acho que não deveria ter que obedecer às regras e convenções normais assim como os outros." },
    { id: 183, tag: "ic", text: "Sinto que aquilo que tenho a oferecer é muito mais valioso do que as contribuições dos outros." },
    { id: 184, tag: "ic", text: "Geralmente coloco as minhas necessidades acima das necessidades dos outros." },
    { id: 185, tag: "ic", text: "Muitas vezes sinto que estou tão envolvido com as minhas prioridades que não tenho tempo para os amigos ou a família." },
    { id: 186, tag: "ic", text: "As pessoas frequentemente me dizem que sou muito controlador em relação a como as coisas devem ser feitas." },
    { id: 187, tag: "ic", text: "Fico muito irritado quando as pessoas não fazem o que eu lhes peço." },
    { id: 188, tag: "ic", text: "Não tolero que as pessoas me digam o que fazer." },
    { id: 189, tag: "ic", text: "Tenho grande dificuldade para deixar de beber, fumar, comer demais e modificar outros comportamentos problemáticos." },
    { id: 190, tag: "ba", text: "Parece que não consigo me disciplinar e levar até o fim as tarefas rotineiras ou chatas." },
    { id: 191, tag: "ba", text: "Muitas vezes, me permito obedecer impulsos e expressar emoções que me trazem problemas ou machucam as pessoas." },
    { id: 192, tag: "ba", text: "Quando não consigo atingir algum objetivo, fico facilmente frustrado e desisto." },
    { id: 193, tag: "ba", text: "Para mim, é muito difícil sacrificar uma gratificação imediata para atingir um objetivo a longo prazo." },
    { id: 194, tag: "ba", text: "Depois que começo a sentir raiva, é comum não conseguir controlá-la." },
    { id: 195, tag: "ba", text: "Tendo a fazer muitas coisas em excesso, mesmo sabendo que isso não é bom para mim." },
    { id: 196, tag: "ba", text: "Eu me aborreço muito facilmente." },
    { id: 197, tag: "ba", text: "Quando as tarefas ficam difíceis, geralmente não consigo perseverar e concluí-las." },
    { id: 198, tag: "ba", text: "Não consigo me concentrar em nada por muito tempo." },
    { id: 199, tag: "ba", text: "Não consigo me obrigar a fazer coisas de que não não gosto, mesmo sabendo que é para o meu próprio bem." },
    { id: 200, tag: "np", text: "Perco a calma diante da ofensa mais insignificante." },
    { id: 201, tag: "np", text: "Raramente consigo cumprir minhas resoluções." },
    { id: 202, tag: "np", text: "Quase nunca deixo de mostrar às pessoas o que realmente sinto, seja qual for o custo disso." },
    { id: 203, tag: "np", text: "Frequentemente faço, por impulso, coisas que mais tarde lamento." },
    { id: 204, tag: "np", text: "Ter dinheiro e conhecer pessoas importantes me faz sentir uma pessoa de valor" },
    { id: 205, tag: "np", text: "Aquilo que consigo alcançar tem mais valor para mim se for algo em que os outros reparem" },
    { id: 206, tag: "np", text: "Sinto-me pouco importante, a não ser que receba muita atenção dos outros" },
    { id: 207, tag: "np", text: "Quando faço uma intervenção em uma reunião ou quando sou apresentado a alguém em um grupo, para mim é importante obter reconhecimento e admiração." },
    { id: 208, tag: "np", text: "Receber muitos elogios dos outros me faz sentir como uma pessoa que tem valor." },
    { id: 209, tag: "np", text: "Se cometer um erro mereço ser castigado" },
    { id: 210, tag: "np", text: "Se não me esforçar ao máximo é de esperar que as coisas corram mal." },
    { id: 211, tag: "np", text: "Se não fizer bem o que me compete mereço sofrer as consequências" },
    { id: 212, tag: "np", text: "Não interessa o motivo pelo qual cometí um erro; quando faço algo errado é preciso arcar com as consequências" },
    { id: 213, tag: "np", text: "Sou uma pessoa má que merece ser castigada" },
];

const schemaMap = {
    "pe": "Privação Emocional",
    "ab": "Abandono/Instabilidade",
    "da": "Desconfiança/Abuso",
    "ia": "Isolamento Social",
    "dv": "Defectividade/Vergonha",
    "fr": "Fracasso",
    "di": "Dependência/Incompetência",
    "vd": "Vulnerabilidade",
    "em": "Emaranhamento",
    "sb": "Subjugação",
    "as": "Auto-Sacrifício",
    "ie": "Inibição Emocional",
    "pi": "Padrões Inflexíveis",
    "me": "Grandiosidade/Superioridade",
    "ic": "Autocontrole Insuficiente",
    "ba": "Busca de Aprovação",
    "np": "Negativismo/Pessimismo",
    "pu": "Postura Punitiva"
};

let responses = {};
let userName = "";

function initBackground() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#FF7A00" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4 },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#FF7A00", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1.2 }
            },
            "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } }
        });
    }

    if (typeof THREE !== 'undefined' && document.getElementById('brain-canvas')) {
        const canvas = document.getElementById('brain-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const geometry = new THREE.IcosahedronGeometry(12, 3);
        const material = new THREE.PointsMaterial({ color: 0xFF7A00, size: 0.12 });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
        const wireMaterial = new THREE.MeshBasicMaterial({ color: 0xFF7A00, wireframe: true, transparent: true, opacity: 0.05 });
        const sphere = new THREE.Mesh(geometry, wireMaterial);
        scene.add(sphere);

        camera.position.z = 28;
        // Adjust camera for mobile
        if (window.innerWidth < 768) {
            camera.position.x = 0;
            camera.position.z = 35;
        } else { camera.position.x = -8; }

        function animate() {
            requestAnimationFrame(animate);
            points.rotation.y += 0.0015;
            points.rotation.x += 0.0008;
            sphere.rotation.y += 0.0015;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            if (window.innerWidth < 768) {
                camera.position.x = 0;
                camera.position.z = 35;
            } else {
                camera.position.x = -8;
                camera.position.z = 28;
            }
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function startTest() {
    userName = document.getElementById('patientName').value.trim();
    if (!userName) return alert("Por favor, digite seu nome.");
    const container = document.getElementById('dynamic-slides-container');
    const tags = [...new Set(questionData.map(q => q.tag))];
    tags.forEach((tag, index) => {
                const slideId = `slide${index + 2}`;
                const tagQuestions = questionData.filter(q => q.tag === tag);
                let questionsHtml = "";
                tagQuestions.forEach((q) => {
                            const qId = `${tag}_${q.id}`;
                            questionsHtml += `
                <div class="question-item">
                    <div class="question-text">${q.id}. ${q.text}</div>
                    <div class="rating-group">
                        ${[1,2,3,4,5,6].map(v => `<button class="rating-btn" onclick="selectScore('${qId}', '${tag}', ${v}, this)">${v}</button>`).join('')}
                    </div>
                </div>`;
        });
        container.innerHTML += `
            <div class="slide-container quiz-container" id="${slideId}">
                <div class="progress-header">
                    <span>${schemaMap[tag]}</span>
                    <div class="progress-bar"><div class="progress-fill" id="prog-${tag}"></div></div>
                    <span>${index+1}/${tags.length}</span>
                </div>
                <h2 class="slide-title" style="font-size: 1.5rem; text-align: left;"><span>${schemaMap[tag]}</span></h2>
                <div class="question-block">${questionsHtml}</div>
                <button class="btn-primary" style="margin-top:30px;" onclick="checkAndNext(${index + 2}, '${tag}')">Avançar</button>
                <footer>Eduardo Henrique Santos - Terapeuta</footer>
            </div>`;
    });
    nextSlide(2);
}

function nextSlide(n) {
    document.querySelectorAll('.slide-container').forEach(s => s.classList.remove('active'));
    let target = (n === 'results') ? document.getElementById('slide-results') : document.getElementById('slide' + n);
    if(target) { target.classList.add('active'); target.scrollTop = 0; }
}

function selectScore(qId, tag, val, btn) {
    responses[qId] = { tag, val };
    btn.parentElement.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const blockQuestions = questionData.filter(q => q.tag === tag);
    const answeredCount = Object.values(responses).filter(r => r.tag === tag).length;
    const progBar = document.getElementById(`prog-${tag}`);
    if(progBar) progBar.style.width = `${(answeredCount / blockQuestions.length) * 100}%`;
}

function checkAndNext(slideNum, tag) {
    const tagQuestions = questionData.filter(q => q.tag === tag);
    const answeredCount = Object.values(responses).filter(r => r.tag === tag).length;
    if(answeredCount < tagQuestions.length) return alert("Responda todas as questões deste bloco.");
    const nextSlideEl = document.getElementById('slide' + (slideNum + 1));
    if(nextSlideEl) nextSlide(slideNum + 1);
    else { showFinalResults(); nextSlide('results'); }
}

function showFinalResults() {
    const summary = document.getElementById('result-summary');
    let scores = {};
    Object.values(responses).forEach(r => {
        if(!scores[r.tag]) scores[r.tag] = { sum: 0, count: 0 };
        scores[r.tag].sum += r.val;
        scores[r.tag].count++;
    });
    let html = "<table class='result-table'><tbody>";
    for(const tag in scores) {
        const media = (scores[tag].sum / scores[tag].count).toFixed(2);
        const isHigh = media >= 3;
        html += `<tr><td><b>${schemaMap[tag]}</b></td><td style="color:#FF7A00; text-align:right;">${media}</td><td style="text-align:right;"><span class="result-badge ${isHigh ? 'high' : ''}">${isHigh ? 'ALTO' : 'OK'}</span></td></tr>`;
    }
    summary.innerHTML = html + "</tbody></table>";
}

function sendWhatsApp() {
    let scores = {};
    Object.values(responses).forEach(r => {
        if(!scores[r.tag]) scores[r.tag] = { sum: 0, count: 0 };
        scores[r.tag].sum += r.val;
        scores[r.tag].count++;
    });
    let text = `*RELATÓRIO DE ESQUEMAS - ${userName}*\n\n`;
    for(const tag in scores) {
        text += `• ${schemaMap[tag]}: ${(scores[tag].sum / scores[tag].count).toFixed(2)}\n`;
    }
    const phone = "55539842626"; 
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}

document.addEventListener('DOMContentLoaded', initBackground);
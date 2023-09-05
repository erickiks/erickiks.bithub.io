
        function MudaDesenho(){
            const texto = document.querySelector("h1");
            const texto2 = document.querySelector("h2");
            const imagem = document.querySelector(".img2");
            const valor = document.querySelector('#valor').value;
            
            if(valor=="gemeos"){
                texto.innerHTML = "Gêmeos";
                imagem.setAttribute("src","img/gemeos.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = " é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto – humanidade, habilidade e força física. ";
            }

            else if(valor=="escorpiao"){
                texto.innerHTML = "Escorpião";
                imagem.setAttribute("src","img/escorpiao.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Milo de Escorpiãofoi, no século XX, o Cavaleiro  de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne.";
            }
            
            else if(valor=="peixes"){
                texto.innerHTML = "Peixes";
                imagem.setAttribute("src","img/peixes.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Por isso, mesmo tendo consciência de que o Grande Mestre servia ao mal, acabou obedecendo suas ordens e matando Daidalos, mestre de Shun. Sua atitude pode não ser a mais exemplar para um Cavaleiro, mas seu propósito de manter a paz na Terra é igual ao de qualquer Cavaleiro.";
            }
            else if(valor=="aries"){
                texto.innerHTML = "Áries";
                imagem.setAttribute("src","img/aries.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário. Porém, desejando a purificação do local, manteve suas obrigações como Cavaleiro, dedicando-se à restauração das Armaduras em Jamiel, porém seu poder não enfraqueceu, o que pôde ser constatado durante a batalha contra os Espectros.";
            }
            else if(valor=="touro"){
                texto.innerHTML = "Touro";
                imagem.setAttribute("src","img/touro.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades. Lutou com Niobe de Deep quando os Espectros invadiram o Santuário, tendo um fim heroico";
            }
            else if(valor=="cancer"){
                texto.innerHTML = "Câncer";
                imagem.setAttribute("src","img/cancer.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis. As paredes da Casa de Câncer são enfeitadas com os rostos das pessoas que foram mortas até hoje por Máscara da Morte. Emite uma aura branca do seu dedo indicador que envia a alma do oponente para a entrada do Mundo dos Mortos – é a Ondas do Inferno, seu golpe secreto. Ele morre na batalha contra Shiryu, mas retorna do Mundo dos Mortos como um Espectro. Nessa ocasião, falha na missão de assassinar Atena e acaba novamente no Mundo dos Mortos pelas mãos de Radamanthys de Wyvern. Apesar disso, participa da derrubada do Muro das Lamentações junto com os Cavaleiros de Ouro";
            }
            else if(valor=="virgem"){
                texto.innerHTML = "Virgem";
                imagem.setAttribute("src","img/virgem.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro. Tem uma morte heroica sob a destrutiva Exclamação de Atena, criada por Saga, Shura e Camus, mas ele submeteu-se a esse golpe para poder acompanhar Atena no Mundos dos Mortos.";
            }
            else if(valor=="leao"){
                texto.innerHTML = "Leão";
                imagem.setAttribute("src","img/leao.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. Durante a batalha contra os Espectros, enfrentou o exército inimigo de frente e derrubou muitos Espectros, servindo como poder central de ataque no Santuário.";
            }
            else if(valor=="capricornio"){
                texto.innerHTML = "Capricórnio";
                imagem.setAttribute("src","img/capricornio.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
            }
            else if(valor=="libra"){
                texto.innerHTML = "Libra";
                imagem.setAttribute("src","img/libra.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. Após o fim do conflito e ser incumbido por Atena de vigiar o selo que aprisionava o espectros do Imperador dos Mortos, Dohko ficou recluso nos Cinco Picos Antigos de Rozan até o Século XX, período que passara a ser venerado como Mestre Ancião e, ao mesmo tempo que mantinha sua vigília, treinou Shiryu, que se tornaria o Cavaleiro de Bronze de Dragão.";
            }
            else if(valor=="aquario"){
                texto.innerHTML = "Aquário";
                imagem.setAttribute("src","img/aquario.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
            }
            else if(valor=="sagitario"){
                texto.innerHTML = "Sagitario";
                imagem.setAttribute("src","img/sagitario.jpg");
                imagem.setAttribute("width","700px");
                texto2.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. Mesmo morto, sua alma continua a controlar sua Armadura de Sagitário, sempre ajudando, nos momentos críticos – emprestou-a a Seiya durante a luta contra Poseidon, por exemplo.";
            }
            else{
                texto.innerHTML = "Cavaleiro não encontrado... :(";
                imagem.setAttribute("src","img/sad.gif");
                imagem.setAttribute("width","700px");
            }
        }
    
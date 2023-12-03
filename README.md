## Contextualização:
O sistema desenvolvido para a C4P foi um sucesso. Várias franquias de lojas especializadas em produtos para o mercado pet adotaram a solução desenvolvida por você, na tua empresa especializada em desenvolvimento de software. Mas, apesar de todo o sucesso, há uma questão ainda não resolvida. O sistema não tem uma GUI. 

Sem GUI, o uso do sistema tornou-se inapropriado para um ambiente web, onde a principal ferramenta é o navegador. Desta forma, corre-se o risco de o software tornar-se defasado e perder para concorrências futuras. Por isso, o próximo objetivo do desenvolvimento é atualizar o sistema com uma GUI moderna e que funcione tanto em navegadores comuns quanto em navegadores de dispositivos móveis, como celulares e/ou tablets, por exemplo. Depois de muito debate sobre o design e layout das telas, você decidiu contratar uma equipe de desenvolvimento especializada em design, para auxiliar na construção da interface e escolha de tecnologias. A equipe de desenvolvimento da tua empresa iniciou um pré-projeto, com o desenvolvimento da primeira interface gráfica.

No pré-projeto, utilizou-se uma biblioteca para construção de interfaces com HTML, a biblioteca bootstrap. A bootstrap é um framework front-end, responsivo e moderno – seu desenvolvimento e divulgação iniciou-se com a equipe que elaborou GUI da rede social twitter. 

A documentação da biblioteca está disponível no endereço https://getbootstrap.com. Contudo, o último acesso do time de desenvolvimento foi a 2 meses e não se sabe se a documentação ainda está disponível, tampouco qual é a versão atual da biblioteca. A versão utilizada no pré-projeto foi a 5.3.0. 
Este pré-projeto é fundamental para a sobrevivência da C4P, se ela não se modernizar com certeza perderá clientes para seus concorrentes. Entretanto, momentaneamente, a equipe de desenvolvimento está com muito trabalho, devido a manutenções no sistema entregue anteriormente. Por isso, você irá assumir o desenvolvimento do pré-projeto a partir de agora. 
Teu objetivo é desenvolver todas as interfaces, em HTML. Não há necessidade de vínculo com alguma aplicação back-end, por hora. Porque ainda é um pré-projeto. Então você está comprometido em terminar as telas e suas transições, somente.

Além da biblioteca bootstrap, também se utilizou uma outra, a react. A react é uma biblioteca JavaScript/TypeScript de código aberto, com foco em criar GUI em páginas web. Por isso, a equipe de desenvolvimento definiu uma regra para construção da nova GUI. Todos os componentes criados com a react devem ser componentes de classe. Você deverá seguir esta regra para evitar conflitos, desnecessários, com o time de desenvolvimento. 
A documentação da react pode ser acessada no endereço https://reactjs.org, contudo, cabe a mesma observação feita para a biblioteca bootstrap, o acesso do time de desenvolvimento foi a 2 meses e não se sabe se a documentação ainda está disponível ou qual é a versão atual da biblioteca. No pré-projeto utilizou-se a versão 18.2.0. Se julgar necessário, você pode atualizar a versão e desenvolver na última disponível. 

Um ponto importante, se for conveniente, outra biblioteca pode ser utilizada no lugar do bootstrap. Dado que ela é um framework front-end sua mudança não é de alto custo, portanto, não interfere abruptamente nos componentes de classe da react. Mas, deve-se lembrar que a GUI desenvolvida será acessada tanto por um navegador comum quanto por um dispositivo móvel, portanto, o design precisa ser responsivo, obrigatoriamente.

## Como rodar ##

É necessário ter NodeJs e Git instalados no seu computador:
- Clone o repositório em uma pasta:
```
git clone https://github.com/GaSiqueira/Atividades-TP-2023.git .
```
- Após clonar o repositório mude para a branch Atv2:
```
git checkout Atv2
```
- Instale as dependências do projeto:
``` 
npm i
``` 
- Agora é só rodar:
```
npm start
```

# Atividades:
## <a href='https://github.com/GaSiqueira/Atividades-TP-2023/tree/Atv1'>**ATV1: CLI**</a>
## <a href='https://github.com/GaSiqueira/Atividades-TP-2023/tree/Atv2'>**ATV2: Interface gráfica**</a>
## <a href='https://github.com/GaSiqueira/Atividades-TP-2023/tree/Atv3'>**ATV3: Hooks**</a>
## <a href='https://github.com/GaSiqueira/Atividades-TP-2023/tree/Atv4'>**ATV4: REST**</a>
## <a href='https://github.com/GaSiqueira/Atividades-TP-2023/tree/Atv5'>**ATV5: Integração**</a>

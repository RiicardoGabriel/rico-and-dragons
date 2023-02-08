# Rico And Dragons 🧑‍💻🐉

<!-- Escrita Sobre o Projeto -->
<details>
  <summary><strong>Sobre o Projeto ⚡</strong></summary>
    Projeto desenvolvindo com TypeScript, usando arquitetura POO (Programação Orientada a Objetos) e S.O.L.I.D para facilitar na escrita e compreensão do código.
  <br />
</details>

<details>
  <summary><strong>Como iniciar o projeto na sua máquina 💻</strong></summary>
  Primeiro clone o Projeto no seu repositório local.
  
  * `git clone git@github.com:RiicardoGabriel/rico-and-dragons.git`
  
  Agora entra no repositório local.
  
  * `cd rico-and-dragons` (Entrar no repositório clonado)
  
  > Caso você tenha Visual Studio Code, `code .`
  
  Caso prefira rodar sem docker basta colocar
  
  * `npm install` [**Caso Exitem dependências**].
  
  E para executar os arquivos da pasta `src/`
  
  * `npx ts-node src/`

</details>

<details>
  <summary><strong>Rodando com Docker 🐋</strong></summary>
  Para rodar com o docker, primeiro precisamos instalar a imagem do NodeJs e criar os containers do projeto.
  
   * `docker-compose up -d`
 
  Em seguida entre no container criado.
 
   * `docker exec -it trybers_and_dragons bash`
   
  Agora basta baixar as dependências [**Caso Existem**] do projeto
  
   * `npm install`
  
  Para executar os arquivos basta copiar e colar
  
  * `npx ts-node src/`
  
</details>




# Flex Loan

Flex Loan, é uma plataforma online, flexível e de fácil uso, que permite ao usuário efetuar seus empréstimos de maneira simples rápida e descomplicada, fornecendo ferramentas para que o usuário tenha o melhor desempenho e consiga monitorar com eficiência os seus empréstimos. 

Ela é responsiva o que significa que pode ser acessada em diversos dispositivos diferentes, como smarthphones, tablets e computadores.

### Visualização Desktop
![mobile-version](https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/desktop01.png)

### Visualização Geral
<img src="https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/mobile01.png?raw=true" width="200">

### Visão das Carteiras
<img src="https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/mobile02.png?raw=true" width="200">

### Visualização em tablets
<img src="https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/tablet01.png?raw=true" width="200">

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

* MySQL >= 8.0
* PHP >= 8.1

### 🔧 Configurações para rodar na máquina local

O primeiro passo que você precisará para começar, é baixando o projecto.

```
git clone https://github.com/ricardocastl3/flexloans
```

Depois de baixar o projecto, será necessário mudar o arquivo ``.env-example`` para ``.env``, você pode usar o seguinte comando.

```
cp .env-example .env
```

Feito o passo anterior, esteja a vontade para poder fazer as alterações das informações do banco de dados dentro do arquivo ``.env`` como:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=flexloan
DB_USERNAME=meuusuario
DB_PASSWORD=minhasenha
```
Certifique-se de que as configurações estejam de acordo com as configurações de sua máquina.

Agora precisaremos instalar algumas dependências, usando o comando:

```
npm install
npm build
```

Depois de configurada as opções anteriores será necessário criar todas as tabelas no seu banco de dados, para isso, vamos usar a seguinte instrução:

```
php artisan migrate
```

Antes de executar o código anterior, certifique-se de que você esteja dentro da pasta do projecto.

Depois desta instrução, execute o comando a abaixo para rodar o projecto em sua máquina.

```
php artisan serve
```

Em seu terminal vai aparacer um link do seu host local que será usado para poder acessar o projecto.

## 🛠️ Desenvolvido com


* [Node.JS](https://nodejs.org/en/docs) - Para o back-end.
* [AlpineJS](https://alpinejs.dev/) - Frameworks front-end.

## ✒️ Autores

Para o desenvolvimento da plataforma temos como: 

* **Desenvolvedor e Documentação** - *Trabalho Inicial* - [Ricardo Castle](https://github.com/ricardocastl3)


## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Agradecimentos pela equipe DevOpsBootcamp, que por meio deles pude ter o prazer de participar do Hackathon Questrade Brasil.

---
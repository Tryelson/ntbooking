# NTBooking

Uma mini aplicação frontend sobre reserva de hotéis utilizando Vue 3, Typescript e tailwind + css para estilização.
Com funcionalidades de Pesquisar, comparar e reservar hotéis.

## Requisição

O projeto foi desenvolvido sem a disponibilidade de um backend, então tudo foi feito com
dados mockados simulando uma requisição ali de API/endpoint e também usando um pouco
de gerenciamento de estado global utilizando o **Pinia**.

No caminho `.../src/api/hotels.ts` é onde foi estruturado as funções para simular as requisições.

## Pinia

Utilizei o Pinia para fazer o gerenciamento de estado global das funcionalidades `reservas` e `comparação`
de hotéis. 

No caminho `.../src/stores/reservation.ts` e `.../src/stores/comparison.ts`.

## Setup do Projeto

```sh
npm install
```

### Compilar e executar projeto em localhost

```sh
npm run dev
```

### Build para produção

```sh
npm run build
```

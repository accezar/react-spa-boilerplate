# services

Nesta pasta ficam os serviços, que entendemos como um conjunto de funções que abstraem as chamadas as APIS.

A estrutura deve consistir de uma pasta com o nome do serviço. Dentro desta é preferível que se crie um arquivo para cada endpoint e que estes sejam exportados via `index.ts`


Exemplo:

```
/services
    /mocky.io
        getWelcomeText.ts
        index.ts
    /another-service
        anotherEndpoint.ts
        index.ts
    /...

```

### Não deve-se usar para:

- ...

### Nomeclatura
- ..

### Estrutura de pastas a se seguir
- ..

### Modularização

- ..
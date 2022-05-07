# modules

Nesta pasta ficam os modulos, que entendemos como um conjunto de páginas e subpáginas que represente uma grande funcionalidade.

### Não deve-se usar para:
- ...

### Nomeclatura
- ..

### Estrutura de pastas a se seguir
- ..

### Modularização

- ..
Cada modulo deve ser estruturado da seguinte maneira: 

```
/modules
    /WelcomeModule          // <-- Nome do Modulo
        /components         // <-- Componentes exclusivos ao modulo
        /pages              // <-- Paginas que fazem a composição do módulo.
            WelcomePage.tsx
            index.ts
        index.tsx
    /AnotherModule
        /components
        /pages
            AnotherModulePage.tsx
            index.ts
    /...

```

Esta pasta tem na sua raiz o arquivo `WorkspaceRoot.tsx` que é composto dos elementos globais do layout, como Navbar e Sidebar.



# hooks

Nesta pasta ficam os hooks, que entendemos como funções auxiliares que acessam ou modificam parte do estado. 


#### Exemplo: 
Este hook recebe uma string como parâmetro e faz uma chamada a um recurso da API, retornando os estados para o componente que o consumir.


```typescript
const useMyCustomApi = ({ query }) => {
  const [data, setData] = useState({ myItems: [] });
  
  // Ex: Apenas como exemplo
  // deveria existir uma funcao Service dedicada a esta requisição, com sua resposta tipada.
  const [url, setUrl] = useState(
    `https://my-custom-apu-url/api/v1/search?query=${query}`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}

```

### Não deve-se usar para:
- ...

### Nomeclatura
- ..

### Estrutura de pastas a se seguir
- ..

### Modularização

- ..
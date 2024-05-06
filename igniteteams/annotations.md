## Anotações

Boas práticas 

- Ao definir uma chave no Storage, adicionar um prefixo com o nome da aplicação para evitar conflitos com outras aplicações que utilizem o mesmo Storage.

Exemplo: 

const GROUP_COLLECTION = "@ignite-teams:groups";
const PLAYER_COLLECTION = "@ignite-teams:players";

export { GROUP_COLLECTION, PLAYER_COLLECTION };


useFocusEffect: é um hook do React Navigation que executa uma função sempre que a tela é focada. Ele é útil para carregar dados toda vez que a tela é exibida.

useCallback: é um hook do React que retorna uma versão memorizada de uma função. Ele é útil para evitar que a função seja recriada a cada renderização, otimizando o desempenho da aplicação.

Ao utilizar o useFocusEffect, seguindo a documentação do React Natigation, é recomendado utilizar o useCallback para evitar que a função seja recriada a cada renderização da tela.

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);


Dicas para limpar o input, após o usuário clicar no botão de submit:

- Criar uma ref para o input, e na função de submit, utilizar a ref para aplicar o efeito blur no input.

Exemplo:  inputRef.current?.blur();

- Utilizar o Keyboard para fechar o teclado após o submit.

Exemplo: Keyboard.dismiss();


É possível configurar para no próprio teclado do dispositivo, ao clicar no botão de enviar, executar uma ação específica, como enviar um formulário.
Para isso, basta utilizar as propriedades onSubmitEditing e returnKeyType do TextInput.

Exemplo:

<TextInput
{...}
  onSubmitEditing={handleAddPlayer} // Função que será executada ao clicar no botão de enviar
  returnKeyType="done" // Tipo de botão que será exibido no teclado
  />
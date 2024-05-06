Boas práticas: ao definir uma chave no Storage, adicionar um prefixo com o nome da aplicação para evitar conflitos com outras aplicações que utilizem o mesmo Storage.

useFocusEffect: é um hook do React Navigation que executa uma função sempre que a tela é focada. Ele é útil para carregar dados toda vez que a tela é exibida.

useCallback: é um hook do React que retorna uma versão memorizada de uma função. Ele é útil para evitar que a função seja recriada a cada renderização, otimizando o desempenho da aplicação.

Ao utilizar o useFocusEffect, seguindo a documentação do React Natigation, é recomendado utilizar o useCallback para evitar que a função seja recriada a cada renderização da tela.

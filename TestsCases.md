Cenário: Verificar erro ao tentar logar sem nenhuma informação preenchida
Descrição: Um usuario na pagina de login sem preencher nenhum campo tenta fazer login
Resultado Esperado: Deve retornar um aviso que o campo de email deve ser preenchido

Cenário: Verificar mensagem de erro ao tentar logar sem senha preenchida
Descrição: Dado um usuario na pagina de login que preencheu corretamente o email e não preencheu a senha clicar em "login"
Resultado Esperado: Deve retornar um aviso que o campo senha deve ser preenchido

Cenário: Verificar mensagem de erro ao tentar logar com Email incorreto
Descrição: Um usuario na pagina de login ao digitar um email incorreto no campo de email no login e clicar em "login"
Resultado Esperado: Deve retornar um aviso que o email esta incorreto

Cenário: Verificar mensagem de erro ao tentar logar com email nao cadastrado
Descrição: Dado um usuario na tela de login que preencheu ambos os campos porém com um email nao cadastado clicar em "login"
Resultado Esperado: Deve aparecer um erro com o aviso " Your email or password is incorrect! "

Cenário: Verificar mensagem de erro ao tentar logar com a senha incorreta
Descrição: Dado um usuario na tela de login que preencheu ambos os campos porém com a senha incorreta clicar em "login"
Resultado Esperado: Deve aparecer um erro com o aviso " Your email or password is incorrect! "

Cenário: Verificar login bem sucedido
Descrição: Dado um usuario na tela de login que preencheu ambos os campos corretamente com email e senha clicar em "login"
Resultado Esperado: Deve ser redirecionado para a pagina inicial e o botão de "logout" aparecer

# Guia de Utilizaçao
   ### Neste guia vamos criar um "novo projecto exemplo chamado "Test"
   ## 1-(GitHub)
   1. Passo:
    1. criar Repo para "Test"
   2º Passo:
   clonar o Remote de "new_project_template"

##2-(Terminal)
  3º Passo:
        g clone (remote de "new_project_template") "Test"
  4º Passo:
        cd "Test"
  5º Passo:
        g
  6º Passo:
        g remote -v
  7º Passo:
        g remote rm origin
  8º Passo:
        g remote add origin (remote de "Test")
  9º Passo:
        g oush -u origin master
  10º Passo:
        npm install
  11º Passo:
        npm start
       -este passo é para ser feito sempre que se abrir o terminal e recomeçar o
trabalho do dia anterior.

##3-(dentro de "Test")
  12º Passo:
        nos files "package.json" e "package-lock.json", alterar o campo
(name:'template_project_gulp_sass';) para (name'"Test"';)
  13º Passo:
        apagar o README.MD
        e em package.json mudar o name para o nome do projecto, que neste caso é
"test" - PERGUNTAR AO LIMA SE ISTO É PARA FAZER ASSIM

E VER TAMBEM A QUESTAO DAS TASKS do GULP, SE ELAS COMEÇAM A TRABALHAR SOZINHAS
OU SE É PRECISO CHAMALAS COM OS COMANDOS GULP WATCH, etc .....

# Projeto-Jest - Teste-unitario-jest
## Projeto voltado a automação de teste // Packages to install // 
<h3>npm init<h3/>
<h3>npm install --save-dev jest <h3/>
<h3>npm install --save-dev jest-html-reporter <h3/>

## Para a execução do teste alterei o nome padrão do Test do Package.json para Jest
>"scripts": {
    "test": "jest"
  },
  
 
## Usei jest-html-reporter para ter um melhor monitoramento do meu codigo
"jest": { 
    "reporters": 
    [ "default",
    [ "./node_modules/jest-html-reporter", { "pageTitle": "Test Report", "includeFailureMsg": true}]
  ]
}
}

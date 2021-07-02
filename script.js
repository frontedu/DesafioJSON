//DADOS PARA O FORMUÁRIO
let data = [
  {
    "name": "faleconosco",
    "method": "get",
    "action": "enviado.html",
    "autocomplete": true,
    "items": [
       {
          "element": "input",
          "type": "text",
          "name": "nome",
          "placeholder": "Digite seu nome",
          "id": "nome"
       },
       {
          "element": "input",
          "type": "text",
          "name": "cpf",
          "placeholder": "Digite seu cpf",
          "id": "cpf"
       },
       {
          "element": "select",
          "name": "gender",
          "children": [
             {
                "element": "option",
                "value": "F",
                "innerhtml": "Feminino"
             },
             {
                "element": "option",
                "value": "M",
                "innerhtml": "Masculino"
             }
          ]
       },
       {
          "element": "input",
          "type": "text",
          "name": "endereco",
          "placeholder": "Endereço completo: ",
          "id": "endereco"
       },
       {
          "element": "input",
          "type": "text",
          "name": "celular",
          "placeholder": "Celular: (xx) xxxxx-xxxx",
          "id": "celular"
       },
       {
          "element": "input",
          "type": "radio",
          "value": "ADS",
          "name": "curso",
          "id": "ads",
          "poslabel": "Análise e Desenvolvimento de Sistemas"
       },
       {
          "element": "input",
          "type": "radio",
          "value": "EC",
          "name": "curso",
          "id": "ec",
          "poslabel": "Engenharia de Computação"
       },
       {
          "element": "input",
          "type": "checkbox",
          "value": "algoritmos",
          "name": "disciplinas",
          "id": "algoritmos",
          "poslabel": "Algoritmos e Lógica de Programação"
       },
       {
          "element": "input",
          "type": "checkbox",
          "value": "estruturas",
          "name": "disciplinas",
          "id": "estruturas",
          "poslabel": "Estruturas de Dados"
       },
       {
          "element": "input",
          "type": "submit",
          "value": "Enviar",
          "name": "enviar"
       }
    ]
 }
];

let input;
//GERAR FORMULÁRIO
function generate() {
  const prepform =
    '<form name="' +
    data[0].name +
    '" action="' +
    data[0].action +
    '" method="' +
    data[0].method +
    '" autocomplete="' +
    data[0].autocomplete +
    '">';
  document.write(prepform);
  byIndex();
  const appform = "</form>";
  document.write(appform);
}

//GERAR CAMPOS DO FORMULÁRIO
function byIndex() {
  for (index of data[0].items) {
    index.element == "select" ?
    (index.type = "select") : false;
    switch (index.type) {
      case "text":
        document.write(isText(index));
        break;
      case "radio":
        document.write(isRadio(index));
        break;
      case "select":
        document.write(isSelect(index));
        break;
      case "checkbox":
        document.write(isCheckbox(index));
        break;
      case "submit": case "button":
        document.write(isSubmit(index));
        break;
    }
  }
}

//GERAR CAMPOS DE INPUT TEXTO
let isText = (obj) => {
  input = '<label for="' + obj.id + '">';
  obj.prelabel ? (input += obj.prelabel) : false;
  input +=
    '</label><input type="text" id="' +
    obj.id +
    '" name="' +
    obj.name +
    '" placeholder="' +
    obj.placeholder +
    '"><br></br>';
  return input;
};

//GERAR CAMPOS DE INPUT RADIO
let isRadio = (obj) => {
  input =
    '<input type="radio" id="' +
    obj.id +
    '" name="' +
    obj.name +
    '" value="' +
    obj.value +
    '"><label for="' +
    obj.id +
    '">' +
    obj.poslabel +
    "</label><br>";
  return input;
};

//GERAR CAMPOS DE DROP-DOWN
let isSelect = (obj) => {
  input = '<label for="' + obj.name + '">';
  obj.prelabel ? (input += obj.prelabel) : false;
  input += '</label><select name="' +
  obj.name +'" id="' + obj.name + '">';
  for (option of index.children) {
    input +=
      '<option value="' + option.value + '">' +
      option.innerhtml + "</option>";
  }
  input += "</select><br><br>";
  return input;
};

//GERAR CAMPOS DE CHECKBOX
let isCheckbox = (obj) => {
  input =
    '<input type="checkbox" id="' +
    obj.id +
    '" name="' +
    obj.name +
    '" value="' +
    obj.value +
    '"><label for="' +
    obj.id +
    '">' +
    obj.poslabel +
    "</label><br>";
  return input;
};

//GERAR CAMPO SUBMIT
let isSubmit = (obj) => {
  input =
    '<br><input type="' +
    obj.type +
    '" name="' +
    obj.name +
    '" value="' +
    obj.value +
    '">';
  return input;
};
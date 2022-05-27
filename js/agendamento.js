function agendamento(){
  agenda();
}

function agenda(){
  let nome, horario, data, servico;

  nome = document.getElementById("nome").value;
  horario = document.getElementById("horario").value;
  data = document.getElementById("data").value;
  servico = document.getElementById("servico").value;

  agendarLocalStorage(nome, horario, data, servico);
}

function agendarLocalStorage(nome, horario, data, servico){
	if(nome === '' || horario === '' || data === ''){
		alert("Todos os campos precisam ser preenchidos!!");
	}
	else{
		key = data + horario;
		agendamento = `Nome:${nome}, <b>Horario:${horario}:00</b>, <b> Data:${data}</b>, Serviço:${servico} <hr> <br> <br> `;
	  localStorage.setItem(key,agendamento)
	  alert("Salvo com sucesso!")
	  window.location.href = "index.html";
	}
}

function procurarAgendamento(){
	console.log(localStorage.getItem(key))
}

function listarAgendados(){
  locale = JSON.stringify(localStorage).replace(/"/g, '');
  localeSplit = locale.split("\\");

  var div = document.getElementById("agenda");
             
  div.innerHTML = localeSplit;
}

function listarAgendado(){
  locale = JSON.stringify(localStorage.getItem(keyFind())).replace(/"/g, '');
  localeSplit = locale.split("\\");

  var div = document.getElementById("agenda");
             
  div.innerHTML = localeSplit;

}

function excluirAgendado(){
  localStorage.removeItem(keyFind());
  alert("Excluido com sucesso")
}

function excluirAgendados(){
  localStorage.clear()
  alert("Todos os agendamentos foram exclusos")
}

function keyFind(){
	keyData = document.getElementById("key_data").value;
	keyHora = document.getElementById("key_hora").value;
	return keyData+keyHora;
}


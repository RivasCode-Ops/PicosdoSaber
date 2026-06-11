document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
  }

  var form = document.getElementById('form-pre-matricula');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (typeof WHATSAPP_NUMBER === 'undefined' || WHATSAPP_NUMBER === '558699999999') {
        alert('Contato temporariamente indisponível. Ligue ou envie WhatsApp para o número da escola.');
        return;
      }

      var responsavel = document.getElementById('responsavel').value.trim();
      var aluno = document.getElementById('aluno').value.trim();
      var serie = document.getElementById('serie').value;
      var dificuldade = document.getElementById('dificuldade').value;
      var turno = document.getElementById('turno').value;
      var telefone = document.getElementById('telefone').value.trim();
      var observacoes = document.getElementById('observacoes').value.trim();

      if (!responsavel || !aluno || !serie || !dificuldade || !turno || !telefone) {
        alert('Preencha todos os campos obrigatórios.');
        return;
      }

      var msg = '*Pré-matrícula - Picos do Saber*\n';
      msg += 'Origem: Site\n';
      msg += 'Responsável: ' + responsavel + '\n';
      msg += 'Aluno: ' + aluno + '\n';
      msg += 'Série: ' + serie + '\n';
      msg += 'Dificuldade: ' + dificuldade + '\n';
      msg += 'Turno: ' + turno + '\n';
      msg += 'WhatsApp: ' + telefone;
      if (observacoes) {
        msg += '\nObservações: ' + observacoes;
      }

      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }
});

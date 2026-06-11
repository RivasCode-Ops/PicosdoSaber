var WHATSAPP_NUMBER = '558699999999'; // trocar pelo número com DDI e sem '+' ou espaços

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
  }

  var header = document.querySelector('.header--transparent');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });
  }

  var form = document.getElementById('form-pre-matricula');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var responsavel = document.getElementById('responsavel').value.trim();
      var aluno = document.getElementById('aluno').value.trim();
      var serie = document.getElementById('serie').value;
      var turno = document.getElementById('turno').value;
      var telefone = document.getElementById('telefone').value.trim();
      var observacoes = document.getElementById('observacoes').value.trim();

      if (!responsavel || !aluno || !serie || !turno || !telefone) {
        alert('Preencha todos os campos obrigatórios.');
        return;
      }

      var msg = '*Pré-matrícula - Picos do Saber*\n';
      msg += 'Responsável: ' + responsavel + '\n';
      msg += 'Aluno: ' + aluno + '\n';
      msg += 'Série: ' + serie + '\n';
      msg += 'Turno: ' + turno + '\n';
      msg += 'WhatsApp: ' + telefone;
      if (observacoes) {
        msg += '\nObservações: ' + observacoes;
      }

      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }
});

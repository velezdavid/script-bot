(function () {
  function initChat() {
    const chatWidget = document.getElementById('mi-chatbot-widget');
    const toggleButton = document.getElementById('toggle-chat');
    const messages = document.getElementById('messages');
    const input = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-btn');

    let isOpen = false;

    toggleButton.onclick = () => {
      chatWidget.style.transform = isOpen ? 'translateY(400px)' : 'translateY(0)';
      isOpen = !isOpen;
    };

    sendButton.onclick = async (e) => {
      e.preventDefault();
      const userMessage = input.value.trim();
      if (!userMessage) return;

      const userMsg = document.createElement('div');
      userMsg.innerText = 'Tú: ' + userMessage;
      userMsg.style.textAlign = 'right';
      messages.appendChild(userMsg);
      input.value = '';
      messages.scrollTop = messages.scrollHeight;

      try {
        const N8N_WEBHOOK_URL = 'https://auto.eluniverso.com/webhook-test/c07bd5f4-7566-4d5f-b06f-103a3ca7863a';
        const res = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage }),
        });

        const data = await res.json().catch(() => ({}));
        const botMessage = data?.respuesta || data?.html || 'Estoy procesando tu consulta...';

        const botMsg = document.createElement('div');
        botMsg.innerText = 'Bot: ' + botMessage;
        botMsg.style.textAlign = 'left';
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      } catch (error) {
        const botMsg = document.createElement('div');
        botMsg.innerText = '❌ Error al conectar con el asistente.';
        botMsg.style.textAlign = 'left';
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      }
    };
  }

  if (document.body) {
    initChat();
  } else {
    window.addEventListener('DOMContentLoaded', initChat);
  }
})();
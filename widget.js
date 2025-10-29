(function() {
  function initWidget() {
    // ======= Código del widget =======
    const chatContainer = document.createElement('div');
    chatContainer.id = 'mi-chatbot-widget';
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '20px';
    chatContainer.style.right = '20px';
    chatContainer.style.width = '300px';
    chatContainer.style.height = '400px';
    chatContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    chatContainer.style.borderRadius = '10px';
    chatContainer.style.overflow = 'hidden';
    chatContainer.style.zIndex = '9999';
    chatContainer.style.transition = 'transform 0.3s ease';
    chatContainer.style.transform = 'translateY(380px)';
    chatContainer.style.backgroundColor = '#fff';
    document.body.appendChild(chatContainer);

    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Chat';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '-40px';
    toggleButton.style.right = '0';
    toggleButton.style.width = '60px';
    toggleButton.style.height = '40px';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '10px 10px 0 0';
    toggleButton.style.backgroundColor = '#007bff';
    toggleButton.style.color = '#fff';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontWeight = 'bold';
    chatContainer.appendChild(toggleButton);

    let isOpen = false;
    toggleButton.onclick = () => {
      chatContainer.style.transform = isOpen ? 'translateY(380px)' : 'translateY(0)';
      isOpen = !isOpen;
    };

    const chatBox = document.createElement('div');
    chatBox.style.width = '100%';
    chatBox.style.height = '100%';
    chatBox.style.display = 'flex';
    chatBox.style.flexDirection = 'column';
    chatBox.style.padding = '10px';
    chatBox.style.boxSizing = 'border-box';
    chatContainer.appendChild(chatBox);

    const messages = document.createElement('div');
    messages.style.flex = '1';
    messages.style.overflowY = 'auto';
    messages.style.marginBottom = '10px';
    chatBox.appendChild(messages);

    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    chatBox.appendChild(inputContainer);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Escribe un mensaje...';
    input.style.flex = '1';
    input.style.padding = '5px';
    inputContainer.appendChild(input);

    const sendButton = document.createElement('button');
    sendButton.innerText = 'Enviar';
    sendButton.style.marginLeft = '5px';
    sendButton.onclick = () => {
      if (input.value.trim() !== '') {
        const userMsg = document.createElement('div');
        userMsg.innerText = 'Tú: ' + input.value;
        userMsg.style.textAlign = 'right';
        messages.appendChild(userMsg);

        const botMsg = document.createElement('div');
        botMsg.innerText = 'Bot: Esto es un mensaje de prueba.';
        botMsg.style.textAlign = 'left';
        messages.appendChild(botMsg);

        input.value = '';
        messages.scrollTop = messages.scrollHeight;
      }
    };
    inputContainer.appendChild(sendButton);
  }

  // Si body ya existe, inicializamos
  if (document.body) {
    initWidget();
  } else {
    // Si no, esperamos a que el DOM se cargue
    window.addEventListener('DOMContentLoaded', initWidget);
  }
})();

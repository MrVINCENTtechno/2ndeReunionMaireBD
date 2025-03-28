// Données
const questions = [
  "1. Par quoi commence le projet et par quoi se termine-til ?",
  "2. Que faut-il faire et dans quel ordre ?", 
  "3. Que devons-nous livrer à Mr le Maire ?",
  "4. À quoi se limite précisément notre projet ?",
  "5. Que faut-il connaître ?",
  "6. Le Maire doit-il nous donner d'autres détails ?",
  "7. Combien de tâches ?",
  "8. Comment organiser les tâches ?",
  "9. Combien de temps chaque tâche va-t-elle prendre ?",
  "10. Quelles tâches faudra-t-il présenter au Maire et obtenir son accord pour continuer ?"
];

const answers = [
  "Je regrette mais tu es capable de répondre à cette question par toi même",
  "1. Réunion | 2. Ébauche | 3. Plan | 4. Vérification | 5. Présentation | 6. Réunion | 7. Choix terrain | 8. 3D | 9. Réunion finale",
  "Je regrette mais tu es capable de répondre à cette question par toi même",
  "Aucun travaux de construction. Seulement imaginer le projet et réaliser des représentations  (plans, vue 3D, maquettes etc..)",
  "les dimensions d'un conteneurs\n  ce que le logement et la résidence doivent avoir et comment tout doit fonctionner\n  les outils informatiques et le materiel nécessaires",
  "OUI !!! Le maire nous donnera les détails supplémentaires pendant les réunions.",
  "9 tâches",
  "Je regrette mais tu es capable de répondre à cette question par toi même",
  "Durée des tâches en nombre d'heure de cours (9h)\n  1.demi | 2.une | 3.deux| 4.demi | 5.demi | 6.demi | 7.une | 8.deux | 9.une",
  "2.Ebauche | 3.Plan d'aménagement | 8.Implantation géographique 3D"
];

const tasks = [
  "1. Réunion 'exigences et description fonctionnelle'",
  "2. Ébauche main levée",
  "3. Plan informatique",
  "4. Vérification conformité",
  "5. Présentation au Maire", 
  "6. Réunion 'Résidence Étudiante : solutions'",
  "7. Choix du terrain",
  "8. Modélisation 3D",
  "9. Présentation finale"
];

// Initialisation
// Initialisation des éléments DOM
const questionsContainer = document.getElementById('questions-container');
const responseBubble = document.getElementById('response-bubble');
const responseContent = document.getElementById('response-content');
const mayorGif = document.getElementById('mayor-gif');
const questionsColumn = document.querySelector('.questions-column');

// Création des bulles de questions
questions.forEach((question, index) => {
  const bubble = document.createElement('div');
  bubble.className = 'question-bubble';
  bubble.innerHTML = `<p class="question-text">${index + 1}. ${question}</p>`;
  bubble.addEventListener('click', () => showResponse(index));
  questionsContainer.appendChild(bubble);
});

// Fonction pour afficher les réponses
function showResponse(index) {
  // Animation du maire
  mayorGif.src = 'maire-speak.gif';
  mayorGif.classList.add('shake');
  
  // Affichage de la réponse
  responseBubble.classList.remove('hidden');
  
  if (seul[index]) {
    responseContent.innerHTML = 'Je regrette mais tu es capable de répondre à cette question par toi même.';
  } else if (index === 1) {
    responseContent.innerHTML = `
      <p>${answers[index]}</p>
      <button class="show-tasks-btn">Voir la liste complète des tâches</button>
    `;
    document.querySelector('.show-tasks-btn').addEventListener('click', showTasks);
  } else {
    responseContent.innerHTML = answers[index];
  }

  // Réinitialisation après 5 secondes
  setTimeout(() => {
    mayorGif.src = 'maire-silent.gif';
    mayorGif.classList.remove('shake');
    responseBubble.classList.add('hidden');
  }, 5000);
}

// Fonction pour afficher les tâches
function showTasks() {
  responseContent.innerHTML = `
    <p><strong>Liste complète des tâches :</strong></p>
    <ul class="tasks-list">
      ${tasks.map(task => `<li>${task}</li>`).join('')}
    </ul>
  `;
}

// Gestion du redimensionnement de la colonne
let isResizing = false;
let lastX = 0;
let startWidth = 0;

const resizeHandle = document.createElement('div');
resizeHandle.className = 'resize-handle';
questionsColumn.appendChild(resizeHandle);

// Événements pour le redimensionnement
resizeHandle.addEventListener('mousedown', (e) => {
  isResizing = true;
  lastX = e.clientX;
  startWidth = questionsColumn.offsetWidth;
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  
  const dx = e.clientX - lastX;
  const newWidth = startWidth + dx;
  
  // Limites de redimensionnement
  const minWidth = 250;
  const maxWidth = window.innerWidth * 0.5;
  
  if (newWidth >= minWidth && newWidth <= maxWidth) {
    questionsColumn.style.width = `${newWidth}px`;
  }
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }
});

// Animation de secousse
function animateGif() {
  mayorGif.classList.add('shake');
  setTimeout(() => {
    mayorGif.classList.remove('shake');
  }, 500);
}

// Initialisation
responseBubble.classList.add('hidden');
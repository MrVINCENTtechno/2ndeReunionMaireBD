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
  "Aucun travaux de construction. Seulement imaginer le projet et réaliser des représentations (plans, vue 3D, maquettes etc..)",
  "les dimensions d'un conteneurs<br>ce que le logement et la résidence doivent avoir et comment tout doit fonctionner<br>les outils informatiques et le materiel nécessaires",
  "OUI !!! Le maire nous donnera les détails supplémentaires pendant les réunions.",
  "9 tâches",
  "Je regrette mais tu es capable de répondre à cette question par toi même",
  "Durée des tâches en nombre d'heure de cours (9h)<br>1.demi | 2.une | 3.deux| 4.demi | 5.demi | 6.demi | 7.une | 8.deux | 9.une",
  "2.Ebauche | 3.Plan d'aménagement | 8.Implantation géographique 3D"
];

const tasks = [
  "1. Réunion 'exigences et description fonctionnelle'<br>discuter de ce que le logement doit avoir et comment tout doit fonctionner",
  "2. Ebauche<br>dessiner à la main une ébauche et la montrer au maire",
  "3. Plan d'aménagement<br>réaliser l'aménagement avec un outil de description informatique",
  "4. Vérification<br>Vérifier qu'il n'y ait aucun écart entre le travail réalisé et les exigences",
  "5. Présentation<br>Présenter au maire son plan d'aménagement", 
  "6. Réunion 'Résidence Étudiante : solutions'<br>Définir les bases de notre résidence étudiante",
  "7. Choix du terrain<br>Utiliser des cartes géographiques, des maquettes et Internet pour choisir le terrain",
  "8. Implantation géographique 3D<br>Implanter la résidence sur le terrain avec un outil de modélisation 3D",
  "9. Réunion 'Présentation finale'<br>Présenter au maire sa réalisation finale"
];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  const questionsContainer = document.getElementById('questions-container');
  const responseBubble = document.getElementById('response-bubble');
  const responseContent = document.getElementById('response-content');
  const mayorGif = document.getElementById('mayor-gif');
  const tasksPopup = document.getElementById('tasks-popup');
  const tasksList = document.getElementById('tasks-list');
  const closePopupBtn = document.querySelector('.close-popup');

  // Création des questions
  questions.forEach((question, index) => {
    const bubble = document.createElement('div');
    bubble.className = 'question-bubble';
    bubble.innerHTML = `<p class="question-text">${question}</p>`;
    bubble.addEventListener('click', () => showAnswer(index));
    questionsContainer.appendChild(bubble);
  });

  // Fonction pour afficher les réponses
  function showAnswer(index) {
    mayorGif.src = 'maire-speak.gif';
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
      responseContent.innerHTML = answers[index].replace(/<br>/g, '<br>');
    }

    setTimeout(() => {
      mayorGif.src = 'maire-silent.gif';
      responseBubble.classList.add('hidden');
    }, 8000);
  }

  // Fonction pour afficher le popup des tâches
  function showTasks() {
    tasksList.innerHTML = tasks.map(task => 
      `<li>${task.replace(/<br>/g, '<br>')}</li>`
    ).join('');
    
    tasksPopup.classList.add('active');
    mayorGif.src = 'maire-speak.gif';
    
    setTimeout(() => {
      mayorGif.src = 'maire-silent.gif';
    }, 2000);
  }

  // Fermer le popup
  closePopupBtn.addEventListener('click', () => {
    tasksPopup.classList.remove('active');
  });

  // Fermer en cliquant à l'extérieur
  tasksPopup.addEventListener('click', (e) => {
    if (e.target === tasksPopup) {
      tasksPopup.classList.remove('active');
    }
  });
});

const seul = [true, false, false, false, false, false, false, false, false, false];
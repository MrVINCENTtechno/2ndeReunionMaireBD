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
  "Commencer par l'aménagement d'un conteneur. Et terminer par la livraison de plusieurs représentations (plan, vue 3D, maquette, etc..).",
  "1. Réunion | 2. Ébauche | 3. Plan | 4. Vérification | 5. Présentation | 6. Réunion | 7. Choix terrain | 8. 3D | 9. Réunion finale",
  "Fournir plusieurs représentations du projet de construction (plan, vue 3D, maquette, etc..)",
  "Aucun travaux de construction. Seulement imaginer le projet et réaliser des représentations  (plans, vue 3D, maquettes etc..)",
  "les dimensions d'un conteneurs\n  ce que le logement et la résidence doivent avoir et comment tout doit fonctionner\n  les outils informatiques et le materiel nécessaires",
  "OUI !!! Le maire nous donnera les détails supplémentaires pendant les réunions.",
  "9 tâches",
  "En repertoriant toutes les tâches à accomplir dans un diagramme de GANTT.",
  "Durée des tâches en nombre d'heure de cours (9h)\n  1.demi | 2.une | 3.deux| 4.demi | 5.demi | 6.demi | 7.une | 8.deux | 9.une",
  "2.Ebauche | 3.Plan d'aménagement | 8.Implantation géographique 3D"
];

const tasks = [
  "1. Réunion 'exigences et description fonctionnelle'\n",
  "2. Ébauche main levée",
  "3. Plan informatique",
  "4. Vérification conformité",
  "5. Présentation au Maire", 
  "6. Réunion solutions",
  "7. Choix du terrain",
  "8. Modélisation 3D",
  "9. Présentation finale"
];

// Initialisation
const questionsContainer = document.getElementById('questions-container');
const dialogueBox = document.getElementById('dialogue-box');
const mayorGif = document.getElementById('mayor-gif');

// Créer les boutons de questions
questions.forEach((question, index) => {
  const btn = document.createElement('button');
  btn.className = 'question-btn';
  btn.textContent = question;
  btn.onclick = () => showAnswer(index);
  questionsContainer.appendChild(btn);
});

// ... (conserve les mêmes données questions/answers/tasks)

function showAnswer(index) {
  // Démarrer l'animation
  const mayorGif = document.getElementById('mayor-gif');
  mayorGif.src = 'maire-speak.gif'; // Charger le GIF parlant
  
  // Afficher la réponse
  if (index === 1) {
    dialogueBox.innerHTML = `
      <p><strong>Réponse :</strong> ${answers[index]}</p>
      <button class="task-btn" onclick="showTasks()">Voir détails des tâches</button>
    `;
  } else {
    dialogueBox.innerHTML = `<p><strong>Réponse :</strong> ${answers[index]}</p>`;
  }
  
  // Maintenir l'animation pendant 3 secondes
  setTimeout(() => {
    mayorGif.src = 'maire-silent.gif'; // Revenir au GIF silencieux
  }, 8000);
}

// ... (conserve showTasks() inchangé)

function showTasks() {
  dialogueBox.innerHTML = `
    <p><strong>Liste des tâches :</strong></p>
    <ul>
      ${tasks.map(task => `<li>${task}</li>`).join('')}
    </ul>
  `;
}
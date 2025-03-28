// Données
const questions = [
  "1. Début et fin du projet ?",
  "2. Étapes dans l'ordre ?", 
  "3. Livrables pour le Maire ?",
  "4. Limites du projet ?",
  "5. Prérequis ?",
  "6. Détails supplémentaires ?",
  "7. Nombre de tâches ?",
  "8. Organisation des tâches ?",
  "9. Durée des tâches ?",
  "10. Tâches à valider ?"
];

const answers = [
  "Commencer par l'aménagement d'un conteneur. Et terminer par la livraison de plusieurs représentations (plan, vue 3D, maquette, etc..).",
  "1. Réunion | 2. Ébauche | 3. Plan | 4. Vérification | 5. Présentation | 6. Réunion | 7. Choix terrain | 8. 3D | 9. Réunion finale",
  "Plans, vues 3D, maquettes...",
  "Pas de construction, seulement conception",
  "Dimensions conteneur et besoins logement",
  "OUI ! Détails lors des réunions",
  "9 tâches",
  "Diagramme de GANTT",
  "Total 9h : demi-heure à 2h par tâche",
  "Ébauche, Plan, Implantation 3D"
];

const tasks = [
  "1. Réunion 'exigences'",
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
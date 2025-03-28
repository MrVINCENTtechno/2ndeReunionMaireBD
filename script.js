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
  "(1)Réunion, (2)Ébauche, (3)Plan, (4)Vérification, (5)Présentation, (6)Réunion, (7)Choix terrain, (8)3D, (9)Réunion finale",
  "Je regrette mais tu es capable de répondre à cette question par toi même",
  "Aucun travaux de construction. Seulement imaginer le projet et réaliser des représentations (plans, vue 3D, maquettes etc..)",
  "les dimensions d'un conteneurs<br>ce que le logement et la résidence doivent avoir et comment tout doit fonctionner<br>les outils informatiques et le materiel nécessaires",
  "OUI !!! Le maire nous donnera les détails supplémentaires pendant les réunions.",
  "9 tâches",
  "Je regrette mais tu es capable de répondre à cette question par toi même",
  "Durée des tâches en nombre d'heure (9h)<br>(1)30min, (2)1h, (3)2h, (4)30min, (5)30min, (6)30min, (7)1h, (8)2h, (9)1h",
  "(2)Ebauche, (3)Plan d'aménagement, (8)Implantation géographique 3D"
];

const tasks = [
  "<b>Réunion 'exigences et description fonctionnelle' </b>:<br>discuter de ce que le logement doit avoir et comment tout doit fonctionner",
  "<b>Ebauche</b> :<br>dessiner à la main une ébauche et la montrer au maire",
  "<b>Plan d'aménagement</b> :<br>réaliser l'aménagement avec un outil de description informatique",
  "<b>Vérification</b> :<br>Vérifier qu'il n'y ait aucun écart entre le travail réalisé et les exigences",
  "<b>Présentation</b> :<br>Présenter au maire son plan d'aménagement", 
  "<b>Réunion 'Résidence Étudiante - solutions' </b>:<br>Définir les bases de notre résidence étudiante",
  "<b>Choix du terrain</b> :<br>Utiliser des cartes géographiques, des maquettes et Internet pour choisir le terrain",
  "<b>Implantation géographique 3D</b> :<br>Implanter la résidence sur le terrain avec un outil de modélisation 3D",
  "<b>Réunion 'Présentation finale' </b>:<br>Présenter au maire sa réalisation finale"
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
    <ol>
      ${tasks.map(task => `<li style="margin-left: 0; padding-left: 0; text-align: left; list-style-position: outside;">${task}</li>`).join('')}
    </ol>
  `;
}
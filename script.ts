// Sélectionne leBoutonGriss différentes pages
const pageStatistique: HTMLElement | null = document.querySelector('.pageStatistique');
const pageAccueil: HTMLElement | null = document.querySelector('.pageAccueil');
const pageQuizz1: HTMLElement | null = document.querySelector('.pageQuizz1');
const pageQuizz2: HTMLElement | null = document.querySelector('.pageQuizz2');
const pageQuizz3: HTMLElement | null = document.querySelector('.pageQuizz3');
const pageQuizz4: HTMLElement | null = document.querySelector('.pageQuizz4');
const pageQuizz5: HTMLElement | null = document.querySelector('.pageQuizz5');

// Sélectionne les différents boutons

const boutonStatistiques: HTMLElement | null = document.querySelector('.boutonBlanc');
const boutonNomJoueur: HTMLElement | null = document.querySelector('.boutonNomDuJoueur');
const boutonCommencer: HTMLElement | null = document.querySelector('.boutonBlanc2');
const boutonRetour: HTMLElement | null = document.querySelector('.boutonGris');
const boutonSuivant: NodeListOf<HTMLElement> = document.querySelectorAll('.boutonSuivant');
const consolePrincipale: HTMLElement | null = document.querySelector('.consolePrincipale');
const logoIngo: NodeListOf<HTMLElement> = document.querySelectorAll('.logoInfo');

// Sélectionne les différents boutons de réponse
const réponse1: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.réponse1');
const réponse2: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.réponse2');
const réponse3: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.réponse3');
const réponse4: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.réponse4');
const bonneRéponse: NodeListOf<HTMLElement> = document.querySelectorAll('.bonneRéponse')
const boutonNomJoueurStats: HTMLElement | null = document.querySelector('.blocInformations .texteBoutonNomDuJoueurStats p');

// Sélectionne divers elements du fichier html
const ecranNoirQuestions: NodeListOf<HTMLElement> = document.querySelectorAll('.ecranNoirQuestions');
const symboleBouton: NodeListOf<HTMLElement> = document.querySelectorAll('.symbole');
const logoInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.logoInfo');
const timer: NodeListOf<HTMLElement> = document.querySelectorAll('.countdown');

// Par défaut, cache la page des statistiques et la première page du Quizz

if (pageStatistique && pageAccueil && pageQuizz1 && pageQuizz2 && pageQuizz3 && pageQuizz4 && pageQuizz5) {
  pageQuizz1.style.display = 'none';
  pageQuizz2.style.display = 'none';
  pageQuizz3.style.display = 'none';
  pageQuizz4.style.display = 'none';
  pageQuizz5.style.display = 'none';
  pageStatistique.style.display = 'none';
  pageAccueil.style.display = 'flex';
}

// Ajoute un eventListener au bouton "boutonStatistiques" pour accèder à la page Statistique
if (boutonStatistiques != null) {
  boutonStatistiques.addEventListener('click', () => {

    // Affiche la page des statistiques et fait disparaître la page Accueil 
    if (pageStatistique && pageAccueil) {
      pageStatistique.style.display = 'flex';
      pageAccueil.style.display = 'none';
    }
  });
}

// Ajoute un eventListener au bouton "boutonNomJoueur" et remplace le texte par un champs pour écrire son pseudo
if (boutonNomJoueur != null && boutonNomJoueurStats != null) {
  boutonNomJoueur.addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Nom du Joueur';
    input.maxLength = 12;
    input.classList.add('boutonNomDuJoueur');
    input.style.border = 'none';
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        boutonNomJoueur.textContent = input.value;
        input.parentNode?.replaceChild(boutonNomJoueur, input);

        // Changer le texte dans la balise <p>Nom du joueur:</p> dans la pageStatistique

        boutonNomJoueurStats.textContent = input.value;
      }
    });
    boutonNomJoueur.parentNode?.replaceChild(input, boutonNomJoueur);

    input.focus();
  });
}


// Ajoute un eventListener au bouton "boutonRetour" pour revenir à la page précédente
if (boutonRetour != null) {
  boutonRetour.addEventListener('click', () => {

    // Affiche la page Accueil et fait disparaître la page des statistiques 
    if (pageStatistique && pageAccueil) {
      pageStatistique.style.display = 'none';
      pageAccueil.style.display = 'flex';
    }
  });
}

// Ajoute un eventListener pour démarrer le Quizz
if (boutonCommencer != null) {
  boutonCommencer.addEventListener('click', () => {

    // Affiche la première page du quizz et fait disparaître la page Accueil
    if (pageQuizz1 && pageAccueil) {
      pageQuizz1.style.display = 'flex';
      pageAccueil.style.display = 'none';
      resetQuizz()
    }
  });
}

// Différentes fonctions pour appliquer/reset le style des elements (il aurait été mieu de créer des classe css appropriés)

function mauvaiseReponse(
  reponseButton: HTMLButtonElement,
  symboleBouton: HTMLElement,
  autresReponses: HTMLButtonElement[],
  ecranNoirQuestions: HTMLElement,
  bonneReponse: HTMLElement,
  logoInfo: HTMLElement,
  boutonSuivant: HTMLElement,
  timer: HTMLElement
) {
  reponseButton.style.display = 'flex';
  reponseButton.style.backgroundColor = '#CE5858';
  symboleBouton.style.backgroundColor = '#CE5858';
  autresReponses.forEach(reponse => reponse.style.display = 'none');
  ecranNoirQuestions.style.flexDirection = 'Column';
  bonneReponse.style.display = 'flex';
  logoInfo.style.display = 'flex';
  boutonSuivant.style.display = 'flex';
  timer.style.color = '#CE5858';
}

function bonneReponseFn(
  reponseButton: HTMLButtonElement,
  symboleBouton: HTMLElement,
  autresReponses: HTMLButtonElement[],
  ecranNoirQuestions: HTMLElement,
  bonneReponse: HTMLElement,
  logoInfo: HTMLElement,
  boutonSuivant: HTMLElement,
  timer: HTMLElement
) {
  reponseButton.style.backgroundColor = '#81AC57';
  symboleBouton.style.backgroundColor = '#81AC57';
  ecranNoirQuestions.style.flexDirection = 'Column';
  bonneReponse.style.display = 'flex';
  logoInfo.style.display = 'flex';
  boutonSuivant.style.display = 'flex';
  timer.style.color = '#81AC57';
  autresReponses.forEach(reponse => reponse.style.display = 'none');
}

function resetQuizz() {
  réponse1.forEach(réponse => {
    réponse.style.display = '';
    réponse.style.backgroundColor = '';
  });

  réponse2.forEach(réponse => {
    réponse.style.display = '';
    réponse.style.backgroundColor = '';
  });

  réponse3.forEach(réponse => {
    réponse.style.display = '';
    réponse.style.backgroundColor = '';
  });

  réponse4.forEach(réponse => {
    réponse.style.display = '';
    réponse.style.backgroundColor = '';
  });

  symboleBouton.forEach(symbole => {
    symbole.style.backgroundColor = '';
  });

  ecranNoirQuestions.forEach(ecran => {
    ecran.style.flexDirection = '';
  });

  bonneRéponse.forEach(bonneRéponse => {
    bonneRéponse.style.display = '';
  });

  logoInfo.forEach(logo => {
    logo.style.display = '';
  });

  boutonSuivant.forEach(bouton => {
    bouton.style.display = '';
  });

  timer.forEach(timer => {
    timer.style.color = '';
  });
}


// Question/réponse 1

for (let i = 0; i < réponse1.length; i++) {
  réponse1[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse1[i],
      symboleBouton[i],
      [réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 0; i < réponse2.length; i++) {
  réponse2[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse2[i],
      symboleBouton[i],
      [réponse1[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 0; i < réponse3.length; i++) {
  réponse3[i].addEventListener('click', () => {
    bonneReponseFn(
      réponse3[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 0; i < réponse4.length; i++) {
  réponse4[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse4[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 0; i < boutonSuivant.length; i++) {
  boutonSuivant[i].addEventListener('click', () => {
    if (pageQuizz1 && pageQuizz2) {
      pageQuizz2.style.display = 'flex';
      pageQuizz1.style.display = 'none';
    }
  });
}

// Question/réponse 2

for (let i = 1; i < réponse1.length; i++) {
  réponse1[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse1[i],
      symboleBouton[i],
      [réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 1; i < réponse2.length; i++) {
  réponse2[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse2[i],
      symboleBouton[i],
      [réponse1[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 1; i < réponse3.length; i++) {
  réponse3[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse3[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 1; i < réponse4.length; i++) {
  réponse4[i].addEventListener('click', () => {
    bonneReponseFn(
      réponse4[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 1; i < boutonSuivant.length; i++) {
  boutonSuivant[i].addEventListener('click', () => {
    if (pageQuizz3 && pageQuizz2) {
      pageQuizz3.style.display = 'flex';
      pageQuizz2.style.display = 'none';
    }
  });
}

// Question/réponse 3

for (let i = 2; i < réponse1.length; i++) {
  réponse1[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse1[i],
      symboleBouton[i],
      [réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 2; i < réponse2.length; i++) {
  réponse2[i].addEventListener('click', () => {
    bonneReponseFn(
      réponse2[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 2; i < réponse3.length; i++) {
  réponse3[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse3[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 2; i < réponse4.length; i++) {
  réponse4[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse4[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 2; i < boutonSuivant.length; i++) {
  boutonSuivant[i].addEventListener('click', () => {
    if (pageQuizz4 && pageQuizz3) {
      pageQuizz4.style.display = 'flex';
      pageQuizz3.style.display = 'none';
    }
  });
}

// Question/réponse 4

for (let i = 3; i < réponse1.length; i++) {
  réponse1[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse1[i],
      symboleBouton[i],
      [réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 3; i < réponse2.length; i++) {
  réponse2[i].addEventListener('click', () => {
    bonneReponseFn(
      réponse2[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 3; i < réponse3.length; i++) {
  réponse3[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse3[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 3; i < réponse4.length; i++) {
  réponse4[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse4[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 3; i < boutonSuivant.length; i++) {
  boutonSuivant[i].addEventListener('click', () => {
    if (pageQuizz5 && pageQuizz4) {
      pageQuizz5.style.display = 'flex';
      pageQuizz4.style.display = 'none';
    }
  });
}

// Question/réponse 5

for (let i = 4; i < réponse1.length; i++) {
  réponse1[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse1[i],
      symboleBouton[i],
      [réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 4; i < réponse2.length; i++) {
  réponse2[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse2[i],
      symboleBouton[i],
      [réponse1[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 4; i < réponse3.length; i++) {
  réponse3[i].addEventListener('click', () => {
    bonneReponseFn(
      réponse3[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i], réponse4[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 4; i < réponse4.length; i++) {
  réponse4[i].addEventListener('click', () => {
    mauvaiseReponse(
      réponse4[i],
      symboleBouton[i],
      [réponse1[i], réponse2[i], réponse3[i]],
      ecranNoirQuestions[i],
      bonneRéponse[i],
      logoInfo[i],
      boutonSuivant[i],
      timer[i]
    );
  });
}

for (let i = 4; i < boutonSuivant.length; i++) {
  boutonSuivant[i].addEventListener('click', () => {
    if (pageQuizz5 && pageAccueil) {
      pageAccueil.style.display = 'flex';
      pageQuizz5.style.display = 'none';
    }
  });
}

////////////////////////



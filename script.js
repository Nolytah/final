let codeSecret = ['rond', 'carre', 'triangle'];
let tentative = [];

function selectionner(symbole) {
  tentative.push(symbole);
  if (tentative.length === 3) {
    verifierCode();
  }
}

function verifierCode() {
  let resultat = document.getElementById("resultat");
  resultat.className = "";

  if (JSON.stringify(tentative) === JSON.stringify(codeSecret)) {
    resultat.textContent = "Accès autorisé. Découvre ton numéro de joueur";
    resultat.classList.add("resultat-success");

    // Affiche le formulaire
    document.getElementById("formulaire").style.display = "block";
  } else {
    resultat.textContent = "Échec. Recommence.";
    resultat.classList.add("resultat-error");
    document.getElementById("formulaire").style.display = "none";
  }
  tentative = [];
}

function genererNumero() {
  let prenom = document.getElementById("prenom").value.trim().toLowerCase();
  let affichage = document.getElementById("numero-joueur");

  let numeroFinal = "";
  let joueurConnu = true;

  if (["deby", "déborah", "deborah"].includes(prenom)) {
    numeroFinal = "456";
  } else if (["lisa", "lisouille"].includes(prenom)) {
    numeroFinal = "067";
  } else if (["manu", "emmanuel"].includes(prenom)) {
    numeroFinal = Math.floor(Math.random() * (455 - 68 + 1)) + 68;
    numeroFinal = numeroFinal.toString().padStart(3, '0');
  } else if (["ana", "nana", "anaelle", "nanouille"].includes(prenom)) {
    affichage.style.color = "red";
    affichage.textContent = "Confidentiel";
    return;
  } else if (["yasmine", "yayou"].includes(prenom)) {
    numeroFinal = "218";
  } else {
    joueurConnu = false;
  }

  if (!joueurConnu) {
    affichage.style.color = "red";
    affichage.textContent = "Joueur inconnu";
    return;
  }

  // Lancer effet machine à sous avant d'afficher
  affichage.style.color = "white";
  let compteur = 0;
  let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * 999).toString().padStart(3, '0');
    affichage.textContent = "Joueur n° " + randomNum;
    compteur++;
    if (compteur > 20) {
      clearInterval(interval);
      affichage.textContent = "Joueur n° " + numeroFinal;
    }
  }, 80);
}

module.exports = (releaseNotes, context) => {
  // Définir previousVersion à partir de la version précédente
  context.previousVersion = context.lastRelease.version || ''; // Si la dernière version n'existe pas, il sera vide

  // Vérifier si c'est la première version du projet
  context.isFirstVersion = context.nextRelease.version === '1.0.0';

  // Retourner les notes de version sans modification (si vous avez une logique spécifique, vous pouvez la rajouter ici)
  return releaseNotes;
};

module.exports = (releaseNotes, context) => {
  // Exclude merge commits from release notes
  const filteredReleaseNotes = releaseNotes
    .split('\n')
    .filter(
      (line) =>
        !line.includes('Merge pull request') && !line.includes('Merge branch')
    )
    .join('\n');

  // Définir previousVersion à partir de la version précédente
  context.previousVersion = context.lastRelease.version || ''; // Si la dernière version n'existe pas, il sera vide

  // Vérifier si c'est la première version du projet
  context.isFirstVersion = context.nextRelease.version === '1.0.0';

  // Retourner les notes de version filtrées
  return filteredReleaseNotes;
};

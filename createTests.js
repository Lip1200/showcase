const fs = require("fs");
const path = require("path");

// Définir les chemins vers les composants
const componentsMainDir = path.join(__dirname, "components", "main");
const componentsSubDir = path.join(__dirname, "components", "sub");
const testDir = path.join(__dirname, "__tests__");

// Vérifie si le dossier de tests existe, sinon le crée
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir);
  console.log(`Création du répertoire de tests: ${testDir}`);
} else {
  console.log(`Répertoire de tests trouvé: ${testDir}`);
}

// Fonction pour créer un contenu de fichier de test pour chaque composant
function createTestFile(componentName, importPath) {
  return `import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from '${importPath}';

describe('${componentName}', () => {
  it('renders without crashing', () => {
    render(<${componentName} />);
  });
});
`;
}

// Fonction pour créer des fichiers de tests pour un dossier de composants donné
function generateTestsForDirectory(dirPath, importBasePath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Dossier non trouvé: ${dirPath}`);
    return;
  }

  fs.readdirSync(dirPath).forEach((file) => {
    if (
      file.endsWith(".js") ||
      file.endsWith(".jsx") ||
      file.endsWith(".tsx")
    ) {
      const componentName = file.split(".")[0];
      const testFilePath = path.join(testDir, `${componentName}.test.js`);
      const importPath = `${importBasePath}/${componentName}`;

      if (!fs.existsSync(testFilePath)) {
        fs.writeFileSync(
          testFilePath,
          createTestFile(componentName, importPath),
        );
        console.log(
          `Fichier de test généré pour le composant: ${componentName}`,
        );
      } else {
        console.log(
          `Fichier de test déjà existant pour le composant: ${componentName}`,
        );
      }
    } else {
      console.log(`Fichier ignoré (pas un composant): ${file}`);
    }
  });
}

// Générer les tests pour les composants dans les répertoires "main" et "sub"
generateTestsForDirectory(componentsMainDir, "@/components/main");
generateTestsForDirectory(componentsSubDir, "@/components/sub");

console.log("Script terminé.");

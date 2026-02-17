# 📱 NoteApp

> Application mobile de prise de notes, développée avec React Native, Expo et Expo Router.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

## 📖 Description

**NoteApp** est une application mobile de prise de notes simple et intuitive. Elle permet de :

- 📝 **Créer** des notes rapidement
- ✏️ **Modifier** le contenu d'une note existante
- 🗑️ **Supprimer** des notes
- 👁️ **Consulter** toutes ses notes en un coup d'œil

Les notes sont **sauvegardées localement** sur l'appareil grâce à `AsyncStorage`, ce qui permet de les retrouver même après avoir fermé l'application.

---

## 🛠️ Stack Technique

| Catégorie                   | Technologie                                        |
|-----------------------------|----------------------------------------------------|
| **Framework**               | React Native / Expo                                |
| **Routing**                 | Expo Router (navigation par fichiers)              |
| **Styling**                 | Styled-Components                                  |
| **Animations**              | React Native Reanimated & Gesture Handler          |
| **Stockage local**          | `@react-native-async-storage/async-storage`        |
| **Fonctionnalités natives** | Expo Haptics, Expo Blur, WebView, File System      |

---

## 📂 Architecture du Projet

La structure du projet suit les conventions d'Expo Router :
```text
NoteApp/
├── app/                    # Routes et écrans (Expo Router)
│   ├── (tabs)/             # Navigation par onglets (Bottom Tabs)
│   │   ├── index.tsx       # Écran principal — liste des notes
│   │   └── ...
│   └── _layout.tsx         # Layout racine de l'application
│
├── assets/                 # Fichiers statiques (images, polices)
├── components/             # Composants UI réutilisables
├── constants/              # Variables globales, couleurs, thèmes
├── context/                # État global (React Context Providers)
└── package.json            # Dépendances et scripts du projet
```

---

## 🚀 Installation & Lancement local

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) **v18 ou supérieur**
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — `npm install -g expo-cli`
- L'application **[Expo Go](https://expo.dev/client)** sur votre smartphone (iOS ou Android)

### Étapes

**1. Cloner le dépôt**
```bash
git clone https://github.com/brelnosse/noteApp.git
cd noteApp
```

**2. Installer les dépendances**
```bash
npm install
# ou yarn install / pnpm install
```

**3. Démarrer le serveur de développement**
```bash
npx expo start
```

**4. Tester sur votre mobile**

Scannez le QR code affiché dans le terminal :
- **iOS** → avec l'application Appareil photo
- **Android** → avec l'application Expo Go

---

## 📦 Build & Déploiement

Pour générer un fichier exécutable (`.apk` pour Android) via **EAS Build** :
```bash
# 1. Se connecter à son compte Expo
eas login

# 2. Lancer la compilation pour Android
eas build --platform android --profile preview
```

> 💡 Pour un build iOS ou une publication sur les stores, consultez la [documentation EAS](https://docs.expo.dev/build/introduction/).

---

## 👨‍💻 Auteur

**Brel NOSSE** — Étudiant Ingénieur en Informatique

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brelnosse)


# 🎨 Tailwind v4 Themes

Un projet React avec Tailwind CSS v4 qui démontre 
le changement de thème dynamique via des variables CSS.

## 🚀 Fonctionnalités
   <img width="626" height="440" alt="image" src="https://github.com/user-attachments/assets/6158b8d0-e2b5-4b55-9f20-b5524956b770" />
<img width="670" height="428" alt="image" src="https://github.com/user-attachments/assets/8cbb2876-432e-429f-af6e-d45de03d50f4" />
<img width="687" height="474" alt="image" src="https://github.com/user-attachments/assets/caed3a32-d53b-4aae-9552-c05389ba39fa" />

- Changement de thème dynamique (Default / Midnight / Forest)
- Variables CSS avec couleurs personnalisées Tailwind v4
- Architecture basée sur les composants React
- Design responsive

## 🛠️ Technologies utilisées

- React
- Tailwind CSS v4
- Vite

## 📁 Structure du projet
src/
├── App.jsx        → composant principal + logique des thèmes
├── Module.jsx     → composant de contenu
└── index.css      → variables CSS + config Tailwind

## 💡 Comment ça fonctionne

Le changement de thème utilise `useEffect` + `setAttribute`
pour appliquer `data-theme` sur `<html>`,
ensuite les variables CSS changent toutes les couleurs instantanément.

## 📚 Inspiré de Tutoriel YouTube :https://www.youtube.com/watch?v=TaBYZtTWs-c

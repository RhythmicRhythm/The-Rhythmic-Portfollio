# 🎵 The Rhythmic Portfolio

**The Rhythmic Portfolio** is a vibrant, modern, and responsive portfolio platform built with React, Vite, Tailwind CSS, and Firebase. Designed to showcase user-generated content like images and posts in a visually engaging way, it allows users to create a dynamic portfolio or personal page with avatar selections and post previews.

---

## 🚀 Features

- ⚡ Fast development with **Vite**
- 🎨 Styled using **Tailwind CSS**
- 🔥 **Firebase** integration (Authentication / Firestore / Storage)
- 🧑‍🎤 Custom avatars for personalization
- 🖼️ Support for media-rich post previews
- 🌐 Deploy-ready on **Vercel**

---

## 📸 Preview

> *(Optional: Add a live link and screenshots/gifs here)*  
[Live Demo](https://therhythmicrhythm.vercel.app/)  
![Screenshot](./public/cover.png)

---

## 🛠️ Tech Stack

| Tech            | Description                             |
|-----------------|-----------------------------------------|
| React           | Frontend library for building UI        |
| Vite            | Build tool for lightning-fast dev       |
| Tailwind CSS    | Utility-first CSS framework             |
| Firebase        | Backend-as-a-Service (BaaS)             |

---

## 📂 Project Structure

```
The-Rhythmic-Portfollio/
├── public/              # Static assets (images, avatars, etc.)
├── src/                 # Main application source code
│   ├── App.jsx          # Main app component
│   ├── firebase-config.js # Firebase configuration
│   └── main.jsx         # App entry point
├── tailwind.config.js   # Tailwind CSS config
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

---

## 📦 Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/RhythmicRhythm/the-rhythmic-portfolio.git
cd the-rhythmic-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Add Firebase Configuration**

Create a `.env` file in the root and add your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Run the app**

```bash
npm run dev
```

---

## 🧪 Deployment

This app is configured for deployment on **Vercel**. Just connect your repo and set the build command as:

```
npm run build
```

And output directory as:

```
dist
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to suggest a feature or fix an issue, feel free to open a pull request.

---

## 📄 License

MIT License – Feel free to use and modify.

---

## 👤 Author

Built with passion by [TheRhythmicRhythm](https://github.com/RhythmicRhythm)
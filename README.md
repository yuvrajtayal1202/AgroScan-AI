# 🌿 AgroScan AI – Plant & Tree Disease Detection

AgroScan is a deep learning-powered web app that detects diseases in **plant and tree leaves** using computer vision.

Upload a leaf photo and get:
- Disease prediction
- Confidence level
- Treatment suggestions
- Visual explanation (coming soon)

---

## 🚀 Features

- Upload leaf images (crop or tree)
- Fast disease prediction using Transfer Learning (MobileNet)
- TensorBoard logs to track model performance
- Simple, clean, and mobile-friendly frontend
- Planned: Grad-CAM, user history, community tips, maps

---

## 🧠 Tech Stack

- **Frontend**: React + TailwindCSS
- **Backend**: FastAPI
- **Model**: TensorFlow + Keras (Transfer Learning)
- **Database**: Firebase / MongoDB
- **Deployment**: Render (backend), Vercel (frontend)

---

## 📂 Project Structure

```bash
AgroScan-AI/
├── backend/       # FastAPI app
├── frontend/      # React app
├── model/         # Training scripts + model file
├── data/          # Dataset or links
├── README.md

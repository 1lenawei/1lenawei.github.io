# Lenawei Safaris

**Adventures That Teach, Memories That Last**

Welcome to Lenawei Safaris, your premier educational safari company specializing in immersive wildlife experiences tailored for students and nature enthusiasts. Our safaris offer a unique blend of adventure and education, ensuring that every journey is both thrilling and enlightening.

---

## 🌍 **About Lenawei Safaris**

Lenawei Safaris is dedicated to providing high-quality safari experiences with an emphasis on conservation, education, and unforgettable adventures. Our tours are crafted to engage primary school students, educational institutions, and adventure seekers who want to explore Kenya’s breathtaking landscapes and wildlife.

### **Our Focus Areas**

- **Educational Safaris** - Learn about wildlife, conservation, and ecosystems firsthand.
- **Tailored Itineraries** - Designed for different age groups and interests.
- **Expert Guides** - Professional tour guides with deep knowledge of Kenya’s flora and fauna.
- **Safety First** - Well-organized tours with a strong focus on safety.
- **Eco-Friendly Tourism** - We support sustainable tourism and conservation efforts.

### **Meet Our Team**

Our passionate team consists of experienced safari guides, conservation experts, and travel coordinators committed to delivering the best educational experiences. Each team member brings a wealth of knowledge about Kenya’s wildlife, history, and culture.

- **Lucas Bell** – Director | Passionate about wildlife education and sustainable tourism.
- **Titus Gitonga** – Operations Manager | Ensures smooth logistics and top-notch service.
- **Lucy Kago** – Lead Tour Guide | Expert in Kenya’s biodiversity and student engagement.
- **Pauline Tamara** – Conservation Specialist | Focused on eco-tourism and sustainability.
- **Jackson Wachiuri** – Customer Relations | Dedicated to ensuring excellent client experiences.

---

## 📎 **Project Structure**

This repository contains all the necessary files to run the Lenawei Safaris website.

### **1️⃣ Frontend (User Interface)**

📚 `frontend/`

- `index.html` → Homepage
- `about.html` → About Us & Team Members
- `tours.html` → Safari Packages & Itineraries
- `gallery.html` → Photo Gallery
- `bookings.html` → Safari Booking Page
- `map.html` → Interactive Safari Map
- `testimonials.html` → Customer Reviews
- `blog.html` → Articles & Safari Insights
- `style.css` → Main Stylesheet (Fully responsive, mobile-friendly, and visually stunning)
- `script.js` → Interactive JavaScript (Animations, search functionality, form validation, and more)

📚 `assets/` → Stores images, PDFs, and media files

- `images/` → Safari landscapes, team members, gallery images
- `maps/` → Safari route maps
- `icons/` → Social media and navigation icons
- `itineraries/` → Downloadable safari PDFs (e.g., `3-day-safari.pdf`, `7-day-safari.pdf`)

### **2️⃣ Backend (Data & API Handling)**

📚 `backend/`

- `server.js` → Main backend file (Handles routes, database connection, and server setup)

📚 `routes/`

- `bookings.js` → Handles booking form submissions
- `itineraries.js` → Manages safari itineraries
- `testimonials.js` → Handles customer reviews

📚 `models/` → Defines database structures

- `Booking.js` → Booking model schema
- `Testimonial.js` → Testimonial model schema

### **3️⃣ Configuration & Security**

📚 `config/`

- `database.js` → MongoDB database connection setup

📚 `Root Files`

- `.gitignore` → Files to ignore in GitHub (includes `.env` for security)
- `README.md` → Project documentation (This file)
- `LICENSE` → Legal terms for the website
- `Dockerfile` → For deployment setup
- `package.json` → Node.js dependencies

---

## 🚀 **Installation & Setup**

### **🔹 Prerequisites**

- Node.js installed
- MongoDB database setup (Local or Cloud-based)
- GitHub repository cloned

### **🔹 Clone the Repository**

```bash
 git clone https://github.com/lenawe1/lenawe-safaris.git
 cd lenawe-safaris
```

### **🔹 Install Dependencies**

```bash
 npm install
```

### **🔹 Set Up Environment Variables**

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **🔹 Start the Server**

```bash
 npm start
```

The website will be available at `http://localhost:5000/`

---

## 📸 **Gallery Preview**

Check out our amazing safari moments captured in high-quality images: 

---

## 🗰 **Safari Itineraries**

We offer different itineraries suitable for students of all ages. You can download our most popular itineraries below:

📄 [**3-Day Safari Adventure**](assets/itineraries/3-day-safari.pdf)
📄 [**7-Day Wildlife Exploration**](assets/itineraries/7-day-safari.pdf)
📄 [**5-Day Cultural & Wildlife Tour**](assets/itineraries/5-day-safari.pdf)
📄 [**10-Day Ultimate Safari Experience**](assets/itineraries/10-day-safari.pdf)

---

## 📞 **Contact Us**

🏢 **Office Location:** Nairobi, Kenya\
📧 **Email:** [info@lenaweisafaris.com](mailto\:info@lenaweisafaris.com)\
📞 **Phone:** +254 700 123 456\
🌐 **Website:** [Lenawei Safaris](https://lenawe1.github.io/)\
📷 **Instagram:** [@lenaweiedutours\_254](https://www.instagram.com/lenaweiedutours_254/)\
📚 **Facebook:** [Lucas Bell](https://www.facebook.com/LucasBell)\
💌 **WhatsApp:** +254 700 123 456

---

## ⚖️ **License**

This project is licensed under the **MIT License** - See the `LICENSE` file for details.

## 🙌 **Contributions**

We welcome contributions! If you’d like to improve this project, feel free to submit a pull request.

**Enjoy Your Safari with Lenawei Safaris!** 🦁🌿🌅


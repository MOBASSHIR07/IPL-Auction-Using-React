# IPL Auction Using React 🏏

A React-based web application that **simulates an IPL auction system**, allowing you to manage and interact with a dynamic list of cricket players.

---

## 🚀 Project Features

✅ Display player details (name, batting style, image)
✅ Add players in Team 
✅ Remove players interactively with a delete button  
✅ Modular React components for clean code reuse  
✅ Modern, responsive UI using Tailwind CSS  
✅ Smooth icon integration using Lucide React 
✅ Validation Check while adding Players

---

## 🏗️ Tech Stack

### 🔹 Frontend Framework
- **React**  
  A declarative, component-based JavaScript library for building interactive UIs.

### 🔹 JavaScript Language Features
- **ES6+**  
  - Arrow functions  
  - Destructuring assignment  
  - Template literals  
  - Import/export modules  
  - Functional programming patterns

### 🔹 Styling & UI
- **Tailwind CSS**  
  Utility-first CSS framework for rapid UI design.
- **Lucide React**  
  Icon library providing lightweight, customizable SVG icons (e.g., Trash2).

---
## 📦 Player Data (JSON Format)

This project uses player data stored in JSON format. Each player object includes details such as:

- `id`: Unique identifier (number)
- `name`: Player’s full name (string)
- `country`: Player’s country (string)
- `role`: Player’s primary role (string)
- `batting_style`: Batting style (string)
- `price`: Auction price in dollars (number)
- `image`: Profile image URL (string)

### Example JSON Entry:

```json
{
  "id": 1,
  "name": "Virat Kohli",
  "country": "India",
  "role": "Batsman",
  "batting_style": "Right-Hand-Bat",
  "price": 1700000,
  "image": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg"
}

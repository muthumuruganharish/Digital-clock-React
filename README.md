# 🕒 Digital Clock - React

A simple digital clock built with React that displays the current time in 12-hour format with AM/PM. It updates every second and uses `useEffect` and `useState` to manage the ticking logic.

---




## 🚀 Features

- Live time display updated every second
- 12-hour format with AM/PM indicator
- Leading zero formatting (e.g., 09:07:03 AM)
- Clean, centered layout using Flexbox
- Background image styling from local assets

---

## 🧠 How It Works

- `useState` manages the current time object.
- `useEffect` sets up a 1-second interval that updates the `time` state.
- A `timing()` function formats the time with leading zeros and handles 12-hour conversion.
- CSS Flexbox ensures the clock is centered on the screen.

---

## 🛠️ Tech Stack

- **React**
- **CSS**
- Local image assets (background)


---

## 🧪 Run Locally

```bash
git clone https://github.com/muthumuruganharish/Digital-clock-React.git
cd Digital-clock-React
npm install
npm start

---
### Demo Output
08:45:23 PM







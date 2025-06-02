# Vehicle Registration Project

This is a full-stack project that allows users to register vehicle information via a simple web interface.  
The backend is built with Node.js and Express, while the frontend uses HTML, CSS, and JavaScript.

> **Note:** This project was developed in Serbian as required — apologies to international readers!

---

## Features

- Responsive frontend form for entering vehicle data (year, engine power, engine capacity)  
- Backend API endpoint `/unosPodataka` to receive and process data  
- Real-time communication between frontend and backend  
- CORS enabled for cross-origin requests  
- Clean and minimal design  

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express.js, CORS middleware  

---

## How to Run

### Backend

1. Navigate to the `backend` folder:  
   `cd backend`  
2. Install dependencies:  
   `npm install`  
3. Start the backend server:  
   `node server.js`  

The backend will listen on port `3033`.

---

### Frontend

1. Open the `cilent/Registracija.html` file in your web browser (double-click or open with browser).  
2. The frontend sends data to the backend at `http://localhost:3033/unosPodataka`.

---

## API Usage

Send a POST request to `/unosPodataka` with JSON body like:  

`{ "godiste": 2010, "snaga": 150, "zapremina": 2000 }`  

Response example:  

`{ "godine": 2010, "snaga": 150, "zapremina": 2000 }`  

---

## Screenshot

![Frontend Screenshot](./screenshots/Registracija.JPG)

---


## About Me

Created by **Pavle Milenović** — feel free to reach out if you want to collaborate or have feedback!

---

## Contact

- GitHub: [https://github.com/Paycee](https://github.com/Paycee)  
- Email: pavle.milenovic@gmail.com  
- [Upwork](https://www.upwork.com/freelancers/~01c2e1c44b41bb7941?mp_source=share)
- [Freelancer](https://www.freelancer.com/u/pavlemilenovic?frm=pavlemilenovic&sb=t)

---

Thank you for checking out my project!  
Feel free to connect or ask questions.

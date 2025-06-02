# Vehicle Registration Project

This is a full-stack project that allows users to register vehicle information via a simple web interface.  
The backend is built with Node.js and Express, while the frontend uses HTML, CSS, and JavaScript.

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

1. Open the `frontend/index.html` file in your web browser (double-click or open with browser).  
2. The frontend sends data to the backend at `http://localhost:3033/unosPodataka`.

---

## API Usage

Send a POST request to `/unosPodataka` with JSON body like:  

`{ "godiste": 2010, "snaga": 150, "zapremina": 2000 }`  

Response example:  

`{ "godine": 2010, "snaga": 150, "zapremina": 2000 }`  

---

## Screenshot

![Frontend Screenshot](./frontend/screenshots/form.png)

---

## Author

Created by Pavle Milenović

Contact me for collaboration or feedback!

---

## Adding your project files to GitHub

If you want to add your full project (frontend + backend) to a new GitHub repository, follow these steps:

1. Open your terminal or command prompt and navigate to your project root directory:  
   `cd path/to/vehicle-registration`  
2. Initialize Git (if you haven't yet):  
   `git init`  
3. Add all files to staging area:  
   `git add .`  
4. Commit your changes:  
   `git commit -m "Initial commit with backend and frontend"`  
5. Create a new repository on GitHub (e.g. named `vehicle-registration`).  
6. Link your local repo to GitHub remote (replace with your GitHub repo URL):  
   `git remote add origin git@github.com:YourUsername/vehicle-registration.git`  
7. Push your code to GitHub:  
   `git push -u origin main`

---

If you want, I can also help you prepare `.gitignore` or suggest how to organize your files better.

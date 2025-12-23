Task Management Application

Tech Stack: React.js, Django REST Framework, JWT, MySQL

Features:

User Registration & Login

JWT Authentication

Task CRUD (user-specific)

Setup:

Backend

cd backend
pip install -r requirements.txt
# Configure MySQL in backend/settings.py
python manage.py migrate
python manage.py runserver


Frontend
cd frontend
npm install
npm start

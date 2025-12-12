# API & ROUTES Documentation

## 1. Web Routes (Frontend)

Опис: Це маршрути статичного сайту, які відповідають за відображення HTML‑сторінок без логіки сервера.

| Method | Route      | Description                 | File          |
|--------|------------|-----------------------------|----------------|
| GET    | `/`        | Головна сторінка сайту      | `index.html`   |
| GET    | `/login`   | Сторінка входу              | `login.html`   |
| GET    | `/registr` | Сторінка реєстрації         | `registr.html` |

---

## 2. API Endpoints (Demo / Mock)



Ці API ендпоінти є демонстраційними, оскільки backend не реалізовано.

| Method | Endpoint        | Description                  | Request Body Example                                    | Response Example                                   |
|--------|------------------|------------------------------|---------------------------------------------------------|-----------------------------------------------------|
| POST   | `/api/register`  | Реєстрація нового користувача | `{ "name": "User", "email": "a@mail.com", "password": "1234" }` | `{ "status": "ok", "message": "User created" }` |
| POST   | `/api/login`     | Логін користувача             | `{ "email": "a@mail.com", "password": "1234" }`                 | `{ "status": "ok", "token": "123abc" }`       |
| GET    | `/api/user`      | Отримати дані профілю         | Header: `Authorization: Bearer TOKEN`                   | `{ "id": 1, "email": "a@mail.com" }`           |

---


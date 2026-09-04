# ⚽ API Champions

> *"Some people think football is a matter of life and death. I assure you, it's much more serious than that."* — Bill Shankly
> *(Especially when your API returns a 500 error in stoppage time.)*

Welcome to **API Champions** — a small but mighty REST API built for football lovers, stats nerds, and anyone who has ever yelled at a referee.

This project lets you manage **players** and **clubs** with the elegance of TypeScript and the reliability of Express. No databases, no drama — just clean JSON data and fast endpoints.

---

## 🚀 What Does This Thing Do?

Think of it as the digital locker room for your favorite players and clubs:

- 🧑‍🦱 **Players**: list, search by ID, create, update stats, and delete (yes, even your least favorite striker).
- 🏟️ **Clubs**: browse the elite teams that make the Champions League worth watching.

All responses come wrapped in a friendly `httpResponse` format, so your frontend never has to guess what happened.

---

## 🛠️ Tech Stack

| Layer | Choice |
|-------|--------|
| Language | [TypeScript](https://www.typescriptlang.org/) — because life is too short for untyped variables |
| Framework | [Express.js](https://expressjs.com/) — fast, minimal, and gets the job done |
| Build Tool | [tsup](https://tsup.egoist.dev/) — bundles faster than a winger on the counter |
| Dev Runtime | [tsx](https://github.com/privatenumber/tsx) — instant TypeScript execution |
| CORS | Enabled, so your frontend can play nice |
| Data | Good old JSON files — no migrations, no headaches |

---

## 📂 Project Structure

```
api-champions/
├── src/
│   ├── app.ts                 # Express app factory
│   ├── server.ts              # Kickoff — where the magic begins
│   ├── routes.ts              # API route map
│   ├── controllers/           # Handle requests like a defensive midfielder
│   ├── services/              # Business logic (the coach's tactics)
│   ├── repositories/          # Data access layer
│   ├── models/                # TypeScript interfaces
│   ├── data/                  # Static JSON datasets
│   └── utils/                 # Helper functions
├── package.json
├── tsconfig.json
└── README.md                  # You are here! 🎉
```

---

## 🏁 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/api-champions.git
cd api-champions
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment

Create a `.env` file in the project root:

```env
PORT=3333
```

*(Feel free to pick any port that isn't already taken by your other side projects.)*

### 4. Run it

```bash
# Development mode with hot reload
npm run start:watch

# Or plain development mode
npm run start:dev
```

You should see something like:

```bash
🔥 Server running at port http://localhost:3333
```

If you see that, congratulations — you're on the pitch! ⚽

---

## 🔥 Available Endpoints

Base URL: `http://localhost:3333/api`

### Players

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/players` | List all players |
| GET | `/players/:id` | Get a specific player |
| POST | `/players` | Create a new player |
| PATCH | `/players/:id` | Update player statistics |
| DELETE | `/players/:id` | Remove a player from the squad |

### Clubs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/clubs` | List all clubs |

---

## 🧪 Example Requests

### Create a player

```bash
curl -X POST http://localhost:3333/api/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ada Goalmachine",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 89,
      "Shooting": 93,
      "Passing": 80,
      "Dribbling": 88,
      "Defending": 40,
      "Physical": 85
    }
  }'
```

### Update player stats

```bash
curl -X PATCH http://localhost:3333/api/players/1 \
  -H "Content-Type: application/json" \
  -d '{
    "Overall": 95,
    "Shooting": 96
  }'
```

### List all clubs

```bash
curl http://localhost:3333/api/clubs
```

---

## ⚙️ Scripts

| Script | What it does |
|--------|--------------|
| `npm run start:dev` | Runs the server in development mode |
| `npm run start:watch` | Runs with hot reload — save & see instantly |
| `npm run dist` | Bundles the project with `tsup` |
| `npm run start:dist` | Builds and runs the production bundle |

---

## 🧠 Why This Project?

This repo was built as a learning playground for:

- TypeScript + Express fundamentals
- Clean layered architecture (controllers → services → repositories)
- RESTful API design
- Hot-reload development workflow
- Pretending to manage a Champions League squad

---

## 🏆 Want to Contribute?

Pull requests are welcome! Whether you want to add more clubs, introduce a real database, or build a `/matches` endpoint — the pitch is yours.

Just remember: **no handballs, no offside traps, and always format your code.**

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).

Made with ⚽, ☕, and a little bit of TypeScript magic.

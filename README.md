# Symbooth Events App

Symbooth Event App is a web application designed for managing events, participants, and registrations for college events. The application is built using the MEVN stack - MongoDB, Express.js, Vue.js, and Node.js.
## Installation

1. Clone the repository 

```bash
git clone https://github.com/Prasannakulkarni471/EventApplication.git
```

2. Navigate to the project directory and install the dependencies for the backend and frontend

```bash
cd symbooth-event-app
cd frontend
npm install
cd ../backend
npm install
```

3. Create a .env file in backend directory with the following environment variables:

```bash
PORT=<MongoDB Connection Port> 
MONGO_URI=<MongoDB connection URI>
```

4. Start the server and client
# start server
cd frontend
npm run start
# start client
cd frontend
vue server




    
## Features

- User authentication and authorization using JWT token
- CRUD operations for events and participants
- User registration for events
## Tech Stack



**Vue.js:** Client-side JavaScript framework for building user interfaces

**MongoDB:** NoSQL database for storing data

**Express.js:** Server-side web framework for Node.js

**Node.js:** JavaScript runtime environment for server-side development

**Axios:** Promise-based HTTP client for the browser and Node.js


## Contributing

Contributions to the Symbooth Event App are welcome and encouraged! To contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature/feature-name)
3. Make changes and commit (git commit -m "Add feature-name")
4. Push changes (git push origin feature/feature-name)
5. Create a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)


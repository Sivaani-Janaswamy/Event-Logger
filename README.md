# Event Logger
This is a simple event logging application built with Node.js, Express, and MongoDB.
## Features
- Log events with timestamps    
- View logged events
- Delete events
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sivaani-Janaswamy/Event-Logger.git
   cd Event-Logger
   npm install
2. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```  
3. Start the server:
   ```bash
   npm run dev
   ```      
4. Open your browser and navigate to `http://localhost:5000`
## Usage
- Use the web interface to log, view, and delete events.
## Contributing 
Feel free to submit issues and pull requests.
## License
This project is licensed under the MIT License.
## Acknowledgements
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)        
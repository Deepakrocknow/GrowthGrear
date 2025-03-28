![Screenshot 2025-03-28 160146](https://github.com/user-attachments/assets/675d1728-c2d0-4aa5-bc6c-588fdc24b705)
![Screenshot 2025-03-28 151732](https://github.com/user-attachments/assets/89a5e513-fcd6-4ffd-89b9-1937850227a9)
![Screenshot 2025-03-28 151641](https://github.com/user-attachments/assets/dac90667-1398-4e8c-aadb-0be01def34ba)



# Gen AI Analytics Backend

## Setup Instructions

1. **Clone the Repository**:

   - Open your terminal and run:
   - 
      "https://github.com/Deepakrocknow/GrowthGrear"
     
2. **Navigate to the Backend Directory**:

   - Change into the backend directory:
     ```bash
     cd backend
     ```

3. **Install Dependencies**:

   - Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

4. **Start the Server**:
   - To start the server, run:
     ```bash
     npm run dev
     ```
   - This will start the server using `nodemon`, which automatically restarts the server when file changes are detected.

## API Endpoints and `curl` Commands

### POST /api/query

- **Description**: Accepts a natural language query and returns a mock response.
- **Headers**: `Authorization: Bearer mock-token`, `Content-Type: application/json`
- **Body**: `{ "query": "Your query here" }`
- **Response**: `{ "data": "Mock response for query: Your query here" }`

**Example `curl` Command**:

you can even do it with [ https://growth-grear-as7s.vercel.app/api/query ] instead of loacal host to view it


```bash
curl -X POST http://localhost:5000/api/query -H "Authorization: Bearer mock-token" -H "Content-Type: application/json" -d '{"query": "What is the sales data for Q1?"}'

you can even do it with [ https://growth-grear-as7s.vercel.app/api/query ] instead of loacal host to view it
POST /api/explain
Description: Returns a simulated query breakdown.
Headers: Authorization: Bearer mock-token, Content-Type: application/json
Body: { "query": "Your query here" }
Response: { "explanation": "Pseudo-SQL for query: Your query here" }
Example curl Command:

BASH

curl -X POST http://localhost:5000/api/explain -H "Authorization: Bearer mock-token" -H "Content-Type: application/json" -d '{"query": "What is the sales data for Q1?"}'
POST /api/validate
Description: Checks query feasibility.
Headers: Authorization: Bearer mock-token, Content-Type: application/json
Body: { "query": "Your query here" }
Response: { "isValid": true }
Example curl Command:

BASH

curl -X POST http://localhost:5000/api/validate -H "Authorization: Bearer mock-token" -H "Content-Type: application/json" -d '{"query": "What is the sales data for Q1?"}'
Testing Locally
Ensure your server is running on http://localhost:5000 before executing the curl commands.
You can test the endpoints using the provided curl commands in your terminal or use a tool like Postman for a more interactive experience.
Notes
Make sure to replace "Your query here" with the actual query you want to test.
The server should be running locally on port 5000, as specified in the server.js file.
If your application requires any environment variables, make sure to set them up in a .env file or directly in your environment.


This version of the README includes all the setup instructions, API details, and `curl` commands on a single page for easy reference. If you have any further questions or need additional assistance, feel free to ask!
```

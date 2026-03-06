import app from "./app.js";
import connectDB from "./configs/db.js";

const PORT = 8080;

const start = async () => {

  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

};

start();
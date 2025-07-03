import app from "./src/app.js";

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  // Log server status
  console.log(`Server running at http://localhost:${PORT} in ${NODE_ENV} mode`);
});

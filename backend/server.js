import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/mgnrega", async (req, res) => {
  try {
    let { state_name, district_name, fin_year } = req.query;

    if (!state_name || !district_name || !fin_year) {
      return res.status(400).json({ message: "Missing query parameters" });
    }

    state_name = state_name.trim().toUpperCase();
    district_name = district_name.trim().toUpperCase();

    const url = "https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722";

    const response = await axios.get(url, {
      params: {
        "api-key":
          process.env.API_KEY ||
          "579b464db66ec23bdd00000127fc0a52ed504ce97d2f06a9215afc52",
        format: "json",
        limit: 1,
        "filters[state_name]": state_name,
        "filters[district_name]": district_name,
        "filters[fin_year]": fin_year,
      },
      headers: { accept: "application/json" },
    });

    console.log("Sent filters:", { state_name, district_name, fin_year });

    if (!response.data.records?.length) {
      return res.status(404).json({
        message: "No data found for given filters",
        filters_used: { state_name, district_name, fin_year },
      });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: "Error fetching data" });
  }
});


// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}..........................`));

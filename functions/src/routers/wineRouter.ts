import { Router } from "express";
import {
  createWine,
  deleteWine,
  getAllWines,
  getWineById,
  updateWine,
} from "../controllers/wineController";

export const wineRouter = Router();

// Get all wines
wineRouter.get("/", getAllWines);

// Get wine by id
wineRouter.get("/:id", getWineById);

// Create a new wine
wineRouter.post("/", createWine);

// Update a wine
wineRouter.put("/:id", updateWine);

// Delete a wine
wineRouter.delete("/:id", deleteWine);

import express from "express";
import {
  createTable,
  deleteTable,
  getAllTables,
} from "../controller/table.controller.js";
import { isAuthenticated } from "../middleware.js/auth.middleware.js";
import { isAdmin } from "../middleware.js/admin.middleware.js";

const TableRouter = express.Router();

TableRouter.post("/create", createTable);
TableRouter.get("/all", getAllTables);
TableRouter.delete("/delete/:id", isAuthenticated, isAdmin, deleteTable);

export default TableRouter;
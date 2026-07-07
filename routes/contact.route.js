import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
} from "../controller/contact.controller.js";
import { isAuthenticated } from "../middleware.js/auth.middleware.js";
import { isAdmin } from "../middleware.js/admin.middleware.js";

const ContactRouter = express.Router();

ContactRouter.post("/create", createContact);
ContactRouter.get("/all", isAuthenticated, isAdmin, getAllContacts);
ContactRouter.delete("/delete/:id", isAuthenticated, isAdmin, deleteContact);

export default ContactRouter;
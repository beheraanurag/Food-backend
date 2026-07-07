import express from "express";
import { createFood, deleteFood, getAllFood, getSingleProduct, updateFood } from "../controller/food.controller.js";
import { isAdmin } from "../middleware.js/admin.middleware.js";
import { isAuthenticated } from "../middleware.js/auth.middleware.js";
import upload from "../middleware.js/upload.js";

const FoodRouter = express.Router();

FoodRouter.post(
    "/create",
    isAuthenticated,
    isAdmin,
    upload.single("image"),
    createFood,
);
FoodRouter.get("/all", getAllFood);
FoodRouter.get("/get-single/:id", getSingleProduct);
FoodRouter.delete("/delete/:id", isAuthenticated, isAdmin, deleteFood);
FoodRouter.put(
    "/update/:id",
    isAuthenticated,
    isAdmin,
    upload.single("image"),
    updateFood,
);

export default FoodRouter;


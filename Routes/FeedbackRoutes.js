import { createStudent,createAlumini,getAllUsers,createAdmin,} from "../controller/userController.js";
import { createCompany, getCompanies } from "../controller/companyController.js";
import { createReview,getAllReviews } from "../controller/reviewController.js";
import { likeReviews } from "../controller/likesController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router()

router.post("/admin/create",createAdmin)
router.post("/alumini/create",createAlumini)
router.post("/student/create",createStudent)
router.get("/user/get",getAllUsers)
router.post("/Company/create",isAdmin,createCompany)
router.get("/Company/get",getCompanies)
router.post("/review/create",createReview)
router.post("/like/create",likeReviews)

export default router;

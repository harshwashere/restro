const express = require("express");
const router = express.Router();
const {
  deleteUserById,
  getUsers,
  getAdminMenu,
  getUsersById,
  updateUsersById,
  getContact,
} = require("../controllers/admin-controllers");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);
router.route("/users").get(authMiddleware, adminMiddleware, getUsers);
router
  .route("/adminGetMenu")
  .get(authMiddleware, adminMiddleware, getAdminMenu);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUsersById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, updateUsersById)
  .get(authMiddleware, adminMiddleware, getUsersById);

router
  .route("/adminGetMenu/update/:id")
  .patch(authMiddleware, adminMiddleware, updateUsersById)
  .get(authMiddleware, adminMiddleware, getUsersById);

router.route("/contacts").get(authMiddleware, adminMiddleware, getContact);

module.exports = router;

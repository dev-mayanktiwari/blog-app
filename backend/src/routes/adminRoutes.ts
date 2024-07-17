// admin panel
import { Hono } from "hono";
const router = new Hono();

import { postBlog, editBlog } from "../controllers/admin.controller";

router.post("/postBlog", postBlog);
router.put("/editBlog", editBlog);

export default router;
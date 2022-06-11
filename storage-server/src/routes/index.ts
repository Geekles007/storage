import {Router} from "express";

const router = Router();

import {getProducts} from "./../controllers";

router.get("/products", getProducts);
router.use("/api/v1", router);

export default router;

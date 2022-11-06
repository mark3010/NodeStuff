import { Router } from "express";
import { main } from "../util/emails.js";

const router = Router();

router.post("/api/contact", (req, res) => {

    main(req.body.name, req.body.email, req.body.message)
    res.send("Thanks for the mail, kiddo");
});

export default router;
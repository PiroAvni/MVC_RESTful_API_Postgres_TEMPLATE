const { Router } = require("express");

const diaryController = require("../controllers/diary");

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
diaryRouter.post("/", diaryController.create);

diaryRouter.get("/:id", diaryController.show);
diaryRouter.patch("/:id", diaryController.update);
diaryRouter.delete("/:id", diaryController.destroy);

diaryRouter.get('/date/:year',diaryController.showYear)
diaryRouter.post('/category?',diaryController.getCategory)
diaryRouter.get('/categories/:category',diaryController.getCategory2)


module.exports = diaryRouter;

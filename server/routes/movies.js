import express from 'express';
import movieCtrl from "../controllers/movieCtrl";

const router = express.Router();

router.route("/").get(movieCtrl.welcome);

router.route("/search/:someText").get(movieCtrl.search);
router.route("/title/find/:someText").get(movieCtrl.findByTitle);
router.route("/get-top-rated-tv-shows").get(movieCtrl.getTopTvShows);
router.route("/details/:id").get(movieCtrl.getMovieDetail);
router.route("/reviews/:id").get(movieCtrl.getReviews);
router.route("/user-reviews/:id").get(movieCtrl.getUserReviews);
router.route("/casts/:id").get(movieCtrl.getCasts);
router.route("/character/:movieID/:characterID").get(movieCtrl.getCharacterInfo);

export default router;
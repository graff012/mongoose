import categoryRouter from "./category.route.js";
import movieRouter from "./movie.route.js";
import reviewRouter from "./review.route.js";
import userRouter from "./user.route.js";

const Routes = () => [categoryRouter, userRouter, movieRouter, reviewRouter];

export default Routes;

import { Router } from 'express';
import fetch from 'node-fetch';
import upload from './middleware/multer.js';
import { 
  postRecipe,
  getAllRecipes,
  getRecipe,
  putRecipe,
  deleteRecipe,
  postIngredient,
  getIngredients,
  getIngredient,
  putIngredient,
  deleteIngredient,
  uploadImages
} from '../controllers/MenuController.js';
import { postPlan, getPlans, putPlan, getRecipesFromDietAndServings, deletePlan, getPlanMenu, getRecipesFromPlan, storeMenu } from '../controllers/PricingController.js';
import { postDiet, getAllDiet, putDiet, deleteDiet } from '../controllers/DietController.js';
import {
  registerUser, login, postUser,
  logout, verifyToken, registerAdmin, adminLogin, findAdmin,
  putAdmin
} from '../controllers/AuthController.js';
import {
  getProfile, getUserPlan,
  choosePlan, getPlanInstance, setDeliveryInfo,
  getSelectedRecipes, selectRecipe,
  getUsers,
  getUser,
  putUser,
  deleteUser
} from '../controllers/UserController.js';
import { 
  postWeeklySelection, 
  getAllWeeklySelections,
  getweeklySelectionByDate,
  updateWeeklyCollection
} from '../controllers/WeeklySelectionController.js';
import {
  updatePolicy,
  getPolicy
} from '../controllers/AdminController.js';
import {
  getOrders, 
  postOrder
} from '../controllers/OrderController.js';
import {
  putArticle,
  deleteArticle,
  getArticle,
  postArticle,
  getArticles
} from '../controllers/ArticleController.js';
import {
  putDiscount,
  deleteDiscount,
  getDiscount,
  getDiscounts,
  postDiscount
} from '../controllers/DiscountController.js';
import { 
  updatePaymentSettings,
  getPaymentSettings
} from '../controllers/PaymentController.js';
import {
  getReviews,
  getReview,
  postReview,
  putReview,
  deleteReview
} from '../controllers/ReviewController.js';
import {
  getTips,
  getTip,
  postTip,
  putTip,
  deleteTip
} from '../controllers/TipController.js';
import {
  getComments,
  getComment,
  postComment,
  putComment,
  deleteComment
} from '../controllers/CommentController.js';

const router = Router();

// home route
// router.get('/', (req, res) => res.json({ message: 'This is Daily Recipe!!!' }));

// image upload route
router.post('/upload', upload.single('file'), uploadImages);

// auth routes
router.post('/api/auth/adminRegister', registerAdmin);
router.post('/api/auth/register', registerUser);
router.post('/api/auth/adminLogin', adminLogin);
router.post('/api/auth/login', login);
router.get('/api/auth/logout', logout);
router.get('/api/auth/admin/:id', findAdmin);
router.put('/api/auth/admin/:id', putAdmin);

// ingredient routes
router.put('/api/ingredients/:id', putIngredient);
router.get('/api/ingredients/:id', getIngredient);
router.delete('/api/ingredients/:id', deleteIngredient);
router.post('/api/ingredients', postIngredient);
router.get('/api/ingredients', getIngredients);

// menu routes
router.put('/api/menu/:id', putRecipe);
router.get('/api/menu/:id', getRecipe);
router.delete('/api/menu/:id', deleteRecipe);
router.post('/api/menu', postRecipe);
router.get('/api/menu', getAllRecipes);

// plans route
router.get('/api/plan/:diet/:servings', getRecipesFromDietAndServings);
router.put('/api/plan/menu', storeMenu);
router.put('/api/plan/:id', putPlan);
router.delete('/api/plan/:id', deletePlan);
router.get('/api/plan/:id', getRecipesFromPlan);
router.post('/api/plans', postPlan);
router.get('/api/plans', getPlans);

// diet route
router.put('/api/diet/:id', putDiet);
router.delete('/api/diet/:id', deleteDiet);
router.post('/api/diet', postDiet);
router.get('/api/diet', getAllDiet);

// weekly selection routes
router.post('/api/weekly', postWeeklySelection);
router.get('/api/weekly', getAllWeeklySelections);
router.get('/api/weekly/date/:startDate/:endDate', getweeklySelectionByDate);
router.put('/api/weekly', updateWeeklyCollection);

// policy routes
router.put('/api/policy', updatePolicy);
router.get('/api/policy', getPolicy);

// article routes
router.put('/api/articles/:id', putArticle);
router.delete('/api/articles/:id', deleteArticle);
router.get('/api/articles/:id', getArticle);
router.post('/api/articles', postArticle);
router.get('/api/articles', getArticles);

// order routes
// router.put();
// router.getone
// router.delete();
router.post('/api/orders', postOrder);
router.get('/api/orders', getOrders);

// reivew routes
router.put('/api/reviews/:id', putReview);
router.delete('/api/reviews/:id', deleteReview);
router.get('/api/reviews/:id', getReview);
router.get('/api/reviews', getReviews);
router.post('/api/reviews', postReview);

// tip routes
router.put('/api/tips/:id', putTip);
router.delete('/api/tips/:id', deleteTip);
router.get('/api/tips/:id', getTip);
router.get('/api/tips', getTips);
router.post('/api/tips', postTip);

// comment routes
router.put('/api/comments/:id', putComment);
router.delete('/api/comments/:id', deleteComment);
router.get('/api/comments/:id', getComment);
router.get('/api/comments', getComments);
router.post('/api/comments', postComment);

// discount routes
router.put('/api/discounts/:id', putDiscount);
router.delete('/api/discounts/:id', deleteDiscount);
router.get('/api/discounts/:id', getDiscount);
router.get('/api/discounts', getDiscounts);
router.post('/api/discounts', postDiscount);

// post or update payment settings
router.put('/api/payment-settings', updatePaymentSettings);
router.get('/api/payment-settings', getPaymentSettings);

// api user routes
router.put('/api/users/:id', putUser);
router.delete('/api/users/:id', deleteUser);
router.get('/api/users/:id', getUser);
router.post('/api/admin/users', postUser);
router.get('/api/users', getUsers);

// user routes
router.post('/api/users', registerUser);
router.use('/users', verifyToken);
router.get('/users/profile', getProfile);
router.get('/users/plan', getUserPlan);
router.get('/users/planInstance', getPlanInstance);
router.get('/users/recipes', getSelectedRecipes);
router.put('/users/recipes', selectRecipe);
router.post('/users/delivery', setDeliveryInfo);
router.post('/users/plan', choosePlan);
router.post('/users/pay', async (req, res) => {
  const d = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${process.env.SECRET_KEY}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  const data = await d.json();
  if (data && data.status) return res.status(201).send(data);
  return res.status(500).send({ error: data.message });
});

export default router;

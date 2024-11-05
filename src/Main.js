import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import WishlistPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
<<<<<<< HEAD
import QuestionsPage from "./pages/QuestionPage";
=======
import QuestionPage from "./pages/QuestionPage";
import NotFoundPage from "./pages/NotFoundPage";
>>>>>>> f3e52ebfa9d4e9b5cdec5f543c8c7eecae775b78

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path="616825" element={<QuestionPage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
<<<<<<< HEAD
          <Route path="questions" element={<QuestionListPage />} />
          <Route path="questions/616825" element={<QuestionsPage />} />
        </Routes>
      </App>
=======
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
>>>>>>> f3e52ebfa9d4e9b5cdec5f543c8c7eecae775b78
    </BrowserRouter>
  );
}

export default Main;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShareLayout, Home, PeopleIdea, Investor,Login, Signup,ProtectedRoute } from "./components/index";
import InvestorProfile from "./components/pages/investor/InvestorProfile";
import { Provider } from "react-redux";
import store from "./store/store" 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/people-idea" element={<PeopleIdea />} />
              <Route path="/investor" element={<Investor />} />
              <Route path="/investor-user" element={<InvestorProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

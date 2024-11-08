import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WalletMasterBalance from "./views/wallet-master-balance";
import WalletMasterEntity from "./views/wallet-master-entity";
import CreateEntityPage from "./views/wallet-master-entity/CreateEntityPage";

function App() {
  return (
    <Router>
      <Routes>
         <Route
          path="/"
          element={
            <>
              <WalletMasterEntity />
              <WalletMasterBalance />
            </>
          }
          />
        <Route path="/create-entity" element={<CreateEntityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
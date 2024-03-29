import { usePosts } from "./PostContext";
import Navbar from "./ui/Navbar";

import SearchBar from "./ui/SearchBar";
import HomePage from "./ui/HomePage";
import Loader from "./ui/Loader";

function App() {
  const { orderData, isRtl, isLoading } = usePosts();

  document.dir = isRtl ? "rtl" : "ltr";

  return (
    <div>
      <Navbar />
      <main className="px-20">
        <SearchBar />
        {isLoading && <Loader />}

        {!orderData || <HomePage />}
      </main>
    </div>
  );
}

export default App;

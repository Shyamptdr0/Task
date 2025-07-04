import Cards from "./components/Cards.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "@/store/PostSlice.js";
import PaginationPage from "@/components/PaginationPage.jsx";


function App() {
const dispatch = useDispatch()
const {allPosts, currentPage, removedId} = useSelector(state => state.posts)


    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch]);

const filerPosts = allPosts.filter(post => !removedId.includes(post.id))
    const postPage = 6;
const startIndex = (currentPage-1 )* postPage;
const visiblePosts = filerPosts.slice(startIndex, startIndex + postPage)


  return (
    <>
        <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
              visiblePosts.map(post =>(
                  <Cards key={post.id} post={post}/>
              ))
          }
      </div>
            <PaginationPage/>
        </div>
    </>
  )
}

export default App

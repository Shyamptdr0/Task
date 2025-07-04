import React from 'react';
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "@/store/PostSlice.js";


function PaginationPage() {
    const dispatch = useDispatch()
    const {allPosts, currentPage, removedId} = useSelector(state => state.posts)

    const postPage = 6;

    const totalPage = Math.ceil((allPosts.length - removedId.length)/postPage)

    const handlePage = (page) =>{
        if(page >=1 && page <= totalPage){
            dispatch(setPage(page))
        }
    }

    return (
       <Pagination>

               <PaginationContent>
                   <PaginationItem>
                       <PaginationPrevious onClick={() => handlePage(currentPage -1)} disabled={currentPage ===1} />
                   </PaginationItem>

                   <PaginationItem>
                       <PaginationLink >{currentPage}</PaginationLink>
                   </PaginationItem>

                   <PaginationItem>
                       <PaginationNext onClick={() => handlePage(currentPage +1)} disabled={currentPage === totalPage} />
                   </PaginationItem>
               </PaginationContent>

       </Pagination>
    );
}

export default PaginationPage;
import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {useDispatch} from "react-redux";
import {removePost} from "@/store/PostSlice.js";
import {Button} from "@/components/ui/button.jsx";


function Cards({post}) {
    const dispatch = useDispatch();
    const handleRemove = () =>{
        dispatch(removePost(post.id))
    }

    return (
        <Card className="relative">
            <Button size="sm"
            onClick={handleRemove}
                className="absolute top-2 right-3 cursor-pointer text-red-500">X</Button>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{post.body}</p>
            </CardContent>

        </Card>
    );
}

export default Cards;
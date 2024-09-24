import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export function getStars(rating){
const fullStart = <IoMdStar className="text-yellow-500" />
const halfStart = <IoMdStarHalf className="text-yellow-500" />
const emptyStart = <IoMdStar className="text-gray-300" />


const stars = []
for(let i = 0; i < Math.floor(rating); i++){
    stars.push(fullStart)

}
if(rating % 1 !== 0){
    stars.push(halfStart)
}
for(let i = stars.length; i < 5; i++){
    stars.push(emptyStart)
}
return stars;

}

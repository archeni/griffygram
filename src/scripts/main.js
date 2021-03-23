import { getPosts, getUsers } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}


const startGiffyGram = () => {
	showPostList();
}
// Are you defining the function here or invoking it?

// applicationElement.addEventListener("change", event => {
//   if (event.target.id === "yearSelection") {
//     const yearAsNumber = parseInt(event.target.value)
//     console.log(`User wants to see posts since ${yearAsNumber}`)
//     showFilteredPosts(yearAsNumber);
//   }
// })

const showFilteredPosts = (year) => {
  //get a copy of the post collection
  const epoch = Date.parse(`01/01/${year}`);
  //filter the data
  const filteredData = usePostCollection().filter(singlePost => {
    if (singlePost.timestamp >= epoch) {
      return singlePost
    }
  })
  const postElement = document.querySelector(".postList");
  postElement.innerHTML = PostList(filteredData);
}

startGiffyGram();
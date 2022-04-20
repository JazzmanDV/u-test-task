import Post from "./Post.js";

const NUMBER_OF_MOCK_POSTS = 7;

const mockPosts = [];

for (let i = 1; i <= NUMBER_OF_MOCK_POSTS; i++) {
    mockPosts.push(new Post(`Title ${i}`, `Content ${i}`));
}

export default mockPosts;

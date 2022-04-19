import Post from "./Post.js";

const NUM_OF_MOCK_POSTS = 5;

const mockPosts = [];

for (let i = 1; i <= NUM_OF_MOCK_POSTS; i++) {
    mockPosts.push(new Post(`Title ${i}`, `Content ${i}`));
}

export default mockPosts;

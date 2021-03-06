import { makeAutoObservable } from "mobx";

import Post from "./Post.js";
import mockPosts from "./mockPosts.js";

class PostsStore {
    posts = [];

    constructor(posts) {
        makeAutoObservable(this);
        this.posts = [...posts];
    }

    add(title, content) {
        this.posts.push(new Post(title, content));
    }

    update(post, title, content) {
        post.update(title, content);
    }

    delete(postToDelete) {
        this.posts = this.posts.filter((post) => post !== postToDelete);
    }
}

const postsStore = new PostsStore(mockPosts);

export default postsStore;

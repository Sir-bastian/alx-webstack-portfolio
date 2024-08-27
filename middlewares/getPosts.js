const Post = require('../models/Post');

/**
 * Function that get Users Post
 *  
 */
const getUserPosts = async (userId) => {
    try {
        const UserPosts = await Post.find({ author: userId });
        return UserPosts
    } catch (error) {
        console.error("Error fetching user posts:", error);
        throw error;
    }
};

// function that get other Users Posts.
const getOtherUsersPosts = async (userId) => {
    try {
        const OtherPosts = await Post.find({ author: { $ne: userId } });
        return OtherPosts
    } catch (error) {
        console.error("Error fetching other users' posts:", error);
        throw error;
    }
};



module.exports = {
    getUserPosts,
    getOtherUsersPosts
};
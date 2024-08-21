const carrierPost= require('../models/carrierPost');
const shippingPost = require('../models/shippingPost');

/**
 * Function that get Users Post
 *  
 */
const getUserPosts = async (userId) => {
    try {
        const shippingPosts = await shippingPost.find({ author: userId });
        const carrierPosts = await carrierPost.find({ author: userId });
        return { shippingPosts, carrierPosts };
    } catch (error) {
        console.error("Error fetching user posts:", error);
        throw error;
    }
};

// function that get other Users Posts.
const getOtherUsersPosts = async (userId) => {
    try {
        const otherShippingPosts = await shippingPost.find({ author: { $ne: userId } });
        const otherCarrierPosts = await carrierPost.find({ author: { $ne: userId } });
        return { otherShippingPosts, otherCarrierPosts };
    } catch (error) {
        console.error("Error fetching other users' posts:", error);
        throw error;
    }
};



module.exports = {
    getUserPosts,
    getOtherUsersPosts
};
import User from '../model/user.js';

// Function to list all Users
const userController = async(req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            res
                .status(500)
                .json({ message: 'Server error - No Users at the moment' });
        } else {
            res.status(200).json({
                message: `Total number of users is ${users.length}`,
                data: allUsers,
            });
        }
    } catch (error) {
        console.log('Error fetching all users:', error.message);
    }
};

export default userController
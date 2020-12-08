const { User, Task } = require('./models')

// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN "Tasks" ON "Tasks"."userId" = "Users".id;

// const findAllWithTasks = async () => {
//     const users = await User.findAll({
//         include: [{
//             model: Task
//         }]
//     });
//     console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
// }

// const run = async () => {
//     await findAllWithTasks()
//     await process.exit()
// }

// run()

const bulkCreateUser = [{
    firstName: 'user1',
    lastName: 'end1',
    email: 'demo@demo.com',
    password: '$321!pass!123$',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    firstName: 'user2',
    lastName: 'end2',
    email: 'demo@demo.com',
    password: '$321!pass!123$',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    firstName: 'user3',
    lastName: 'end3',
    email: 'demo@demo.com',
    password: '$321!pass!123$',
    createdAt: new Date(),
    updatedAt: new Date()
}];

const bulkCreateTask = [{
    title: 'Build an app',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: 'Build an app',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: 'Build an app',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
}];

(async () => {
    bulkCreateUser.map(async user => {
        const selectUser = await User.findAll({
            where: {
                firstName: user.firstName
            }
        })
        const userId = selectUser[0].id
        console.log(userId) // now use this id to create association with task 
    })
})()
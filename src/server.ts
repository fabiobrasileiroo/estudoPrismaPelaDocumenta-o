import { prisma } from "./client";

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Fabio',
  //     email: 'fabio12347@gmail.com',
  //     posts: {
  //       create:
  //         [
  //           {
  //             title: 'Join us for Prisma Day 2024',
  //             published: true
  //           },
  //           {
  //             title: 'My sencond post',
  //             content: 'This is still a draft'
  //           }
  //         ]
  //     },
  //   },
  // })
  // console.log("🚀 ~ main ~ user:", user)
  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);
  // const allUsersFiltre = await prisma.user.findMany(
  //   {
  //     where: { email: 'fabio' }
  //     // include: { posts: true }
  //   })
  // console.log("🚀 ~ main ~ allUsersFiltre:", allUsersFiltre)
  // const filtererPosts = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       { title: { contains: 'prisma' } },
  //       { content: { contains: 'prisma' } }
  //     ]
  //   }
  // })
  // console.log("🚀 ~ main ~ filtererPosts:", filtererPosts)
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  // console.log("🚀 ~ main ~ usersWithPosts:", usersWithPosts)
  console.dir(usersWithPosts, {depth: null})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect
    process.exit(1);
  });

# Dicas que aprendi

Se for um relacionanemto `n:n` por boas práticas seria bom criar uma nova tabela para relacionamento

ex:

``` prisma
model Post {
  id         Int                 @id @default(autoincrement())
  title      String
  categories CategoriesOnPosts[]
}

model Category {
  id    Int                 @id @default(autoincrement())
  name  String
  posts CategoriesOnPosts[]
}

model CategoriesOnPosts {
  post       Post     @relation(fields: [postId], references: [id])
  postId     Int
  category   Category @relation(fields: [categoryId], references: [id])
  categoryId Int
  assignedAt DateTime @default(now())
  assignedBy String

  @@id([postId, categoryId])
}
```

dicas de leitura: https://pt.stackoverflow.com/questions/221018/%C3%89-realmente-necess%C3%A1rio-criar-uma-3%C2%AA-tabela-auxiliar-em-relacionamentos-n-n
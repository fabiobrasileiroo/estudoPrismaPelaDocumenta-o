# Dicas que aprendi

Se for um relacionanemto `n:n` por boas práticas seria bom criar uma nova tabela para relacionamento

ex: explícito

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

Por boas práticas do prisma deve se usar há escrita a mais verbosa possivel pelo fato do prisma ja ser simplorio entre as relações

o ideal ainda é prática a cima

ex: implícito

``` prisma
model Post {
  id Int @id @default(autoincrement())
  title String
  categories Category[]
}

model Category {
  id Int @id @default(autoincrement())
  name String
  posts Post[]
}
```

como ficar visualmente: 

<img src="./prisma-erd(6).svg"/>

[site para criar gráficos](https://prisma-erd.simonknott.de/)


[dicas de leitura](https://pt.stackoverflow.com/questions/221018/%C3%89-realmente-necess%C3%A1rio-criar-uma-3%C2%AA-tabela-auxiliar-em-relacionamentos-n-n)
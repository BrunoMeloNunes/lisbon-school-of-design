INSERT INTO livros_has_autores(autores_id_autor, livros_id_livro)
VALUES (1,1);

select titulo_livro, nome_autor from livros 
inner join livros_has_autores on id_livro = livros_id_livro
inner join autores on id_autor = autores_id_autor

INSERT INTO compras(fk_id_cliente, fk_id_meio_de_pagamento)
VALUES (2,1);

INSERT INTO carrinho(fk_id_compra, fk_id_livro, quantidade_compra)
VALUES(1,3,10);

SELECT (preco_livro * quantidade_compra) as total_vendas FROM livros
INNER JOIN carrinho on id_livro = fk_id_livro;

SELECT nome_cliente, (preco_livro * quantidade_compra) as total FROM clientes
INNER JOIN compras on id_cliente = fk_id_cliente
inner join carrinho on id_compra =fk_id_compra
inner join livros on id_livro = fk_id_livro

UPDATE autores
set nacionalidade_autor = 'Norte Americano'
WHERE nacionalidade_autor = 'EUA'

select * from clientes
WHERE nome_cliente like '%a'

select * from livros
where titulo_livro like '% de%' or titulo_livro like '% da%' or titulo_livro like '% do%'

SELECT nome_meio_de_pagamento, SUM(preco_livro * quantidade_compra) as resultado FROM `compras`
inner join meios_de_pagamento on id_meio_de_pagamento = fk_id_meio_de_pagamento
INNER JOIN carrinho ON id_compra = fk_id_compra
inner join livros on id_livro = fk_id_livro
GROUP BY nome_meio_de_pagamento

SELECT titulo_livro, SUM(quantidade_compra) as numero_exemplares FROM livros
inner join carrinho on id_livro = fk_id_livro
GROUP BY titulo_livro
order by numero_exemplares DESC


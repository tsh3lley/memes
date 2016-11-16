#API structure:

#Route								|#HTTP Verb	| #Description
----------------------------------- | --------- | -------------------------------
/api/memes							| GET		| Get all the memes.
/api/memes							| POST		| Create a meme.
/api/memes/:meme_ticker				| GET		| Get a single meme.
/api/memes/:meme_ticker				| PUT		| Update a meme with new info.
/api/memes/:meme_ticker				| DELETE	| Delete a meme.
----------------------------------- | --------- | --------------------------------
/api/users							| GET		| Get all the users.
/api/users							| POST		| Create a user.
/api/users/:account_id				| GET		| Get a single user.
/api/users/:account_id				| PUT		| Update an account with new info.
/api/users/:account_id				| DELETE	| Delete a user.
/api/users/:account_id/transactions	| GET		| Get all user transactions
----------------------------------- | --------- | --------------------------------
/api/orders							| GET		| Get all the orders.
/api/orders							| POST		| Create an order.
/api/orders/:order_id				| GET		| Get a single order.
/api/orders/:order_id				| PUT		| Update an order with new info.
/api/orders/:order_id				| DELETE	| Cancel an order.

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
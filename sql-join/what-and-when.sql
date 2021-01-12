select "categories"."name", "films"."releaseYear"
from "filmCategory"
join "films" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie'

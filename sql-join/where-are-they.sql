select "a"."line1" as "address", "a"."district", "cities"."name", "countries"."name" as
"country"
from "cities"
join "addresses" as "a" using ("cityId")
join "countries" using ("countryId");

select "countries"."name", count("cities"."name")
from "cities"
join "countries" using ("countryId")
group by "countryId"

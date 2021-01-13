select sum("payments"."amount") as "rentalTotal", "customers"."firstName", "customers"."lastName"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "rentalTotal" desc

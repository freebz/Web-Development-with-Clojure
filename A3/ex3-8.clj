;; Selecting Records

(monger.collection/find-maps "users" {:first_name "John"})


(monger.collection/find-one-as-map "users"
  { :first_name "John"})


(monger.collection/find-map-by-id "users"
  (ObjectId. "514f455d03642f52431b5bfe"))


(monger.collection/find-maps "products" { :price { "$gt" 300 "$lte" 5000 } })

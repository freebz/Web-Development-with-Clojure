;; Inserting Records

(monger.collection/insert "users" { :first_name "John" :last_name "Doe" })



(monger.collection/insert "users" { :first_name "John" :last_name "Doe" })

(monger.collection/insert
 "users"
 { :_id (ObjectId.) :first_name "John" :last_name "Doe" })



(monger.collection/insert-and-return "users"
  { :_id (ObjectId.) :first_name "John" :last_name "Lennon" })



(monger.collection/insert-batch
 "users"
 [{ :first_name "John" :last_name "Doe" }
  { :first_name "Jane" :last_name "Smith" }])

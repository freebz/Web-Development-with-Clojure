;; Updating Records

(update "users" { :first_name "John" :last_name "Doe" })
;;update existing or insert a new record
(update "users" { :first_name "John" :last_name "Doe" } :upsert true)
